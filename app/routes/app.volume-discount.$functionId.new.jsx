import {useCallback, useEffect, useMemo, useState} from "react";
import {json} from "@remix-run/node";
import {useField, useForm} from "@shopify/react-form";
// @ts-ignore
import {useMutation, useQuery} from '@apollo/client';
import {CurrencyCode} from "@shopify/react-i18n";
import {Form, useActionData, useLoaderData, useNavigate, useNavigation, useSubmit,} from "@remix-run/react";
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
  ChoiceList, Frame,
  Layout,
  Page,
  PageActions,
  ResourceItem,
  ResourceList, Select,
  Text,
  TextField,
  Thumbnail, Toast,
} from "@shopify/polaris";

import shopify, {authenticate} from "../shopify.server";
import {Function} from "~/const/Function";
import {CREATE_DISCOUNT} from "~/graphql/mutation";
import {GET_ALL_DISCOUNT} from "~/graphql/query";
import axios from "axios";
import StoreModel from "~/models/store.model";

const EmptyProductSelected = () => (
  <div style={{textAlign: "center", maxHeight: "60vh"}}>
    <img style={{height: '60px', width: "60px"}}
         src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png" alt="test"/>
    <p style={{fontWeight: "bold"}}>There are no products selected</p>
    <p>Please choose product for this discount</p>
  </div>
)

