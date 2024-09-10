// @ts-nocheck
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
  Layout, Page, PageActions, ResourceItem,
  ResourceList,

  Text,
  TextField, Thumbnail, Toast
} from "@shopify/polaris";
import {Form, useActionData, useLoaderData, useNavigate, useNavigation, useParams, useSubmit} from "@remix-run/react";
import {useField, useForm} from "@shopify/react-form";
import {useCallback, useEffect, useMemo, useState} from "react";
import {CurrencyCode} from "@shopify/react-i18n";
import {GET_ONB_DISCOUNT_BY_X_GET_Y} from "~/graphql/query";
// @ts-ignore
import {useMutation, useQuery} from "@apollo/client";
import {Function} from "~/const/Function";
import shopify, {authenticate} from "~/shopify.server";
import {json} from "@remix-run/node";
import {UPDATE_DISCOUNT_BY_X_GET_Y} from "~/graphql/mutation";
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
    discountId,
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
      mutation discountCodeBxgyUpdate($bxgyCodeDiscount: DiscountCodeBxgyInput!, $id: ID!) {
         discountCodeBxgyUpdate(bxgyCodeDiscount: $bxgyCodeDiscount, id: $id) {
                   codeDiscountNode{
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
          bxgyCodeDiscount: baseCodeDiscount,
          id:discountId
        },
      }
    );
    const responseJson = await response.json();
    const discountData = responseJson.data.discountCodeBxgyUpdate?.codeDiscountNode.codeDiscount
    const errors = responseJson.data.discountCodeBxgyUpdate?.userErrors;
    return json({errors,responseJson,discountData}); //tra ve neu co loi
  } else {
    const response = await admin.graphql(
      `#graphql
              mutation discountAutomaticBxgyUpdate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!, $id: ID!) {
                 discountAutomaticBxgyUpdate(automaticBxgyDiscount: $automaticBxgyDiscount, id: $id) {
                 automaticDiscountNode {
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
          automaticBxgyDiscount: baseDiscount,
          id :discountId

        },
      }
    );

    const responseJson = await response.json();
    const discountData = responseJson.data.discountAutomaticBxgyUpdate?.automaticDiscountNode.automaticDiscount
    const errors = responseJson.data.discountAutomaticBxgyCreate?.userErrors;
    return json({errors,responseJson,discountData});
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
  const {shop}= useLoaderData()
  const {id}= useParams()
  const submitForm = useSubmit();
  const actionData = useActionData();
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(0)
  const navigate = useNavigate()
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  const [quantityPurchase, setQuantityPurchase] = useState("")
  const [amountPurchase, setAmountPurchase] = useState("")
  const currencyCode = CurrencyCode.Cad;
  const [selectedPurchase, setSelectedPurchase] = useState(['amount']);
  const [selectedGet, setSelectedGet] = useState(['percentage']);
  const [percentageGet, setPercentageGet] = useState("")
  const [quantityGet, setQuantityGet] = useState("")
  const [productSpend, setProductSpend] = useState([{}]);
  const [productGet, setProductGet] = useState([{}]);
  const [productSpendId, setProductSpendId] = useState([]);
  const [productGetId, setProductGetId] = useState([]);
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [message,setMessage] = useState("")
  const {loading:loadingData ,data:oneDiscount}  =useQuery(GET_ONB_DISCOUNT_BY_X_GET_Y,{
    variables:{
      input:{
        id:id,
        storeId:shop.id,
      }
    }
  });
  useEffect(() => {
    if(actionData?.discountData)
    {
        updateDiscount().then()
        navigate("../../app/discountList")

    }
  }, [actionData]);
  const [update] = useMutation(UPDATE_DISCOUNT_BY_X_GET_Y);
  const [discountUpdate,setDiscountUpdate]= useState()
  const updateDiscount = async () => {
    try {
      const createPromise = await update({
        variables: {
          input: {
            storeId:shop.id,
            discountId: discountUpdate.discountId,
            id: getId(discountUpdate.discountId),
            title: actionData.discountData.title,
            code: discountUpdate.method===DiscountMethod.Code ? discountUpdate.code : "",
            method: discountUpdate.method,
            combinesWith: JSON.stringify(discountUpdate.combinesWith),
            usageLimit: discountUpdate.method===DiscountMethod.Code && discountUpdate.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: discountUpdate.startsAt,
            endsAt: discountUpdate.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: discountUpdate.method===DiscountMethod.Code ? discountUpdate.appliesOncePerCustomer : false,
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
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const today = useMemo(() => new Date(), []); // fix
  const [discountData,setDiscountData] = useState({})
  useEffect(() => {
    console.log(oneDiscount)
    if(!loadingData){
      if (oneDiscount)
      {
        setProductSpend(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchase))
        setProductSpendId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchaseId))
        setProductGetId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGetId))
        setProductGet(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGet))
        console.log(oneDiscount)
        setDiscountData({
          title:oneDiscount.getOneDiscountByXGetY.title,
          code:oneDiscount.getOneDiscountByXGetY.code,
          method:oneDiscount.getOneDiscountByXGetY.method,
          combinesWith:JSON.parse(oneDiscount.getOneDiscountByXGetY.combinesWith),
          discountId: oneDiscount.getOneDiscountByXGetY.discountId,
          endsAt:oneDiscount.getOneDiscountByXGetY.endsAt,
          percentageGet:oneDiscount.getOneDiscountByXGetY.percentageGet,
          quantityGet:oneDiscount.getOneDiscountByXGetY.quantityGet,
          quantityPurchase:oneDiscount.getOneDiscountByXGetY.quantityPurchase,
          startsAt:oneDiscount.getOneDiscountByXGetY.startsAt,
          usageLimit:oneDiscount.getOneDiscountByXGetY.usageLimit,
          amountPurchase:oneDiscount.getOneDiscountByXGetY.amountPurchase,
          appliesOncePerCustomer:oneDiscount.getOneDiscountByXGetY.appliesOncePerCustomer,
          productGet:JSON.parse(oneDiscount.getOneDiscountByXGetY.productGet),
          productGetId:JSON.parse(oneDiscount.getOneDiscountByXGetY.productGetId),
          productPurchase:JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchase),
          productPurchaseId:JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchaseId),
        })
      }
    }
  }, [loadingData, oneDiscount, id]);

  useEffect(() => {
    setPercentageGet(discountData?.percentageGet)
    setQuantityGet(discountData?.quantityGet)
    setQuantityPurchase(discountData?.quantityPurchase)
    setAmountPurchase(discountData?.amountPurchase)
    if(parseInt(discountData?.quantityPurchase)>0)
    {
      setSelectedPurchase(['quantity'])
    }
    else{
      setSelectedPurchase(['amount'])
    }

  }, [discountData]);
  useEffect(() => {
    if(percentageGet ==="100")
    {
      setSelectedGet(['free'])
      setPercentageGet("")
    }
  }, [percentageGet]);
  useEffect(() => {
    if (selectedPurchase.includes('quantity')) {
      if(parseInt(discountData?.quantityPurchase)>0)
      {
        setQuantityPurchase(discountData?.quantityPurchase)
      }
      else {
        setQuantityPurchase("")
      }
      setAmountPurchase("")
    } else {
      if(parseInt(discountData?.amountPurchase)>0)
      {
        setAmountPurchase(discountData?.amountPurchase)
      }
      else {
        setAmountPurchase("")

      }
      setQuantityPurchase("")
    }
  }, [selectedPurchase,discountData]);

  useEffect(() => {
    console.log("product Spend:",productSpend)
    console.log("Product Spend id ",productSpendId)

  }, [productSpend]);
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
      // Flatten the array of arrays to a single array of variants
      const flattenedVariants = selectedProducts.flat();
      setProductSpend(flattenedVariants);
      const selectedVariantIds = products.map(product => {
        return product.variants.map(variant => variant.id);
      }).flat();
      // @ts-ignore
      setProductSpendId( [...selectedVariantIds]);
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
      setProductGetId([...selectedVariantIds]);
    }
  }

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
      discountTitle: useField(discountData.title ? discountData.title: ""),
      discountMethod: useField(discountData.method !== 'Automatic' ? DiscountMethod.Code : DiscountMethod.Automatic),
      discountCode: useField(discountData?.code || ""),
      combinesWith: useField({
        orderDiscounts: discountData.combinesWith?.orderDiscounts || false,
        productDiscounts: discountData.combinesWith?.productDiscounts || false,
        shippingDiscounts: discountData.combinesWith?.shippingDiscounts || false,
      }),
      requirementType: useField(RequirementType.None),
      requirementSubtotal: useField("0"),
      requirementQuantity: useField("0"),
      usageLimit: useField(null),
      appliesOncePerCustomer: useField(discountData.appliesOncePerCustomer),
      startDate: useField(discountData?.startsAt || today),
      endDate: useField(discountData?.endsAt === ""? null : discountData?.endsAt ),
      configuration: {
        quantityPurchase: useField(""),
        amountPurchase: useField(""),
      },

    },
    onSubmit: async (form) => {
      setCount(1)
      let discount;
      discount = {
        title: form.discountMethod !== DiscountMethod.Code ? form.discountTitle : "",
        method: form.discountMethod,
        code: form.discountMethod === DiscountMethod.Code ? form.discountCode : "",
        combinesWith: form.combinesWith,
        usageLimit: form.usageLimit == null ? null : parseInt(form.usageLimit),
        appliesOncePerCustomer: form.appliesOncePerCustomer,
        startsAt: form.startDate,
        endsAt: form.endDate,
        configuration: {
          quantityPurchase: quantityPurchase,
          amountPurchase: amountPurchase,
          quantityGet: quantityGet,
          percentageGet:percentageGet,
          freeGet : selectedGet.includes('free')
        },
        discountId:oneDiscount.getOneDiscountByXGetY.discountId,
        productSpend:productSpend,
        productSpendId:productSpendId,
        productGet:productGet,
        productGetId:productGetId
      };
      if (discount.code === '' && discount.title === '') {
        setCheck(1)
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
        setDiscountUpdate(discount)
        submitForm({discountForm: JSON.stringify(discount)}, {method: "post"});

      }

      console.log(discount)
      return {status: "success"};
    },
  });
  const toastMarkup = active ? (
    <Toast content={message} onDismiss={toggleActive} error={check !== 8} />
  ) : null;
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
