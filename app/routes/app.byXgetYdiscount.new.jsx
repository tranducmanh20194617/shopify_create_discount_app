import {
  ActiveDatesCard,
  CombinationCard,
  DiscountClass,
  DiscountMethod,
  DiscountStatus,
  Eligibility,
  MethodCard,
  RequirementType,
  SummaryCard,
  UsageLimitsCard,
} from "@shopify/discount-app-components";
import {
  BlockStack,
  Box,
  Button,
  Card,
  ChoiceList,
  Layout, Page, PageActions, ResourceItem,
  ResourceList,
  Frame,
  Text,
  TextField, Thumbnail, Toast
} from "@shopify/polaris";
import {Form, useActionData, useLoaderData, useNavigate, useNavigation, useSubmit} from "@remix-run/react";
import {useField, useForm} from "@shopify/react-form";
import {useCallback, useEffect, useMemo, useState} from "react";
import {CurrencyCode} from "@shopify/react-i18n";
import shopify, {authenticate} from "~/shopify.server";
import {json} from "@remix-run/node";
import {Function} from "~/const/Function";
import {CREATE_DISCOUNT_BY_X_GET_Y} from "~/graphql/mutation";
// @ts-ignore
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_DISCOUNT_BY_X_GET_Y} from "~/graphql/query";
import axios from "axios";
import StoreModel from "~/models/store.model";

const EmptyProductSelected = () => (
  <div style={{textAlign: "center", maxHeight: "60vh"}}>
    <img style={{height: '60px', width: "60px"}}
         src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png" alt="test"/>
    <p style={{fontWeight: "bold"}}>There are no products selected</p>
    <p>Please choose product for this By X Get Y discount</p>
  </div>
)

