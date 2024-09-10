// @ts-nocheck
import {
  ActionList,
  Button,
  Card,
  EmptyState,
  Frame,
  IndexTable,
  Layout,
  Modal,
  Page,
  Popover, Spinner,
  Toast,
} from '@shopify/polaris';
import React, {useEffect, useState, useCallback} from 'react';
import {useActionData, useLoaderData, useNavigate, useSubmit} from "@remix-run/react";
import shopify, {authenticate} from "~/shopify.server";
import {json} from "@remix-run/node";
import {DiscountMethod} from "@shopify/discount-app-components";
// @ts-ignore
import {useMutation, useQuery} from "@apollo/client";
import {
  DELETE_DISCOUNT, DELETE_DISCOUNT_BY_X_GET_Y,
  UPDATE_DISCOUNT_STATUS_AND_COUNT,
  UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y
} from "~/graphql/mutation";
import {GET_ALL_DISCOUNT, GET_ALL_DISCOUNT_BY_X_GET_Y} from "~/graphql/query";
import axios from "axios";
import StoreModel from "~/models/store.model";

export const action = async ({request}) => {

  const {admin} = await shopify.authenticate.admin(request);
  const formData = await request.formData();
  const {
    method,
    discountId,
  } = JSON.parse(formData.get("discountDelete"));
  if (method === DiscountMethod.Code) { //
    const response = await admin.graphql(
      `#graphql
              mutation discountCodeDelete($id: ID!) {
               discountCodeDelete(id: $id) {
                 deletedCodeDiscountId
                  userErrors {
                   field
                   message
                  }
  }
}`,
      {
        variables: {
          id: discountId
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountCodeDelete.userErrors;
    return json({errors}); //tra ve neu co loi
  } else {
    const response = await admin.graphql(
      `#graphql
              mutation discountAutomaticDelete($id: ID!) {
                   discountAutomaticDelete(id: $id) {
                      deletedAutomaticDiscountId
                        userErrors {
                          field
                          message
                        }
                   }
              }`,
      {
        variables: {
          id: discountId
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountAutomaticDelete.userErrors;
    return json({errors});
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks

export const loader = async ({request}) => {
  const { session } = await authenticate.admin(request);
  let shop;
  const config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json",
    },
  };
  shop = await axios.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  );
  shop = shop.data.shop;
  let shopCreate
  const shopData = await StoreModel.findOne(
    {
      id: shop.id
    })


  const {admin} = await shopify.authenticate.admin(request);
  const responseGetFunctionId = await admin.graphql(
    `#graphql
      query {
  shopifyFunctions(first: 25) {
    nodes {
      app {
        title
      }
      apiType
      title
      id
    }
  }
}
`, {
      variables: {},
    })

  const response = await admin.graphql(
    `#graphql
      query GetDiscounts($list: Int!) {
  discountNodes(first: $list) {
    nodes {
      id
      configurationField: metafield(
        namespace: "$app:volume-discount"
        key: "function-configuration"
      ) {
        id
        value
      }
      discount {
        __typename
        ... on DiscountAutomaticApp {
          title
          discountClass
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          asyncUsageCount
          startsAt
          endsAt
          status
        }
        ... on DiscountCodeApp {
          title
          discountClass
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          startsAt
          endsAt
          status
          asyncUsageCount
          usageLimit
          appliesOncePerCustomer
          codes(first: 10) {
            nodes {
              code
            }
          }
        }
      }
    }
  }
}

      `, {
      variables: {
        list: 20,
      },
    }
  );
  const responeFunctionId = await responseGetFunctionId.json()
  const functionId = responeFunctionId.data.shopifyFunctions.nodes
    .find((/** @type {{ apiType: string; }} */ node) => node.apiType === "product_discounts")?.id ?? null;
  const responseJson = await response.json();
  const filteredNodes = responseJson.data.discountNodes.nodes.filter((/** @type {{ configurationField: null; }} */ node) => node.configurationField !== null);
  const discountList = filteredNodes.map((/** @type {{ id: string; discount: { __typename: string; codes: { nodes: { code: any; }[]; }; }; startsAt: any; endsAt: any; asyncUsageCount: any; configurationField: { id: any; value: string; }; }} */ node) => ({
    id: getId(node.id),
    discountId: node.id,
    discount: {
      ...node.discount,
      codes: node.discount.__typename === "DiscountCodeApp" ? node.discount.codes.nodes[0]?.code ?? "" : "",
    },
    startAt: node.startsAt,
    endAt: node.endsAt,
    asyncUsageCount: node.asyncUsageCount,
    configurationField: {
      id: node.configurationField.id,
      value: JSON.parse(node.configurationField.value)
    },
  }));
  const responseByXGetY = await admin.graphql(
    `#graphql
      query GetDiscounts($list: Int!) {
  discountNodes(first: $list) {
    nodes {
      id
      discount {
        __typename
        ... on DiscountAutomaticBxgy {
          title
          discountClass
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          asyncUsageCount
          startsAt
          endsAt
          status
        }
        ... on DiscountCodeBxgy {
          title
          discountClass
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          startsAt
          endsAt
          status
          asyncUsageCount
          usageLimit
          appliesOncePerCustomer
          codes(first: 10) {
            nodes {
              code
            }
          }
        }
      }
    }
  }
}

      `, {
      variables: {
        list: 20,
      },
    }
  );

  const responseJsonByXGetY = await responseByXGetY.json()
  const filteredNodesByXGetY = responseJsonByXGetY.data.discountNodes.nodes.filter(node => {
    return (
      node.discount.__typename === "DiscountAutomaticBxgy" ||
      node.discount.__typename === "DiscountCodeBxgy"
    );
  });

  return json({filteredNodesByXGetY, discountList, functionId,shop:shopData});
}
const EmptyDiscountState = ({onAction}) => (
  <EmptyState
    heading="Create discount co for your product"
    action={{
      content: "Create discount",
      onAction,
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Allow to create new discount by function.</p>
  </EmptyState>
);
const setColorStatus = function (/** @type {string} */ status) {
  switch (status) {
    case "ACTIVE":
      return "green"
    case "EXPIRED":
      return "red"
    case "SCHEDULED":
      return "yellow"
    default:
      return "black"
  }
}
const getId = function (/** @type {string} */ discountId) {
  if (discountId) {
    return discountId.split("/").pop()
  }

}
const DiscountList = () => {
  const {discountList, functionId, filteredNodesByXGetY,shop} = useLoaderData();
  const [discountListData, setDiscountData] = useState([{}])
  const [discountListDataBefore, setDiscountDataBefore] = useState([{}])
  const [discountListDataByXGetY, setDiscountDataByXGetY] = useState([{}])
  const [discountListDataByXGetYBefore, setDiscountDataByXGetYBefore] = useState([{}])
  const navigate = useNavigate();
  const actionData = useActionData();
  const submitForm = useSubmit();
  const [active, setActive] = useState(false);
  const [activeByXgetYModal, setActiveByXgetYModal] = useState(false);

  const [discount, setDiscount] = useState();
  const [activeToast, setActiveToast] = useState(false);
  const [count, setCount] = useState(0)
  const [delete_discount] = useMutation(DELETE_DISCOUNT);
  const [delete_discount_by_x_get_y] = useMutation(DELETE_DISCOUNT_BY_X_GET_Y);

  const [updateDiscount] = useMutation(UPDATE_DISCOUNT_STATUS_AND_COUNT)
  const [updateDiscountByXGetY] = useMutation(UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y)
  const [activeMessage, setActiveMessage] = useState(false);
  const toggleActive = useCallback(() => setActiveMessage((active) => !active), []);
  const [message, setMessage] = useState("")
  const {loading: DiscountLoading, data: DiscountsData} = useQuery(GET_ALL_DISCOUNT)
  const {loading: byXGetYLoading, data: byXGetYDiscountsData} = useQuery(GET_ALL_DISCOUNT_BY_X_GET_Y)
  useEffect(() => {
    if (discountList) {
      if(shop){
        // Tạo một mảng chứa các promise từ việc gọi hàm discountUpdate cho mỗi phần tử trong discountList
        const updatePromises = discountList.map((/** @type {{ discountId: any; discount: { status: any; asyncUsageCount: any; }; }} */ node) =>
          setTimeout(() => discountUpdate(node.discountId, node.discount.status, node.discount.asyncUsageCount), 1500)
        );
        // Sử dụng Promise.all để đợi tất cả các promise hoàn thành
        Promise.all(updatePromises)
          .then(() => {
            if (!DiscountLoading) {
              if (DiscountsData) {
                // Cập nhật DiscountsData
                const updatedDiscountsData = DiscountsData.getAllDiscount.map((/** @type {{ discountId: any; }} */ discount) => {
                  const matchingNode = discountList.find((/** @type {{ discountId: any; }} */ node) => node.discountId === discount.discountId);
                  if (matchingNode) {
                    // Nếu tìm thấy phần tử trùng, set status và asyncUsageCount từ node
                    return {
                      ...discount,
                      status: matchingNode.discount.status,
                      asyncUsageCount: matchingNode.discount.asyncUsageCount.toString(),
                    };
                  } else {
                    // Nếu không tìm thấy phần tử trùng, giữ nguyên phần tử
                    return discount;
                  }
                });
                console.log(updatedDiscountsData);
                setDiscountData(updatedDiscountsData);
                setDiscountDataBefore(updatedDiscountsData)
              } else {
                setDiscountData([]);
              }
            }
          })
          .catch((error) => {
            console.error('Error updating discounts:', error);
          });
      }
    }
    if(!byXGetYLoading){
      if (filteredNodesByXGetY) {
        if(shop) {
          const updatePromises = filteredNodesByXGetY.map((node) =>
            setTimeout(() => discountUpdateByXGetY(node.id, node.discount.status, node.discount.asyncUsageCount), 1500)
          );
          // Sử dụng Promise.all để đợi tất cả các promise hoàn thành
          Promise.all(updatePromises)
            .then(() => {
              if (!DiscountLoading) {
                if (byXGetYDiscountsData) {
                  const updatedDiscountsData = byXGetYDiscountsData.getAllDiscountByXGetY.map((/** @type {{ discountId: any; }} */ discount) => {
                    const matchingNode = filteredNodesByXGetY.find((/** @type {{ id: any; }} */ node) => node.id === discount.discountId);
                    if (matchingNode) {
                      // Nếu tìm thấy phần tử trùng, set status và asyncUsageCount từ node
                      return {
                        ...discount,
                        status: matchingNode.discount.status,
                        asyncUsageCount: matchingNode.discount.asyncUsageCount.toString(),
                      };
                    } else {
                      // Nếu không tìm thấy phần tử trùng, giữ nguyên phần tử
                      return discount;
                    }
                  });
                  console.log(updatedDiscountsData);
                  setDiscountDataByXGetY(updatedDiscountsData);
                  setDiscountDataByXGetYBefore(updatedDiscountsData)
                } else {
                  setDiscountDataByXGetY([]);
                }
              }
            })
            .catch((error) => {
              console.error('Error updating discounts:', error);
            });
        }
      }
    }

  }, [DiscountLoading,byXGetYLoading]);
  useEffect(() => {
    if (actionData?.errors.length===0) {

      const discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.discountId);
      setDiscountData(discountDataUpdate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData, count]);

  const discountDelete = async (/** @type {{ discountId: any; } | undefined} */ discount) => {
    try {
      if (discount) {
        const createPromise = await delete_discount({
          variables: {
            input: {
              discountId: discount.discountId,
              storeId:shop.id,

            }
          }
        })
        const timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error('Update program timed out'));
          }, 10000);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const discountDeleteByXGetY = async (/** @type {{ discountId: any; } | undefined} */ discount) => {
    try {
      if (discount) {
        const createPromise = await delete_discount_by_x_get_y({
          variables: {
            input: {
              discountId: discount.id,
              storeId:shop.id,
            }
          }
        })
        const timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error('Update program timed out'));
          }, 10000);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const discountUpdate = async (/** @type {any} */ discountId,/** @type {any} */ status,/** @type {any} */ asyncUsageCount) => {
    try {
      const createPromise = await updateDiscount({
        variables: {
          input: {
            storeId:shop.id,
            discountId: discountId,
            status: status,
            asyncUsageCount: asyncUsageCount.toString(),
          }
        }
      })
      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Update program timed out'));
        }, 10000);
      });
      await Promise.race([createPromise, timeoutPromise]);
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const discountUpdateByXGetY = async (/** @type {any} */ discountId,/** @type {any} */ status,/** @type {any} */ asyncUsageCount) => {
    try {
      const createPromise = await updateDiscountByXGetY({
        variables: {
          input: {
            storeId:shop.id,
            discountId: discountId,
            status: status,
            asyncUsageCount: asyncUsageCount.toString(),

          }
        }
      })
      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Update program timed out'));
        }, 10000);
      });
      await Promise.race([createPromise, timeoutPromise]);
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const showDiscount = ( /** @type {string | undefined} */ discountId) => {
    console.log("Showing discount with ID:", discountId);
    navigate(`../../app/volume-discount/${functionId}/${discountId}`);
  };
  const showDiscountByXgetY = ( /** @type {string | undefined} */ id) => {
    console.log("Showing discount with ID:", id);
    navigate(`../../app/byXgetYdiscount/${id}`);
  };
  const openRemoveDiscountModal = (/** @type {any} */discount) => {
    setActive(true)
    const findDiscount = discountList.find((/** @type {{ discountId: any; }} */ node) => node.discountId === discount.discountId);
    setDiscount(findDiscount)
    console.log("Removing discount with ID:", findDiscount);
  };
  const openRemoveDiscountByXgetYModal = (/** @type {any} */discount) => {
    setActiveByXgetYModal(true)
    const findDiscount = filteredNodesByXGetY.find((/** @type {{ discountId: any; }} */ node) => node.id === discount.discountId);
    setDiscount(findDiscount)
    console.log("Removing discount with ID:", findDiscount);
  };
  const deleteDiscount = () => {
    setActive(false)
    console.log(discount)
    if (discount !== undefined) {
      const discountToDelete = {
        // @ts-ignore
        method: discount?.discount.__typename !== "DiscountCodeApp" ? DiscountMethod.Automatic : DiscountMethod.Code,
        // @ts-ignore
        discountId: discount?.discountId,
      }
      submitForm({discountDelete: JSON.stringify(discountToDelete)}, {method: "post"});
      setCount(1)
      discountDelete(discount).then()
      setActiveToast(true)


    }

  }
  const deleteDiscountByXGetY = () => {
    setActiveByXgetYModal(false)
    console.log(discount)
    if (discount !== undefined) {
      const discountToDelete = {
        // @ts-ignore
        method: discount?.discount.__typename === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
        // @ts-ignore
        discountId: discount?.id,
      }
      submitForm({discountDelete: JSON.stringify(discountToDelete)}, {method: "post"});
      setCount(1)
      discountDeleteByXGetY(discount).then()
      const discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.id);
      setDiscountDataByXGetY(discountDataUpdate)
      setActiveToast(true)

    }

  }

  const [popoverActiveDiscount, setPopoverActiveDiscount] = useState(false);
  const [popoverActiveStatus, setPopoverActiveStatus] = useState(false);
  const [popoverActiveMethod, setPopoverActiveMethod] = useState(false);
  const [popoverActiveStatusByXGetY, setPopoverActiveStatusByXGetY] = useState(false);
  const [popoverActiveMethodByXGetY, setPopoverActiveMethodByXGetY] = useState(false);


  const togglePopoverDiscount = useCallback(
    () => setPopoverActiveDiscount((popoverActive) => !popoverActive),
    [],
  );
  const togglePopoverActiveStatus = useCallback(
    () => setPopoverActiveStatus((popoverActive) => !popoverActive),
    [],
  );
  const togglePopoverActiveMethod = useCallback(
    () => setPopoverActiveMethod((popoverActive) => !popoverActive),
    [],
  );
  const togglePopoverActiveStatusByXGetY = useCallback(
    () => setPopoverActiveStatusByXGetY((popoverActive) => !popoverActive),
    [],
  );
  const togglePopoverActiveMethodByXGetY = useCallback(
    () => setPopoverActiveMethodByXGetY((popoverActive) => !popoverActive),
    [],
  );
  const newDiscount = (
    <Button onClick={togglePopoverDiscount} variant="primary">
      New Discount
    </Button>
  );
  const activator = (
    <Button onClick={togglePopoverActiveStatus} disclosure>
      Status
    </Button>
  );
  const activator2 = (
    <Button onClick={togglePopoverActiveMethod} disclosure>
      Method
    </Button>
  );
  const activator3 = (
    <Button onClick={togglePopoverActiveStatusByXGetY} disclosure>
      Status
    </Button>
  );
  const activator4 = (
    <Button onClick={togglePopoverActiveMethodByXGetY} disclosure>
      Method
    </Button>
  );
  const handleAllDiscountApp = () => {
    setDiscountData(discountListDataBefore)
  }
  const handleAllDiscountAppByXGetY = () => {
    setDiscountDataByXGetY(discountListDataByXGetYBefore)
  }
  const handleDiscountAppActive = () => {
    const activeDiscounts = discountListDataBefore.filter(
      discount => discount.status === 'ACTIVE'
    );

    if (activeDiscounts.length === 0) {
      setMessage("Discount not found")
      setActiveMessage(true)
    } else {
      setDiscountData(activeDiscounts);
    }
  }
  const handleDiscountAppActiveByXGetY = () => {
    const activeDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      discount => discount.status === 'ACTIVE'
    );

    if (activeDiscountsByXGetY.length === 0) {
      setMessage("Discount not found")
      setActiveMessage(true)
    } else {
      setDiscountDataByXGetY(activeDiscountsByXGetY);
    }
  }

  const handleDiscountAppExpired = () => {
    const expiredDiscounts = discountListDataBefore.filter(
      discount => discount.status === 'EXPIRED'
    );
    if (expiredDiscounts.length === 0) {
      setMessage("Discount not found")
      setActiveMessage(true)
    } else {
      setDiscountData(expiredDiscounts);
    }
  }
  const handleDiscountAppExpiredByXGetY = () => {
    const expiredDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      discount => discount.status === 'EXPIRED'
    );
    if (expiredDiscountsByXGetY.length === 0) {
      setMessage("Discount not found")
      setActiveMessage(true)
    } else {
      setDiscountDataByXGetY(expiredDiscountsByXGetY);
    }

  }
  const handleDiscountAppCode = () => {
    const codeDiscounts = discountListDataBefore.filter(
      discount => discount.method === 'Code'
    );
    setDiscountData(codeDiscounts);
  }
  const handleDiscountAppCodeByXGetY = () => {
    const codeDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      discount => discount.method === 'Code'
    );
    setDiscountDataByXGetY(codeDiscountsByXGetY);
  }
  const handleDiscountAppAutomatic = () => {
    const automaticDiscounts = discountListDataBefore.filter(
      discount => discount.method === 'Automatic'
    );
    setDiscountData(automaticDiscounts);
  }
  const handleDiscountAppAutomaticByXGetY = () => {
    const automaticDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      discount => discount.method === 'Automatic'
    );
    setDiscountDataByXGetY(automaticDiscountsByXGetY);
  }
  const toastMarkup = activeMessage ? (
    <Toast content={message} onDismiss={toggleActive} error/>
  ) : null;
  return (
    <>
      <ui-title-bar title="Discount List">
      </ui-title-bar>
      <div style={{position: 'absolute', top: '20px', right: '20px', marginBottom: '15px'}}>
        <Popover
          active={popoverActiveDiscount}
          activator={newDiscount}
          autofocusTarget="first-node"
          onClose={togglePopoverDiscount}
        >
          <ActionList
            actionRole="menuitem"
            items={[
              {
                content: 'Code or Automatic',
                onAction: () => navigate(`../../app/volume-discount/${functionId}/new`),
              },
              {
                content: 'By x Get y',
                onAction: () => navigate(`../../app/byXgetYdiscount/new`),
              }]}
          />
        </Popover>
      </div>
      <Page>
        <Layout>
          <Layout.Section>
            <div style={{marginBottom: '20px'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>
                Discount Code And Discount Automatic List
              </p>
            </div>
            {DiscountLoading ? (
              <Spinner accessibilityLabel="Spinner example" size="large"/>) : (
              <>
                {discountListData.length===0 ? (
                  <EmptyDiscountState onAction={() => navigate(`../../app/volume-discount/${functionId}/new`)}/>
                ) : (

                  <Card padding="0">
                    <div style={{display: 'flex', marginBottom: '5px'}}>
                      <div style={{marginRight: '20px'}}>
                        <Button onClick={handleAllDiscountApp} size={"medium"}>
                          All discount
                        </Button>
                      </div>
                      <div style={{marginRight: '20px'}}>
                        <Popover
                          active={popoverActiveStatus}
                          activator={activator}
                          autofocusTarget="first-node"
                          onClose={togglePopoverActiveStatus}
                        >
                          <ActionList
                            actionRole="menuitem"
                            items={[
                              {
                                content: 'Active',
                                onAction: handleDiscountAppActive,
                              },
                              {
                                content: 'EXPIRED',
                                onAction: handleDiscountAppExpired,
                              }]}
                          />
                        </Popover>
                      </div>
                      <div style={{marginRight: '20px'}}>
                        <Popover
                          active={popoverActiveMethod}
                          activator={activator2}
                          autofocusTarget="first-node"
                          onClose={togglePopoverActiveMethod}
                        >
                          <ActionList
                            actionRole="menuitem"
                            items={[{
                              content: 'Code',
                              onAction: handleDiscountAppCode,

                            }, {
                              content: 'Automatic',
                              onAction: handleDiscountAppAutomatic,

                            }]}
                          />
                        </Popover>
                      </div>

                    </div>

                    <>
                      <IndexTable
                        resourceName={{
                          singular: "Discount List",
                          plural: "Discount List",
                        }}

                        itemCount={discountListData.length}
                        headings={[
                          {title: "Id"},
                          {title: "Title"},
                          {title: "Method"},
                          {title: "Start Date"},
                          {title: "Start Time"},
                          {title: "End Date"},
                          {title: "End Time"},
                          {title: "Status"},
                          {title: "Used"},
                          {title: "Action", hidden: true},
                          {title: "Action2", hidden: true},
                        ]}
                        selectable={false}
                      >
                        {discountListData.map((discount, index) => (
                          <IndexTable.Row key={index} id={discount.discountId} position={discount.discountId}>
                            <IndexTable.Cell>
                              {getId(discount.discountId)}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.code !== "" ? discount.code : discount.title}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.method}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {new Date(discount.startsAt).toLocaleDateString()}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {new Date(discount.startsAt).toLocaleTimeString()}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.endsAt !== "" ? new Date(discount.endsAt).toLocaleDateString() : "Not set"}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.endsAt !== "" ? new Date(discount.endsAt).toLocaleTimeString() : "Not set"}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <div style={{color: setColorStatus(discount.status)}}>
                                {discount.status}
                              </div>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.asyncUsageCount}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <Button variant="plain" onClick={() => showDiscount(getId(discount.discountId))}>View
                                discount</Button>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <Button variant="plain" onClick={() => openRemoveDiscountModal(discount)}>Remove</Button>
                            </IndexTable.Cell>
                          </IndexTable.Row>
                        ))}
                      </IndexTable>
                    </>

                  </Card>
                )}
              </>
            )}

          </Layout.Section>
        </Layout>


        <Layout>
          <Layout.Section>
            <div style={{marginBottom: '20px', marginTop: '30px'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>
                Discount By X get Y List
              </p>
            </div>
            {byXGetYLoading  ? (
              <Spinner accessibilityLabel="Spinner example" size="large"/>) : (
              <>
                {discountListDataByXGetY.length === 0 ? (
                  <EmptyDiscountState onAction={() => navigate(`../../app/byXgetYdiscount/new`)}/>
                ) : (
                  <Card padding="0">
                    <div style={{display: 'flex', marginBottom: '5px'}}>
                      <div style={{marginRight: '20px'}}>
                        <Button onClick={handleAllDiscountAppByXGetY} size={"medium"}>
                          All discount
                        </Button>
                      </div>
                      <div style={{marginRight: '20px'}}>
                        <Popover
                          active={popoverActiveStatusByXGetY}
                          activator={activator3}
                          autofocusTarget="first-node"
                          onClose={togglePopoverActiveStatusByXGetY}
                        >
                          <ActionList
                            actionRole="menuitem"
                            items={[
                              {
                                content: 'Active',
                                onAction: handleDiscountAppActiveByXGetY,
                              },
                              {
                                content: 'EXPIRED',
                                onAction: handleDiscountAppExpiredByXGetY,
                              }]}
                          />
                        </Popover>
                      </div>
                      <div style={{marginRight: '20px'}}>
                        <Popover
                          active={popoverActiveMethodByXGetY}
                          activator={activator4}
                          autofocusTarget="first-node"
                          onClose={togglePopoverActiveMethodByXGetY}
                        >
                          <ActionList
                            actionRole="menuitem"
                            items={[{
                              content: 'Code',
                              onAction: handleDiscountAppCodeByXGetY,

                            }, {
                              content: 'Automatic',
                              onAction: handleDiscountAppAutomaticByXGetY,

                            }]}
                          />
                        </Popover>
                      </div>

                    </div>
                    <>
                      <IndexTable
                        resourceName={{
                          singular: "Discount List By X Get Y",
                          plural: "Discount List",
                        }}

                        itemCount={discountListDataByXGetY.length}
                        headings={[
                          {title: "Id"},
                          {title: "Title"},
                          {title: "Method"},
                          {title: "Start Date"},
                          {title: "Start Time"},
                          {title: "End Date"},
                          {title: "End Time"},
                          {title: "Status"},
                          {title: "Used"},
                          {title: "Action", hidden: true},
                          {title: "Action2", hidden: true},
                        ]}
                        selectable={false}
                      >

                        {discountListDataByXGetY.map((discount, index) => (
                          <IndexTable.Row key={index} id={discount.discountId} position={discount.discountId}>
                            <IndexTable.Cell>
                              {getId(discount.discountId)}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.code !== "" ? discount.code : discount.title}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.method}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {new Date(discount.startsAt).toLocaleDateString()}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {new Date(discount.startsAt).toLocaleTimeString()}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.endsAt !== "" ? new Date(discount.endsAt).toLocaleDateString() : "Not set"}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.endsAt !== "" ? new Date(discount.endsAt).toLocaleTimeString() : "Not set"}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <div style={{color: setColorStatus(discount.status)}}>
                                {discount.status}
                              </div>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              {discount.asyncUsageCount}
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <Button variant="plain" onClick={() => showDiscountByXgetY(discount.id)}>View
                                discount</Button>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <Button variant="plain" onClick={() => openRemoveDiscountByXgetYModal(discount)}>Remove</Button>
                            </IndexTable.Cell>
                          </IndexTable.Row>
                        ))}
                      </IndexTable>
                    </>

                  </Card>
                )}
              </>
            )}

          </Layout.Section>
        </Layout>
      </Page>
      <div style={{height: '500px'}}>
        <Frame>
          <Modal
            open={active}
            onClose={() => setActive(false)}
            title="Are you sure to delete this discount ?"
            primaryAction={{
              content: 'Delete',
              onAction: deleteDiscount,
            }}
            secondaryActions={[
              {
                content: 'Cancel',
                onAction: () => setActive(false),
              },
            ]}
          >
          </Modal>
          <Modal
            open={activeByXgetYModal}
            onClose={() => setActiveByXgetYModal(false)}
            title="Are you sure to delete this discount _222 ?"
            primaryAction={{
              content: 'Delete',
              onAction: deleteDiscountByXGetY,
            }}
            secondaryActions={[
              {
                content: 'Cancel',
                onAction: () => setActiveByXgetYModal(false),
              },
            ]}
          >
          </Modal>
        </Frame>
      </div>
      <div style={{height: '250px'}}>
        <Frame>
          {activeToast ? (
            <Toast content="Discount Delete" onDismiss={() => setActiveToast(false)}/>
          ) : null}
          {toastMarkup}
        </Frame>
      </div>
    </>
  );
};

export default DiscountList;