export const action = async ({params, request}) => {
  const {functionId} = params;
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
    configuration,
    products1,
    products2,
    products3,
    applyTo,
    countStrategy
  } = JSON.parse(formData.get("discountForm"));
  let value1
  let discountTitle
  if (method === DiscountMethod.Automatic) {
    discountTitle = title
  } else if (method === DiscountMethod.Code) {
    discountTitle = code
  }
  value1 = JSON.stringify({
    countStrategy: countStrategy,
    discountCode: discountTitle,
    applyTo: applyTo,
    quantity: configuration.quantity,
    quantity2: configuration.quantity2,
    quantity3: configuration.quantity3,

    fixedAmount: configuration.fixedAmount,
    fixedAmount2: configuration.fixedAmount2,
    fixedAmount3: configuration.fixedAmount3,

    percentage: configuration.percentage,
    percentage2: configuration.percentage2,
    percentage3: configuration.percentage3,

    products1: products1,
    products2: products2,
    products3: products3,
    appliesForEachProduct: configuration.appliesToEachItem,
    appliesForEachProduct2: configuration.appliesToEachItem2,
    appliesForEachProduct3: configuration.appliesToEachItem3
  })


  const baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt),
  };

  if (method === DiscountMethod.Code) { //
    const baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer,
    };

    const response = await admin.graphql(
      `#graphql
              mutation CreateCodeDiscount($discount: DiscountCodeAppInput!) {
                discountCreate: discountCodeAppCreate(codeAppDiscount: $discount) {
                 codeAppDiscount{
                   __typename
                   discountId
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
                  }}
                  userErrors {
                    code
                    message
                    field
                  }
                }
              }`,
      {
        variables: {
          discount: {
            ...baseCodeDiscount,
            metafields: [
              {
                namespace: "$app:volume-discount",
                key: "function-configuration",
                type: "json",
                value: value1,
              },
            ],
          },
        },
      }
    );

    const responseJson = await response.json();

    const errors = responseJson.data.discountCreate?.userErrors;
    const discountData = responseJson.data.discountCreate?.codeAppDiscount

    return json({errors, discountData, responseJson, value1}); //tra ve neu co loi
  } else {
    const response = await admin.graphql(
      `#graphql
              mutation CreateAutomaticDiscount($discount: DiscountAutomaticAppInput!) {
                discountCreate: discountAutomaticAppCreate(automaticAppDiscount: $discount) {
                automaticAppDiscount {
                discountId
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
                  userErrors {
                    code
                    message
                    field
                  }
                }
              }`,
      {
        variables: {
          discount: {
            ...baseDiscount,
            metafields: [
              {
                namespace: "$app:volume-discount",
                key: "function-configuration",
                type: "json",
                value: value1,
              },
            ],
          },
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountCreate?.userErrors;
    const discountData = responseJson.data.discountCreate?.automaticAppDiscount

    return json({errors, responseJson, value1, discountData});
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks

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

// This is the React component for the page.
export default function CreateDiscount() {
  const {
    validateNumber,
    validatePercentage
  } = Function()
  const {shop}= useLoaderData()
  const [formState, setFormState] = useState([{}]);
  const [formState2, setFormState2] = useState([{}]);
  const [formState3, setFormState3] = useState([{}]);
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);
  const [check, setCheck] = useState(0)
  const [count, setCount] = useState(0)
  const [selected, setSelected] = useState(['allProduct']);
  const [applyTo, setApplyTo] = useState("all");
  const [selectedVolume, setSelectedVolume] = useState(['percentage']);
  const [selectedVolume2, setSelectedVolume2] = useState(['percentage']);
  const [selectedVolume3, setSelectedVolume3] = useState(['percentage']);
  const submitForm = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const today = useMemo(() => new Date(), []); // fix
  const isLoading = navigation.state === "submitting";
  const currencyCode = CurrencyCode.Cad;
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [message, setMessage] = useState("")

  const [showVolume1, setShowVolume1] = useState(true)
  const [percentageDiscount, setPercentageDiscount] = useState("")
  const [amountDiscount, setAmountDiscount] = useState("")
  const [selectedValueType, setSelectedValueType] = useState(['max']);
  const [appliesToEachItem, setAppliesToEachItem] = useState(false)

  const [showVolume2, setShowVolume2] = useState(false)
  const [percentageDiscount2, setPercentageDiscount2] = useState("")
  const [amountDiscount2, setAmountDiscount2] = useState("")
  const [selectedValueType2, setSelectedValueType2] = useState(['max']);
  const [appliesToEachItem2, setAppliesToEachItem2] = useState(false)

  const [showVolume3, setShowVolume3] = useState(false)
  const [percentageDiscount3, setPercentageDiscount3] = useState("")
  const [amountDiscount3, setAmountDiscount3] = useState("")
  const [selectedValueType3, setSelectedValueType3] = useState(['max']);
  const [appliesToEachItem3, setAppliesToEachItem3] = useState(false)
  const [discountStrategyCount, setDiscountStrategyCount] = useState("1")
  const {loading: DiscountLoading, data: DiscountsData} = useQuery(GET_ALL_DISCOUNT)

  const [createDiscount] = useMutation(CREATE_DISCOUNT);
  const addDiscount = async () => {
    try {
      let value
      if (actionData.value1) {
        value = JSON.parse(actionData.value1)
      } else {
        value = {}
      }
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId:shop.id,
            discountId: actionData.discountData.discountId,
            title: actionData.discountData.title,
            code: actionData.discountData.__typename === "DiscountCodeApp" ? actionData.discountData.codes.nodes[0]?.code ?? "" : "",
            method: actionData.discountData.__typename === "DiscountCodeApp" ? DiscountMethod.Code : DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.combinesWith),
            usageLimit: actionData.discountData.__typename === "DiscountCodeApp" && actionData.discountData.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: actionData.discountData.startsAt,
            endsAt: actionData.discountData.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.__typename === "DiscountCodeApp" ? actionData.discountData.appliesOncePerCustomer : false,
            type: value.applyTo,
            amount_1: value.fixedAmount !== null ? value.fixedAmount.toString() : "",
            amount_2: value.fixedAmount2 !== null ? value.fixedAmount2.toString() : "",
            amount_3: value.fixedAmount3 !== null ? value.fixedAmount3.toString() : "",
            appliesToEachItem_1: value.appliesForEachProduct,
            appliesToEachItem_2: value.appliesForEachProduct2,
            appliesToEachItem_3: value.appliesForEachProduct3,
            percentage_1: value.percentage !== null ? value.percentage.toString() : "",
            percentage_2: value.percentage2 !== null ? value.percentage2.toString() : "",
            percentage_3: value.percentage3 !== null ? value.percentage3.toString() : "",
            product_1: JSON.stringify(value.products1),
            product_2: JSON.stringify(value.products2),
            product_3: JSON.stringify(value.products3),
            quantity_1: value.quantity ? value.quantity.toString() : "",
            quantity_2: value.quantity2 ? value.quantity2.toString() : "",
            quantity_3: value.quantity3 ? value.quantity3.toString() : "",
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


  useEffect(() => {
    if (actionData?.errors.length === 0) {
      if (actionData.discountData) {
        addDiscount().then()
        navigate("../../app/discountList")
      }
    }
    console.log(actionData?.responseJson)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);
  useEffect(() => {
    if (check === 9) {
      setMessage('There are duplicate products in Volume or Volume 3')
      setActive(true)

    } else if (check === 10) {
      setMessage('There are duplicate products in Volume 1 or Volume 3')
      setActive(true)
    } else if (check === 11) {
      setMessage('There are duplicate products in Volume 1 or Volume 2')
      setActive(true)
    }
    if (count === 1) {
      if (check === 1) {
        setMessage('Discount code cannot be empty')
        setActive(true)
      } else if (check === 2) {
        setMessage('Invalid Minimum quantity')
        setActive(true)
      } else if (check === 3) {
        setMessage('Invalid discount percentage')
        setActive(true)
      } else if (check === 4) {
        setMessage('Invalid discount amount')
        setActive(true)
      } else if (check === 5) {
        setMessage('Create Discount Success')
        setActive(true)

      } else if (check === 6) {
        setMessage('Product Volume 1 can not be empty')
        setActive(true)

      } else if (check === 7) {
        setMessage('Product Volume 2 can not be empty')
        setActive(true)

      } else if (check === 8) {
        setMessage('Product Volume 2 can not be empty')
        setActive(true)

      }
      else if (check === 15) {
        setMessage('Discount cannot be duplicated')
        setActive(true)

      }

      setCount(0); // Reset count sau khi hiển thị thông báo
    }
  }, [check, count]);


  useEffect(() => {
    if (discountStrategyCount === "1") {
      setShowVolume1(true)
      setShowVolume2(false)
      setShowVolume3(false)

    } else if (discountStrategyCount === "2") {
      setShowVolume1(true)
      setShowVolume2(true)
      setShowVolume3(false)

    } else if (discountStrategyCount === "3") {
      setShowVolume1(true)
      setShowVolume2(true)
      setShowVolume3(true)

    }
  }, [discountStrategyCount]);
  useEffect(() => {
    if (selectedVolume.includes('percentage')) {
      setAmountDiscount("")
      setAppliesToEachItem(false)
    } else {
      setPercentageDiscount("")
    }
  }, [selectedVolume]);

  useEffect(() => {
    if (selectedVolume2.includes('percentage')) {
      setAmountDiscount2("")
      setAppliesToEachItem2(false)
    } else {
      setPercentageDiscount2("")
    }
  }, [selectedVolume2]);
  useEffect(() => {
    if (selectedVolume3.includes('percentage')) {
      setAmountDiscount3("")
      setAppliesToEachItem3(false)
    } else {
      setPercentageDiscount3("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVolume3]);

  async function selectProduct() {
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
      const isDuplicateProduct = flattenedVariants.some(newProduct => {
        // Kiểm tra formState2
        const isDuplicateInFormState2 = formState2.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId
        );
        // Kiểm tra formState3
        const isDuplicateInFormState3 = formState3.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId
        );
        // Nếu sản phẩm đã tồn tại trong formState2 hoặc formState3
        return isDuplicateInFormState2 || isDuplicateInFormState3;
      });

      if (isDuplicateProduct) {
        setCheck(9)
        // Xử lý khi có sản phẩm trùng lặp
        console.log("Có sản phẩm trùng lặp trong formState2 hoặc formState3");
      } else {
        // Không có sản phẩm nào trùng lặp, cập nhật formState
        setFormState(flattenedVariants);
      }
    }
  }

  async function selectProduct2() {
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
      const isDuplicateProduct2 = flattenedVariants.some(newProduct => {
        // Kiểm tra formState
        const isDuplicateInFormState = formState.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId);
        // Kiểm tra formState3
        const isDuplicateInFormState3 = formState3.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId);
        // Nếu sản phẩm đã tồn tại trong formState1 hoặc formState3
        return isDuplicateInFormState || isDuplicateInFormState3;
      });

      if (isDuplicateProduct2) {
        // Xử lý khi có sản phẩm trùng lặp
        console.log("Có sản phẩm trùng lặp trong formState hoặc formState3");
        setCheck(10)

      } else {
        // Không có sản phẩm nào trùng lặp, cập nhật formState2
        setFormState2(flattenedVariants);
      }

    }
  }

  async function selectProduct3() {
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
      const isDuplicateProduct3 = flattenedVariants.some(newProduct => {
        // Kiểm tra formState
        const isDuplicateInFormState1 = formState.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId);
        // Kiểm tra formState3
        const isDuplicateInFormState2 = formState2.some(existingProduct => existingProduct.productVariantId === newProduct.productVariantId);
        // Nếu sản phẩm đã tồn tại trong formState1 hoặc formState2
        return isDuplicateInFormState1 || isDuplicateInFormState2;
      });

      if (isDuplicateProduct3) {
        setCheck(11)
        // Xử lý khi có sản phẩm trùng lặp
        console.log("Có sản phẩm trùng lặp trong formState hoặc formState2");
      } else {
        // Không có sản phẩm nào trùng lặp, cập nhật formState3
        setFormState3(flattenedVariants);
      }

    }
  }

  useEffect(() => {
    console.log(formState)
  }, [formState]);
  useEffect(() => {
    if (selected.includes('chooseProduct')) {
      setApplyTo("choose")
      setIsFirstButtonActive(true)
      setDiscountStrategyCount("1")
      setFormState([{}])
      setFormState2([{}])
      setFormState3([{}])

    } else {
      setApplyTo("all")
      setIsFirstButtonActive(false)
    }
  }, [selected]);
  useEffect(() => {
    if (selectedValueType.includes('max')) {
      setAppliesToEachItem(false)
    } else {
      setAppliesToEachItem(true)
    }
  }, [selectedValueType]);
  useEffect(() => {
    if (selectedValueType2.includes('max')) {
      setAppliesToEachItem2(false)
    } else {
      setAppliesToEachItem2(true)
    }
  }, [selectedValueType2]);

  useEffect(() => {
    if (selectedValueType3.includes('max')) {
      setAppliesToEachItem3(false)
    } else {
      setAppliesToEachItem3(true)
    }
  }, [selectedValueType3]);

  useEffect(() => {
    if (!showVolume2) {
      setAppliesToEachItem2(false)
      setAmountDiscount2("")
      setPercentageDiscount2("")
      setSelectedValueType2(['max'])
      setSelectedVolume2(['percentage'])
    }
  }, [showVolume2]);

  useEffect(() => {
    if (!showVolume3) {
      setAppliesToEachItem3(false)
      setAmountDiscount3("")
      setPercentageDiscount3("")
      setSelectedValueType3(['max'])
      setSelectedVolume3(['percentage'])

    }
  }, [showVolume3]);

  const handleSelectDiscountStrategyCountChange = useCallback(
    (/** @type {React.SetStateAction<string>} */ value) => setDiscountStrategyCount(value),
    [],
  );

  const options = [
    {label: '1', value: "1"},
    {label: '2', value: "2"},
    {label: '3', value: "3"},
  ];


  const handleChangeApplies = (/** @type {React.SetStateAction<string[]>} */ /** @type {React.SetStateAction<string[]>} */ value) => {
    setSelected(value)
    console.log(value)
  }
  const handleChoiceValueTypeChange = useCallback(
    (/** @type {React.SetStateAction<string[]>} */ value) => setSelectedValueType(value),
    [],
  );
  const handleChoiceValueTypeChange2 = useCallback(
    (/** @type {React.SetStateAction<string[]>} */ value) => setSelectedValueType2(value),
    [],
  );
  const handleChoiceValueTypeChange3 = useCallback(
    (/** @type {React.SetStateAction<string[]>} */ value) => setSelectedValueType3(value),
    [],
  );
  const handleDiscountPercentageChange = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setPercentageDiscount(newValue);
    },
    [],);
  const handleDiscountPercentageChange2 = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setPercentageDiscount2(newValue);
    },
    [],);
  const handleDiscountPercentageChange3 = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setPercentageDiscount3(newValue);
    },
    [],);
  const handleDiscountAmountChange = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setAmountDiscount(newValue);
    },
    [],);
  const handleDiscountAmountChange2 = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setAmountDiscount2(newValue);
    },
    [],);
  const handleDiscountAmountChange3 = useCallback(
    (/** @type {React.SetStateAction<string>} */ newValue) => {
      setAmountDiscount3(newValue);
    },
    [],);
  const handleChangeVolume = (/** @type {React.SetStateAction<string[]>} */ value) => {
    setSelectedVolume(value)
  }
  const handleChangeVolume2 = (/** @type {React.SetStateAction<string[]>} */ value) => {
    setSelectedVolume2(value)
  }
  const handleChangeVolume3 = (/** @type {React.SetStateAction<string[]>} */ value) => {
    setSelectedVolume3(value)
  }

  const removeItemFromFormState = (/** @type {any} */ productVariantId) => {
    const updatedFormState = formState.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState(updatedFormState.length > 0 ? updatedFormState : [{}]);
  };
  const removeItemFromFormState2 = (/** @type {any} */ productVariantId) => {
    const updatedFormState2 = formState2.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState2(updatedFormState2.length > 0 ? updatedFormState2 : [{}]);
  };
  const removeItemFromFormState3 = (/** @type {any} */ productVariantId) => {
    const updatedFormState3 = formState3.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState3(updatedFormState3.length > 0 ? updatedFormState3 : [{}]);
  };
  const renderChildren = useCallback(
    (/** @type {any} */ isSelected) =>
      isSelected && (
        <ChoiceList
          title=""
          choices={[
            {label: 'Max Discount amount', value: 'max'},
            {label: 'Discount for each product', value: 'eachProduct'},

          ]}
          selected={selectedValueType}
          onChange={handleChoiceValueTypeChange}
        />
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType],
  );
  const renderChildren2 = useCallback(
    (/** @type {any} */ isSelected2) =>
      isSelected2 && (
        <ChoiceList
          title=""
          choices={[
            {label: 'Max Discount amount', value: 'max'},
            {label: 'Discount for each product', value: 'eachProduct'},

          ]}
          selected={selectedValueType2}
          onChange={handleChoiceValueTypeChange2}
        />
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType2],
  );
  const choiceWithValueRenderChildren2 = {
    label: 'Value',
    value: 'Value',
    renderChildren: renderChildren2,
  };

  const renderChildren3 = useCallback(
    (/** @type {any} */ isSelected3) =>
      isSelected3 && (
        <ChoiceList
          title=""
          choices={[
            {label: 'Max Discount amount', value: 'max'},
            {label: 'Discount for each product', value: 'eachProduct'},

          ]}
          selected={selectedValueType3}
          onChange={handleChoiceValueTypeChange3}
        />
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType3],
  );

  const choiceWithValueRenderChildren3 = {
    label: 'Value',
    value: 'Value',
    renderChildren: renderChildren3,
  };
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
      configuration,
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
        quantity: useField("1"),
        percentage: useField(""),
        fixedAmount: useField(""),
        quantity2: useField("1"),
        percentage2: useField(""),
        fixedAmount2: useField(""),
        quantity3: useField("1"),
        percentage3: useField(""),
        fixedAmount3: useField("")
      },
      products1: [{}],
      products2: [{}],
      products3: [{}],
      countStrategy: useField("1"),
      applyTo: useField("")
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
        countStrategy: discountStrategyCount,
        applyTo: applyTo,
        configuration: {
          quantity: parseInt(form.configuration.quantity),
          percentage: parseFloat(percentageDiscount),
          fixedAmount: parseFloat(amountDiscount),
          quantity2: parseInt(form.configuration.quantity2),
          percentage2: parseFloat(percentageDiscount2),
          fixedAmount2: parseFloat(amountDiscount2),

          quantity3: parseInt(form.configuration.quantity3),
          percentage3: parseFloat(percentageDiscount3),
          fixedAmount3: parseFloat(amountDiscount3),

          appliesToEachItem: appliesToEachItem,
          appliesToEachItem2: appliesToEachItem2,
          appliesToEachItem3: appliesToEachItem3

        },
        products1: formState[0].productVariantId
          ? formState
          : [],
        products2: formState2[0].productVariantId
          ? formState2
          : [],
        products3: formState3[0].productVariantId
          ? formState3
          : [],
      };

     if(!DiscountLoading)
     {
        existingDiscount = DiscountsData.getAllDiscount.filter((node)=>node.code!== "").find(item => item.code === discount.code)
        existingDiscountTitle = DiscountsData.getAllDiscount.find(item => item.title === discount.title);
     }

      if (discount.code === '' && discount.title === '') {
        setCheck(1)
      }
      else if(existingDiscount !==undefined || existingDiscountTitle!==undefined)
      {
        setCheck(15)
        console.log("trung ten")
        console.log(existingDiscountTitle)
        console.log(existingDiscount)


      }
      else if (validateNumber(discount.configuration.quantity) === 1 || validateNumber(discount.configuration.quantity2) === 1 || validateNumber(discount.configuration.quantity3) === 1) {
        setCheck(2)
      } else if (showVolume1 && showVolume2 === false && showVolume3 === false) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes('percentage')) {
          setCheck(3)
          console.log("sai 1")
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes('Value')) {
          setCheck(4)
          console.log("sai 2")
        } else if (discount.products1.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(6)
          console.log("sai 15")
        }
        else {
          setCheck(5)
          submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});
        }
      } else if (showVolume2 && showVolume3 === false) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes('percentage')) {
          setCheck(3)
          console.log("sai 4")
        } else if (validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes('percentage')) {
          setCheck(3)
          console.log("sai 5")
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes('Value')) {
          setCheck(4)
          console.log("sai 6")
        } else if (validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes('Value')) {
          setCheck(4)
          console.log("sai 7")
        } else if (discount.products1.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(6)
          console.log("sai 16")
        } else if (discount.products2.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(7)
          console.log("sai 17")
        } else {
          setCheck(5)
          submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});

        }
      } else if (showVolume2 && showVolume3) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes('percentage')) {
          setCheck(3)
          console.log("sai 9")
        } else if (validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes('percentage')) {
          setCheck(3)
          console.log("sai 10")
        } else if (validatePercentage(discount.configuration.percentage3) === 1 && selectedVolume3.includes('percentage')) {
          setCheck(3)
          console.log("sai 11")
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes('Value')) {
          setCheck(4)
          console.log("sai 12")
        } else if (validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes('Value')) {
          setCheck(4)
          console.log("sai 13")
        } else if (validatePercentage(discount.configuration.fixedAmount3) === 1 && selectedVolume3.includes('Value')) {
          setCheck(3)
          console.log("sai 14")
        } else if (discount.products1.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(6)
          console.log("sai 18")
        } else if (discount.products2.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(7)
          console.log("sai 19")
        } else if (discount.products3.length <= 0 && selected.includes('chooseProduct')) {
          setCheck(8)
          console.log("sai 20")
        } else {
          setCheck(5)
          submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});

        }
      } else {
        setCheck(5)
        submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});
      }
      console.log(discount)
      return {status: "success"};
    },
  });
  const toastMarkup = active ? (
    <Toast content={message} onDismiss={toggleActive} error={check !== 5}/>
  ) : null;
  // @ts-ignore
  return (
    <Frame>
      <Page
        title="Create volume discount"
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
                  title="Volume"
                  discountTitle={discountTitle}
                  discountClass={DiscountClass.Product}
                  discountCode={discountCode}
                  discountMethod={discountMethod}
                />
                <Box paddingBlockEnd="300">
                  <Card>
                    <BlockStack>
                      <ChoiceList
                        title="Apply to"
                        choices={[
                          {label: 'Apply on all Product', value: 'allProduct'},
                          {label: ' Choose Product', value: 'chooseProduct'},
                        ]}
                        selected={selected}
                        onChange={handleChangeApplies}
                      />
                    </BlockStack>
                  </Card>
                </Box>
                {isFirstButtonActive ?
                  <Box paddingBlockEnd="300">
                    <Card>
                      <BlockStack>
                        <Select
                          label="Discount Strategy Count"
                          options={options}
                          onChange={handleSelectDiscountStrategyCountChange}
                          value={discountStrategyCount}
                        />

                      </BlockStack>
                    </Card>
                  </Box>
                  : null}
                {showVolume1 && (
                  <Box paddingBlockEnd="300">
                    <Card>
                      <BlockStack>
                        <Text variant="headingMd" as="h2">
                          Volume 1
                        </Text>
                        <TextField
                          label="Minimum quantity"
                          autoComplete="on"
                          {...configuration.quantity}
                        />
                        <ChoiceList
                          title="Select discount type"
                          choices={[
                            {label: 'Percentage', value: 'percentage'},
                            {label: 'Value', value: 'Value', renderChildren},
                          ]}
                          selected={selectedVolume}
                          onChange={handleChangeVolume}
                        />
                        {selectedVolume.includes('percentage') && (
                          <TextField
                            label="Discount percentage"
                            autoComplete="on"
                            value={percentageDiscount}
                            onChange={handleDiscountPercentageChange}
                            suffix="%"
                          />
                        )}
                        {selectedVolume.includes('Value') && (
                          <TextField
                            label="Discount value"
                            autoComplete="on"
                            value={amountDiscount}
                            onChange={handleDiscountAmountChange}
                            suffix="VND"
                          />
                        )}
                      </BlockStack>
                      {isFirstButtonActive ?
                        <div style={{marginBottom: "15px", marginTop: '15px'}}>
                          <Button variant="plain" textAlign="left" size={"large"} onClick={selectProduct}>
                            Click here to set product
                          </Button>
                        </div>
                        : null}
                      {isFirstButtonActive && formState[0].productId ? (
                        <ResourceList
                          resourceName={{singular: 'customer', plural: 'customers'}}
                          items={formState}
                          renderItem={(item) => {
                            const media = <Thumbnail
                              source={item.productImage || ""}
                              alt={item.productAlt}/>;
                            const shortcutActions = [
                              {
                                content: "Remove",
                                onAction: () => removeItemFromFormState(item.productVariantId),
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
                      ) : (isFirstButtonActive && EmptyProductSelected())

                      }
                    </Card>
                  </Box>
                )}
                {showVolume2 && (
                  <Box paddingBlockEnd="300">
                    <Card>
                      <BlockStack>
                        <Text variant="headingMd" as="h2">
                          Volume 2
                        </Text>
                        <TextField
                          label="Minimum quantity"
                          autoComplete="on"
                          {...configuration.quantity2}
                        />
                        <ChoiceList
                          title="Select discount type"
                          choices={[
                            {label: 'Percentage', value: 'percentage'},
                            choiceWithValueRenderChildren2, // Sử dụng đối tượng Choice mới ở đây
                          ]}
                          selected={selectedVolume2}
                          onChange={handleChangeVolume2}
                        />
                        {selectedVolume2.includes('percentage') && (
                          <TextField
                            label="Discount percentage"
                            autoComplete="on"
                            value={percentageDiscount2}
                            onChange={handleDiscountPercentageChange2}
                            suffix="%"
                          />
                        )}
                        {selectedVolume2.includes('Value') && (
                          <TextField
                            label="Discount value"
                            autoComplete="on"
                            value={amountDiscount2}
                            onChange={handleDiscountAmountChange2}
                            suffix="VND"
                          />
                        )}
                      </BlockStack>
                      {isFirstButtonActive ? <div style={{marginBottom: "15px", marginTop: '15px'}}>
                          <Button variant="plain" textAlign="left" size={"large"} onClick={selectProduct2}>
                            Click here to set product
                          </Button>
                        </div>
                        : null}
                      {isFirstButtonActive && formState2[0].productId ? (
                        <ResourceList
                          resourceName={{singular: 'customer', plural: 'customers'}}
                          items={formState2}
                          renderItem={(item) => {
                            const media = <Thumbnail
                              source={item.productImage || ""}
                              alt={item.productAlt}/>;
                            const shortcutActions = [
                              {
                                content: "Remove",
                                onAction: () => removeItemFromFormState2(item.productVariantId),
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
                      ) : (isFirstButtonActive && EmptyProductSelected())
                      }
                    </Card>
                  </Box>
                )}

                {showVolume3 && (
                  <Box paddingBlockEnd="300">
                    <Card>
                      <BlockStack>
                        <Text variant="headingMd" as="h2">
                          Volume 3
                        </Text>
                        <TextField
                          label="Minimum quantity"
                          autoComplete="on"
                          {...configuration.quantity3}
                        />
                        <ChoiceList
                          title="Select discount type"
                          choices={[
                            {label: 'Percentage', value: 'percentage'},
                            choiceWithValueRenderChildren3, // Sử dụng đối tượng Choice mới ở đây
                          ]}
                          selected={selectedVolume3}
                          onChange={handleChangeVolume3}
                        />
                        {selectedVolume3.includes('percentage') && (
                          <TextField
                            label="Discount percentage"
                            autoComplete="on"
                            value={percentageDiscount3}
                            onChange={handleDiscountPercentageChange3}
                            suffix="%"
                          />
                        )}
                        {selectedVolume3.includes('Value') && (
                          <TextField
                            label="Discount value"
                            autoComplete="on"
                            value={amountDiscount3}
                            onChange={handleDiscountAmountChange3}
                            suffix="VND"
                          />
                        )}
                      </BlockStack>
                      {isFirstButtonActive ? <div style={{marginBottom: "15px", marginTop: '15px'}}>
                          <Button variant="plain" textAlign="left" size={"large"} onClick={selectProduct3}>
                            Click here to set product
                          </Button>
                        </div>
                        : null}
                      {isFirstButtonActive && formState3[0].productId ? (
                        <ResourceList
                          resourceName={{singular: 'customer', plural: 'customers'}}
                          items={formState3}
                          renderItem={(item) => {
                            const media = <Thumbnail
                              source={item.productImage || ""}
                              alt={item.productAlt}/>;
                            const shortcutActions = [
                              {
                                content: "Remove",
                                onAction: () => removeItemFromFormState3(item.productVariantId),
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
                      ) : (isFirstButtonActive && EmptyProductSelected())
                      }
                    </Card>
                  </Box>
                )}


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
                  timezoneAbbreviation="GMT"
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
                appDiscountType: "Discount",
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
                  content: "Discard",
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
  );
}