export const action = async ({request}) => {
  const {admin} = await shopify.authenticate.admin(request);
  const formData = await request.formData();
  const {
    title,
    method,
    code,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    productSpendId,
    productGetId,
    configuration
  } = JSON.parse(formData.get("discountForm"));

  let valueSpend
  let valueGet
  if(configuration.quantityPurchase>0)
  {
    valueSpend = {quantity: configuration.quantityPurchase }
  }
  else {
    valueSpend = {amount:configuration.amountPurchase}
  }
  if(configuration.freeGet)
  {
    valueGet = {
      discountOnQuantity :{
        effect :{
          percentage: 1.0
        },
        quantity:configuration.quantityGet,
      },

    }
  }
  else {
    valueGet = {
      discountOnQuantity :{
        effect :{
          percentage: configuration.percentageGet/100
        },
        quantity:configuration.quantityGet,
      },

    }
  }
  const baseDiscount = {
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt),

    customerBuys: {
      items :{
        all:false,
        products :{
          productVariantsToAdd :productSpendId
        }
      },
      value :valueSpend
    },
    customerGets:{

      items :{
        all:false,
        products :{
          productVariantsToAdd :productGetId
        }
      },
      value : valueGet
    }

  };

  if (method === DiscountMethod.Code) { //
    const baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer,
      customerSelection:{
        all: true,
      },
    };
    const response = await admin.graphql(
      `
      mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
                 discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
                             codeDiscountNode{
                                id
                             codeDiscount{
                                 ...on DiscountCodeBxgy{
                                      __typename
                                           title
                                           status
                                           startsAt
                                           usageLimit
                                           endsAt
                                           appliesOncePerCustomer
                                           combinesWith {
                                             orderDiscounts
                                             productDiscounts
                                             shippingDiscounts
                                            }
                                           asyncUsageCount
                                           codes(first: 10){
                                           nodes{
                                             code
                                           }
                                  }
                             }
                           }
                }
    userErrors {
      field
      message
    }
  }
}
             `,
      {
        variables: {
          bxgyCodeDiscount: baseCodeDiscount
        },
      }
    );
    const responseJson = await response.json();
    const errors = responseJson.data.discountCodeBxgyCreate?.userErrors;
    const discountData = responseJson.data.discountCodeBxgyCreate?.codeDiscountNode
    return json({errors,responseJson,discountData}); //tra ve neu co loi
  } else {
    const response = await admin.graphql(
      `#graphql
              mutation discountAutomaticBxgyCreate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
                     discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
                      automaticDiscountNode {
                             id
                          automaticDiscount {
                        ... on DiscountAutomaticBxgy {
                            __typename
                            title
                            status
                            startsAt
                            endsAt
                            asyncUsageCount
                            combinesWith {
                                     orderDiscounts
                                     productDiscounts
                                     shippingDiscounts
                                     }
                        }
                      }
                   }
                    userErrors {
                        field
                        message
                     }
             }
       }`,
      {
        variables: {
          automaticBxgyDiscount: baseDiscount
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountAutomaticBxgyCreate?.userErrors;
    const automaticDiscountData = responseJson.data.discountAutomaticBxgyCreate?.automaticDiscountNode
    return json({errors,responseJson,automaticDiscountData});
  }
};
export async function loader({ request }) {
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
  const shopData = await StoreModel.findOne(
    {
      id: shop.id
    })

  return json({
    shop:shopData,

  });
}
const getId = function (/** @type {string} */ discountId) {
  if (discountId) {
    return discountId.split("/").pop()
  }

}
const ByXGetYDiscount = () => {
  const {
    validateNumber,
    validatePercentage
  } = Function()
  const today = useMemo(() => new Date(), []); // fix
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(0)
  const {shop}= useLoaderData()
  const navigate = useNavigate()
  const navigation = useNavigation();
  const actionData = useActionData();
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [message,setMessage] = useState("")

  const isLoading = navigation.state === "submitting";
  const [quantityPurchase, setQuantityPurchase] = useState("")
  const [amountPurchase, setAmountPurchase] = useState("")
  const currencyCode = CurrencyCode.Cad;
  const [selectedPurchase, setSelectedPurchase] = useState(['quantity']);
  const [selectedGet, setSelectedGet] = useState(['percentage']);
  const [percentageGet, setPercentageGet] = useState("")
  const [amountGet, setAmountGet] = useState("")
  const [quantityGet, setQuantityGet] = useState("")
  const submitForm = useSubmit();

  const [productSpendId, setProductSpendId] = useState([]);
  const [productGetId, setProductGetId] = useState([]);

  const [productSpend, setProductSpend] = useState([{}]);
  const [productGet, setProductGet] = useState([{}]);

  const [createDiscount] = useMutation(CREATE_DISCOUNT_BY_X_GET_Y);
  const {loading: byXGetYLoading, data: byXGetYDiscountsData} = useQuery(GET_ALL_DISCOUNT_BY_X_GET_Y)

  const addDiscountCode = async () => {
    try {
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId:shop.id,
            id: getId(actionData.discountData.id),
            discountId: actionData.discountData.id,
            title: actionData.discountData.codeDiscount.title,
            code: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? actionData.discountData.codeDiscount.codes.nodes[0]?.code ?? "" : "",
            method: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.codeDiscount.combinesWith),
            usageLimit: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" && actionData.discountData.codeDiscount.usageLimit !== null ? actionData.discountData.codeDiscount.usageLimit.toString() : "",
            status: actionData.discountData.codeDiscount.status,
            startsAt: actionData.discountData.codeDiscount.startsAt,
            endsAt: actionData.discountData.codeDiscount.endsAt,
            asyncUsageCount: actionData.discountData.codeDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? actionData.discountData.codeDiscount.appliesOncePerCustomer : false,
            quantityPurchase: quantityPurchase,
            amountPurchase: amountPurchase,
            quantityGet:quantityGet,
            percentageGet: selectedGet.includes('free') ===true ? "100":percentageGet,
            productPurchase:JSON.stringify(productSpend),
            productPurchaseId:JSON.stringify(productSpendId),
            productGet:JSON.stringify(productGet),
            productGetId:JSON.stringify(productGetId),
          }
        }
      })

      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Update program timed out'));
        }, 10000);
      });

      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const addDiscountAutomatic = async () => {
    try {
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId:shop.id,
            id: getId(actionData.automaticDiscountData.id),
            discountId: actionData.automaticDiscountData.id,
            title: actionData.automaticDiscountData.automaticDiscount.title,
            code: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? actionData.automaticDiscountData.automaticDiscount.codes.nodes[0]?.code ?? "" : "",
            method: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.automaticDiscountData.automaticDiscount.combinesWith),
            usageLimit: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" && actionData.automaticDiscountData.automaticDiscount.usageLimit !== null ? actionData.automaticDiscountData.automaticDiscount.usageLimit.toString() : "",
            status: actionData.automaticDiscountData.automaticDiscount.status,
            startsAt: actionData.automaticDiscountData.automaticDiscount.startsAt,
            endsAt: actionData.automaticDiscountData.automaticDiscount.endsAt,
            asyncUsageCount: actionData.automaticDiscountData.automaticDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? actionData.automaticDiscountData.automaticDiscount.appliesOncePerCustomer : false,
            quantityPurchase: quantityPurchase,
            amountPurchase: amountPurchase,
            quantityGet:quantityGet,
            percentageGet: percentageGet,
            productPurchase:JSON.stringify(productSpend),
            productPurchaseId:JSON.stringify(productSpendId),
            productGet:JSON.stringify(productGet),
            productGetId:JSON.stringify(productGetId),
          }
        }
      })

      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Update program timed out'));
        }, 10000);
      });

      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {

    if(actionData?.errors.length === 0)
    {
      console.log(actionData?.responseJson)
      if(actionData.discountData)
      {
        console.log("code")
        addDiscountCode().then(() => {
          // Add your modifications here
          console.log(actionData?.discountData);
          navigate("../../app/discountList");
        }).catch(error => {
          console.error('Error:', error);
          // Handle error if needed
        });
      }
      else if (actionData.automaticDiscountData)
      {
        addDiscountAutomatic().then(() => {
          // Add your modifications here
          console.log("automatic");
          console.log(actionData?.automaticDiscountData);
          navigate("../../app/discountList");
        }).catch(error => {
          console.error('Error:', error);
          // Handle error if needed
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);
  useEffect(() => {
    console.log(productSpend)
  }, [productSpend]);
  useEffect(() => {
    if (selectedPurchase.includes('quantity')) {
      setAmountPurchase("")
    } else {
      setQuantityPurchase("")
    }
  }, [selectedPurchase]);
  useEffect(() => {
    if (selectedGet.includes('percentage')) {
      setAmountGet("")
    }
    else  if (selectedGet.includes('amount')) {
      setPercentageGet("")
    }
    else {
      setPercentageGet("")
      setAmountGet("")
    }
  }, [selectedGet]);
  useEffect(() => {
    if(count===1)
    {
      if(check===1)
      {
        setMessage('Discount code cannot be empty')
        setActive(true)
      }
      else if(check===2)
      {
        setMessage('Invalid Minimum  purchase quantity')
        setActive(true)

      }
      else if(check===3)
      {
        setMessage('Invalid Minimum purchase amount')
        setActive(true)

      }
      else if(check===4)
      {
        setMessage('Invalid Minimum quantity get')
        setActive(true)

      }
      else if(check===5)
      {
        setMessage('Invalid Minimum Percentage get')
        setActive(true)

      }
      else if(check===6)
      {
        setMessage('Product Spend can not be empty')
        setActive(true)

      }
      else if(check===7)
      {
        setMessage('Product Get can not be empty')
        setActive(true)

      }
      else if(check===8){
        setMessage('Discount Create Success')
        setActive(true)
      }
      else if (check === 15) {
        setMessage('Discount cannot be duplicated')
        setActive(true)

      }
      setCount(0); // Reset count sau khi hiển thị thông báo

    }

  }, [count,check]);


  const handleChangePurchase = (/** @type {React.SetStateAction<string[]>} */ value) => {
    setSelectedPurchase(value)
  }
  const handleChangeGet = (/** @type {React.SetStateAction<string[]>} */ value) => {
    setSelectedGet(value)
  }
  const handleChangePurchaseQuantity = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setQuantityPurchase(newValue);
    },
    [],);

  const handleChangePurchaseAmount = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setAmountPurchase(newValue);
    },
    [],);
  const handleChangeGetQuantity = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setQuantityGet(newValue);
    },
    [],);
  const handleChangeGetPercentage = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setPercentageGet(newValue);
    },
    [],);
  const handleChangeGetAmount = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setAmountGet(newValue);
    },
    [],);
  const removeItemFromProductSpend = (/** @type {any} */ productVariantId) => {
    const updatedProductSpend = productSpend.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductSpend(updatedProductSpend.length > 0 ? updatedProductSpend : [{}]);

    /**
       * @type {string | any[] | ((prevState: never[]) => never[])}
       */
    const updatedProductSpendId = productSpendId.filter(
      (item) => item !== productVariantId
    );
    // @ts-ignore
    setProductSpendId(updatedProductSpendId.length > 0 ? updatedProductSpendId : []);
  };
  const removeItemFromProductGet = (/** @type {any} */ productVariantId) => {
    const updatedProductGet = productGet.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductGet(updatedProductGet.length > 0 ? updatedProductGet : [{}]);
    /**
       * @type {string | any[] | ((prevState: never[]) => never[])}
       */
    const updatedProductGetId = productGetId.filter(
      (item) => item !== productVariantId
    );
    // @ts-ignore
    setProductGetId(updatedProductGetId.length > 0 ? updatedProductGetId : []);
  };

  async function selectProductSpend() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select", // customized action verb, either 'select' or 'add',
      multiple: 1,
    });
    if (products) {
      const selectedProducts = products.map(product => {
        const {images, id, variants, title, handle} = product;
        // Map each variant along with its parent product information
        return variants.map(variant => {
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: images[0]?.altText,
            productImage: images[0]?.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku,
          };
        });
      });
      const flattenedVariants = selectedProducts.flat();
      setProductSpend(flattenedVariants);

      const selectedVariantIds = products.map(product => {
        return product.variants.map(variant => variant.id);
      }).flat();
      // @ts-ignore
      setProductSpendId(prevIds => [...prevIds, ...selectedVariantIds]);

    }
  }

  async function selectProductGet() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select", // customized action verb, either 'select' or 'add',
      multiple: 3,
    });
    if (products) {
      const selectedProducts = products.map(product => {
        const {images, id, variants, title, handle} = product;
        // Map each variant along with its parent product information
        return variants.map(variant => {
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: images[0]?.altText,
            productImage: images[0]?.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku,
          };
        });
      });
      // Flatten the array of arrays to a single array of variants
      const flattenedVariants = selectedProducts.flat();
      setProductGet(flattenedVariants);

      const selectedVariantIds = products.map(product => {
        return product.variants.map(variant => variant.id);
      }).flat();
      // @ts-ignore
      setProductGetId(prevIds => [...prevIds, ...selectedVariantIds]);

    }
  }
  const toastMarkup = active ? (
    <Toast content={message} onDismiss={toggleActive} error={check !== 8} />
  ) : null;
  const {
    // Định nghĩa các trường nhập liệu và giá trị khởi tạo của chúng
    fields: {
      discountTitle,
      discountCode,
      discountMethod,
      combinesWith,
      requirementType,
      requirementSubtotal,
      requirementQuantity,
      usageLimit,
      appliesOncePerCustomer,
      startDate,
      endDate,

    },
    submit,
  } = useForm({
    fields: {
      discountTitle: useField(""),
      discountMethod: useField(DiscountMethod.Code),
      discountCode: useField(""),
      combinesWith: useField({
        orderDiscounts: false,
        productDiscounts: false,
        shippingDiscounts: false,
      }),
      requirementType: useField(RequirementType.None),
      requirementSubtotal: useField("0"),
      requirementQuantity: useField("0"),
      usageLimit: useField(null),
      appliesOncePerCustomer: useField(false),
      startDate: useField(today),
      endDate: useField(null),
      configuration: {
        quantityPurchase: useField(""),
        amountPurchase: useField(""),
        quantityGet:useField(""),
        percentageGet:useField(""),
        amountGet:useField(""),
        freeGet:useField(false)
      },

    },
    onSubmit: async (form) => {
      setCount(1)
      let discount;
      let existingDiscount
      let existingDiscountTitle
      discount = {
        title: form.discountTitle,
        method: form.discountMethod,
        code: form.discountCode,
        combinesWith: form.combinesWith,
        usageLimit: form.usageLimit == null ? null : parseInt(form.usageLimit),
        appliesOncePerCustomer: form.appliesOncePerCustomer,
        startsAt: form.startDate,
        endsAt: form.endDate,
        configuration: {
          quantityPurchase: quantityPurchase,
          amountPurchase: parseFloat(amountPurchase),
          quantityGet: quantityGet,
          amountGet: parseFloat(amountGet),
          percentageGet:parseFloat(percentageGet),
          freeGet : selectedGet.includes('free')
        },
        productSpend:productSpend,
        productSpendId:productSpendId,
        productGet:productGet,
        productGetId:productGetId
      };
      if(!byXGetYLoading)
      {
        existingDiscount = byXGetYDiscountsData.getAllDiscountByXGetY.filter((node)=>node.code!== "").find(item => item.code === discount.code)
        existingDiscountTitle = byXGetYDiscountsData.getAllDiscountByXGetY.find(item => item.title === discount.title);
      }
      if (discount.code === '' && discount.title === '') {
        setCheck(1)
      }
      else if(existingDiscount||existingDiscountTitle)
      {
        setCheck(15)
        console.log("trung ten")
      }
      else if(validateNumber(parseInt(quantityPurchase)) === 1 && selectedPurchase.includes('quantity'))
      {
        setCheck(2)
      }
      else if(validateNumber(discount.configuration.amountPurchase) === 1 && selectedPurchase.includes('amount') )
      {
        setCheck(3)
      }
      else if(validateNumber(parseInt(quantityGet)) === 1)
      {
        setCheck(4)
      }
      else if(validatePercentage(discount.configuration.percentageGet) === 1 && selectedGet.includes('percentage'))
      {
        setCheck(5)
      }
      else if(!productSpend[0].productVariantId )
      {
        setCheck(6)
      }
      else if(!productGet[0].productVariantId )
      {
        setCheck(7)
      }
      else {
        setCheck(8)
        console.log(discount)
        submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});

      }

      console.log(discount)
      return {status: "success"};
    },
  });
  return (
    <>
      <Frame>
      <Page
        title="Create By X get Y discount"
        backAction={{
          content: "Return",
          onAction: () => navigate("../../app/discountList")
          ,
        }}
        primaryAction={{
          content: "Save",
          onAction: submit,
          loading: isLoading,
        }}
      >
        <Layout>
          <Layout.Section>
            <Form method="post">
              <BlockStack align="space-around" gap="200">
                <MethodCard
                  title="By X get Y"
                  discountTitle={discountTitle}
                  discountClass={DiscountClass.Product}
                  discountCode={discountCode}
                  discountMethod={discountMethod}
                />
                <Box paddingBlockEnd="300">
                  <Card>
                    <BlockStack>
                      <div style={{marginBottom: "15px"}}>
                        <Text variant="headingMd" as="h1">
                          Customer spends
                        </Text>
                      </div>
                      <div style={{marginBottom: "10px"}}>
                        <Text variant="headingMd" as="h3">
                          Purchase type
                        </Text>
                      </div>
                      <ChoiceList
                        title="Select Purchase type for By X get Y Discount"
                        choices={[
                          {label: 'Minimum quantity of items', value: 'quantity'},
                          {label: 'Minimum purchase amount', value: 'amount'},
                        ]}
                        selected={selectedPurchase}
                        onChange={handleChangePurchase}
                      />
                      {selectedPurchase.includes('quantity') && (
                        <TextField
                          label="Quantity"
                          autoComplete="on"
                          value={quantityPurchase}
                          onChange={handleChangePurchaseQuantity}
                          suffix=""
                        />
                      )}
                      {selectedPurchase.includes('amount') && (
                        <TextField
                          label="Amount"
                          autoComplete="on"
                          value={amountPurchase}
                          onChange={handleChangePurchaseAmount}
                          suffix="VND"
                        />
                      )}
                      <div style={{marginBottom: "15px", marginTop: '15px'}}>
                        <Button variant="plain" textAlign="left" size={"large"} onClick={selectProductSpend}>
                          Click here to set product Customer must spend
                        </Button>
                      </div>
                      {!productSpend[0].productVariantId ? (
                          EmptyProductSelected()
                        ) :
                        (
                          <ResourceList
                            resourceName={{singular: 'customer', plural: 'customers'}}
                            items={productSpend}
                            renderItem={(item) => {
                              const media = <Thumbnail
                                source={item.productImage || ""}
                                alt={item.productAlt}/>;
                              const shortcutActions = [
                                {
                                  content: "Remove",
                                  onAction: () => removeItemFromProductSpend(item.productVariantId),
                                },
                              ];
                              return (
                                <ResourceItem
                                  id={item.productId}
                                  url={item.productImage}
                                  media={media}
                                  shortcutActions={shortcutActions}
                                  persistActions
                                >
                                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {item.productTitle}
                                  </Text>
                                  <div>{item.variantTitle}</div>
                                </ResourceItem>
                              );
                            }}
                          />
                        )
                      }
                    </BlockStack>
                  </Card>
                </Box>
                <Box paddingBlockEnd="300">
                  <Card>
                    <BlockStack>
                      <div style={{marginBottom: "15px"}}>
                        <Text variant="headingMd" as="h1">
                          Customer gets
                        </Text>
                      </div>
                      <div style={{marginBottom: "10px"}}>
                        <Text as="p" tone="subdued">
                          Customers must add the quantity of items specified below to their cart.
                        </Text>
                      </div>
                    <div style={{marginBottom: "10px"}}>
                      <TextField
                        label="Quantity"
                        autoComplete="on"
                        value={quantityGet}
                        onChange={handleChangeGetQuantity}
                        suffix=""
                      />
                    </div>
                      <ChoiceList
                        title="At a discounted value"
                        choices={[
                          {label: 'Percentage', value: 'percentage'},
                          {label: 'Free', value: 'free'},
                        ]}
                        selected={selectedGet}
                        onChange={handleChangeGet}
                      />
                      {selectedGet.includes('percentage') && (
                        <TextField
                          label="Percentage"
                          autoComplete="on"
                          value={percentageGet}
                          onChange={handleChangeGetPercentage}
                          suffix=""
                        />
                      )}
                      {selectedGet.includes('amount') && (
                        <TextField
                          label="Amount"
                          autoComplete="on"
                          value={amountGet}
                          onChange={handleChangeGetAmount}
                          suffix="VND"
                        />
                      )}
                      <div style={{marginBottom: "15px", marginTop: '15px'}}>
                        <Button variant="plain" textAlign="left" size={"large"} onClick={selectProductGet}>
                          Click here to set product Customer can get
                        </Button>
                      </div>
                      {!productGet[0].productVariantId ? (
                          EmptyProductSelected()
                        ) :
                        (
                          <ResourceList
                            resourceName={{singular: 'customer', plural: 'customers'}}
                            items={productGet}
                            renderItem={(item) => {
                              const media = <Thumbnail
                                source={item.productImage || ""}
                                alt={item.productAlt}/>;
                              const shortcutActions = [
                                {
                                  content: "Remove",
                                  onAction: () => removeItemFromProductGet(item.productVariantId),
                                },
                              ];
                              return (
                                <ResourceItem
                                  id={item.productId}
                                  url={item.productImage}
                                  media={media}
                                  shortcutActions={shortcutActions}
                                  persistActions
                                >
                                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {item.productTitle}
                                  </Text>
                                  <div>{item.variantTitle}</div>
                                </ResourceItem>
                              );
                            }}
                          />
                        )
                      }
                    </BlockStack>
                  </Card>
                </Box>
                {discountMethod.value === DiscountMethod.Code && ( // kiểm tra xem discount là code hay auto
                  <UsageLimitsCard
                    // @ts-ignore
                    totalUsageLimit={usageLimit}
                    oncePerCustomer={appliesOncePerCustomer}
                  />
                )}

                <CombinationCard
                  combinableDiscountTypes={combinesWith}
                  discountClass={DiscountClass.Product}
                  discountDescriptor={"Discount"}
                />
                <ActiveDatesCard
                  // @ts-ignore
                  startDate={startDate} // Truyền giá trị startDate từ trạng thái hoặc props
                  // @ts-ignore
                  endDate={endDate}
                  timezoneAbbreviation="GMT+7"
                />
              </BlockStack>
            </Form>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <SummaryCard // thông tin cơ bản về trạng thái giảm giá và có thể hiển thị các tùy chọn cấu hình nâng cao hơn
              header={{
                discountMethod: discountMethod.value,
                discountDescriptor:
                  discountMethod.value === DiscountMethod.Automatic
                    ? discountTitle.value
                    : discountCode.value,
                appDiscountType: "By X Get Y",
                isEditing: false,
              }}
              performance={{
                status: DiscountStatus.Scheduled,
                usageCount: 0,
              }}
              minimumRequirements={{
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode: currencyCode,
              }}
              customerEligibility={{
                eligibility: Eligibility.Everyone,

              }}
              usageLimits={{
                oncePerCustomer: appliesOncePerCustomer.value,
                totalUsageLimit: usageLimit.value,
              }}
              activeDates={{
                // @ts-ignore
                startDate: startDate.value,
                endDate: endDate.value,
              }}
            />
          </Layout.Section>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: "Save discount",
                onAction: submit,
                loading: isLoading,
              }}
              secondaryActions={[
                {
                  content: "Quit",
                  onAction: () => navigate("../../app/discountList")
                  ,
                },
              ]}
            />
          </Layout.Section>
        </Layout>

        {toastMarkup}

      </Page>
    </Frame>
    </>
  )
}
export default ByXGetYDiscount
