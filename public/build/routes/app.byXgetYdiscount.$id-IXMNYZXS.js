import {
  Function,
  useField,
  useForm
} from "/build/_shared/chunk-E2CTCRX3.js";
import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  GET_ONB_DISCOUNT_BY_X_GET_Y
} from "/build/_shared/chunk-OWNOZYKR.js";
import {
  useQuery
} from "/build/_shared/chunk-VJGS4LNA.js";
import {
  ActiveDatesCard,
  CombinationCard,
  CurrencyCode,
  DiscountClass,
  DiscountMethod,
  DiscountStatus,
  Eligibility,
  MethodCard,
  RequirementType,
  SummaryCard,
  UPDATE_DISCOUNT_BY_X_GET_Y,
  UsageLimitsCard
} from "/build/_shared/chunk-HN52GLY7.js";
import "/build/_shared/chunk-CB7CFRQ5.js";
import {
  BlockStack,
  Box,
  Button,
  Card,
  ChoiceList,
  Frame,
  Layout,
  Page,
  PageActions,
  ResourceItem,
  ResourceList,
  Text,
  TextField,
  Thumbnail,
  Toast,
  init_esm as init_esm2
} from "/build/_shared/chunk-X4VQBRVX.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  useMutation
} from "/build/_shared/chunk-UCOQG5ZQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit
} from "/build/_shared/chunk-OOXE47GJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TFSQ7PF6.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.byXgetYdiscount.$id.jsx
init_remix_hmr();
init_esm2();
init_esm();
var import_react2 = __toESM(require_react());
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.byXgetYdiscount.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.byXgetYdiscount.$id.jsx"
  );
  import.meta.hot.lastModified = "1714729182574.131";
}
var EmptyProductSelected = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
  textAlign: "center",
  maxHeight: "60vh"
}, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: {
    height: "60px",
    width: "60px"
  }, src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", alt: "test" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
    fontWeight: "bold"
  }, children: "There are no products selected" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Please choose product for this By X Get Y discount" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
  lineNumber: 38,
  columnNumber: 36
}, this);
_c = EmptyProductSelected;
var getId = function(discountId) {
  if (discountId) {
    return discountId.split("/").pop();
  }
};
var ByXGetYDiscount = () => {
  var _a, _b, _c3;
  _s();
  const {
    validateNumber,
    validatePercentage
  } = Function();
  const {
    shop
  } = useLoaderData();
  const {
    id
  } = useParams();
  const submitForm = useSubmit();
  const actionData = useActionData();
  const [count, setCount] = (0, import_react2.useState)(0);
  const [check, setCheck] = (0, import_react2.useState)(0);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  const [quantityPurchase, setQuantityPurchase] = (0, import_react2.useState)("");
  const [amountPurchase, setAmountPurchase] = (0, import_react2.useState)("");
  const currencyCode = CurrencyCode.Cad;
  const [selectedPurchase, setSelectedPurchase] = (0, import_react2.useState)(["amount"]);
  const [selectedGet, setSelectedGet] = (0, import_react2.useState)(["percentage"]);
  const [percentageGet, setPercentageGet] = (0, import_react2.useState)("");
  const [quantityGet, setQuantityGet] = (0, import_react2.useState)("");
  const [productSpend, setProductSpend] = (0, import_react2.useState)([{}]);
  const [productGet, setProductGet] = (0, import_react2.useState)([{}]);
  const [productSpendId, setProductSpendId] = (0, import_react2.useState)([]);
  const [productGetId, setProductGetId] = (0, import_react2.useState)([]);
  const [active, setActive] = (0, import_react2.useState)(false);
  const toggleActive = (0, import_react2.useCallback)(() => setActive((active2) => !active2), []);
  const [message, setMessage] = (0, import_react2.useState)("");
  const {
    loading: loadingData,
    data: oneDiscount
  } = useQuery(GET_ONB_DISCOUNT_BY_X_GET_Y, {
    variables: {
      input: {
        id,
        storeId: shop.id
      }
    }
  });
  (0, import_react2.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.discountData) {
      updateDiscount().then();
      navigate("../../app/discountList");
    }
  }, [actionData]);
  const [update] = useMutation(UPDATE_DISCOUNT_BY_X_GET_Y);
  const [discountUpdate, setDiscountUpdate] = (0, import_react2.useState)();
  const updateDiscount = async () => {
    try {
      const createPromise = await update({
        variables: {
          input: {
            storeId: shop.id,
            discountId: discountUpdate.discountId,
            id: getId(discountUpdate.discountId),
            title: actionData.discountData.title,
            code: discountUpdate.method === DiscountMethod.Code ? discountUpdate.code : "",
            method: discountUpdate.method,
            combinesWith: JSON.stringify(discountUpdate.combinesWith),
            usageLimit: discountUpdate.method === DiscountMethod.Code && discountUpdate.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: discountUpdate.startsAt,
            endsAt: discountUpdate.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: discountUpdate.method === DiscountMethod.Code ? discountUpdate.appliesOncePerCustomer : false,
            quantityPurchase,
            amountPurchase,
            quantityGet,
            percentageGet: selectedGet.includes("free") === true ? "100" : percentageGet,
            productPurchase: JSON.stringify(productSpend),
            productPurchaseId: JSON.stringify(productSpendId),
            productGet: JSON.stringify(productGet),
            productGetId: JSON.stringify(productGetId)
          }
        }
      });
      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const today = (0, import_react2.useMemo)(() => /* @__PURE__ */ new Date(), []);
  const [discountData, setDiscountData] = (0, import_react2.useState)({});
  (0, import_react2.useEffect)(() => {
    console.log(oneDiscount);
    if (!loadingData) {
      if (oneDiscount) {
        setProductSpend(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchase));
        setProductSpendId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchaseId));
        setProductGetId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGetId));
        setProductGet(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGet));
        console.log(oneDiscount);
        setDiscountData({
          title: oneDiscount.getOneDiscountByXGetY.title,
          code: oneDiscount.getOneDiscountByXGetY.code,
          method: oneDiscount.getOneDiscountByXGetY.method,
          combinesWith: JSON.parse(oneDiscount.getOneDiscountByXGetY.combinesWith),
          discountId: oneDiscount.getOneDiscountByXGetY.discountId,
          endsAt: oneDiscount.getOneDiscountByXGetY.endsAt,
          percentageGet: oneDiscount.getOneDiscountByXGetY.percentageGet,
          quantityGet: oneDiscount.getOneDiscountByXGetY.quantityGet,
          quantityPurchase: oneDiscount.getOneDiscountByXGetY.quantityPurchase,
          startsAt: oneDiscount.getOneDiscountByXGetY.startsAt,
          usageLimit: oneDiscount.getOneDiscountByXGetY.usageLimit,
          amountPurchase: oneDiscount.getOneDiscountByXGetY.amountPurchase,
          appliesOncePerCustomer: oneDiscount.getOneDiscountByXGetY.appliesOncePerCustomer,
          productGet: JSON.parse(oneDiscount.getOneDiscountByXGetY.productGet),
          productGetId: JSON.parse(oneDiscount.getOneDiscountByXGetY.productGetId),
          productPurchase: JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchase),
          productPurchaseId: JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchaseId)
        });
      }
    }
  }, [loadingData, oneDiscount, id]);
  (0, import_react2.useEffect)(() => {
    setPercentageGet(discountData == null ? void 0 : discountData.percentageGet);
    setQuantityGet(discountData == null ? void 0 : discountData.quantityGet);
    setQuantityPurchase(discountData == null ? void 0 : discountData.quantityPurchase);
    setAmountPurchase(discountData == null ? void 0 : discountData.amountPurchase);
    if (parseInt(discountData == null ? void 0 : discountData.quantityPurchase) > 0) {
      setSelectedPurchase(["quantity"]);
    } else {
      setSelectedPurchase(["amount"]);
    }
  }, [discountData]);
  (0, import_react2.useEffect)(() => {
    if (percentageGet === "100") {
      setSelectedGet(["free"]);
      setPercentageGet("");
    }
  }, [percentageGet]);
  (0, import_react2.useEffect)(() => {
    if (selectedPurchase.includes("quantity")) {
      if (parseInt(discountData == null ? void 0 : discountData.quantityPurchase) > 0) {
        setQuantityPurchase(discountData == null ? void 0 : discountData.quantityPurchase);
      } else {
        setQuantityPurchase("");
      }
      setAmountPurchase("");
    } else {
      if (parseInt(discountData == null ? void 0 : discountData.amountPurchase) > 0) {
        setAmountPurchase(discountData == null ? void 0 : discountData.amountPurchase);
      } else {
        setAmountPurchase("");
      }
      setQuantityPurchase("");
    }
  }, [selectedPurchase, discountData]);
  (0, import_react2.useEffect)(() => {
    console.log("product Spend:", productSpend);
    console.log("Product Spend id ", productSpendId);
  }, [productSpend]);
  (0, import_react2.useEffect)(() => {
    if (count === 1) {
      if (check === 1) {
        setMessage("Discount code cannot be empty");
        setActive(true);
      } else if (check === 2) {
        setMessage("Invalid Minimum  purchase quantity");
        setActive(true);
      } else if (check === 3) {
        setMessage("Invalid Minimum purchase amount");
        setActive(true);
      } else if (check === 4) {
        setMessage("Invalid Minimum quantity get");
        setActive(true);
      } else if (check === 5) {
        setMessage("Invalid Minimum Percentage get");
        setActive(true);
      } else if (check === 6) {
        setMessage("Product Spend can not be empty");
        setActive(true);
      } else if (check === 7) {
        setMessage("Product Get can not be empty");
        setActive(true);
      } else if (check === 8) {
        setMessage("Discount Create Success");
        setActive(true);
      } else if (check === 15) {
        setMessage("Discount cannot be duplicated");
        setActive(true);
      }
      setCount(0);
    }
  }, [count, check]);
  const handleChangePurchase = (value) => {
    setSelectedPurchase(value);
  };
  const handleChangeGet = (value) => {
    setSelectedGet(value);
  };
  const handleChangePurchaseQuantity = (0, import_react2.useCallback)((newValue) => {
    setQuantityPurchase(newValue);
  }, []);
  const handleChangePurchaseAmount = (0, import_react2.useCallback)((newValue) => {
    setAmountPurchase(newValue);
  }, []);
  const handleChangeGetQuantity = (0, import_react2.useCallback)((newValue) => {
    setQuantityGet(newValue);
  }, []);
  const handleChangeGetPercentage = (0, import_react2.useCallback)((newValue) => {
    setPercentageGet(newValue);
  }, []);
  const removeItemFromProductSpend = (productVariantId) => {
    const updatedProductSpend = productSpend.filter((item) => item.productVariantId !== productVariantId);
    setProductSpend(updatedProductSpend.length > 0 ? updatedProductSpend : [{}]);
    const updatedProductSpendId = productSpendId.filter((item) => item !== productVariantId);
    setProductSpendId(updatedProductSpendId.length > 0 ? updatedProductSpendId : []);
  };
  const removeItemFromProductGet = (productVariantId) => {
    const updatedProductGet = productGet.filter((item) => item.productVariantId !== productVariantId);
    setProductGet(updatedProductGet.length > 0 ? updatedProductGet : [{}]);
    const updatedProductGetId = productGetId.filter((item) => item !== productVariantId);
    setProductGetId(updatedProductGetId.length > 0 ? updatedProductGetId : []);
  };
  async function selectProductSpend() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 1
    });
    if (products) {
      const selectedProducts = products.map((product) => {
        const {
          images,
          id: id2,
          variants,
          title,
          handle
        } = product;
        return variants.map((variant) => {
          var _a2, _b2;
          return {
            productId: id2,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b2 = images[0]) == null ? void 0 : _b2.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      });
      const flattenedVariants = selectedProducts.flat();
      setProductSpend(flattenedVariants);
      const selectedVariantIds = products.map((product) => {
        return product.variants.map((variant) => variant.id);
      }).flat();
      setProductSpendId([...selectedVariantIds]);
    }
  }
  async function selectProductGet() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      const selectedProducts = products.map((product) => {
        const {
          images,
          id: id2,
          variants,
          title,
          handle
        } = product;
        return variants.map((variant) => {
          var _a2, _b2;
          return {
            productId: id2,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b2 = images[0]) == null ? void 0 : _b2.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      });
      const flattenedVariants = selectedProducts.flat();
      setProductGet(flattenedVariants);
      const selectedVariantIds = products.map((product) => {
        return product.variants.map((variant) => variant.id);
      }).flat();
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
      endDate
    },
    submit
  } = useForm({
    fields: {
      discountTitle: useField(discountData.title ? discountData.title : ""),
      discountMethod: useField(discountData.method !== "Automatic" ? DiscountMethod.Code : DiscountMethod.Automatic),
      discountCode: useField((discountData == null ? void 0 : discountData.code) || ""),
      combinesWith: useField({
        orderDiscounts: ((_a = discountData.combinesWith) == null ? void 0 : _a.orderDiscounts) || false,
        productDiscounts: ((_b = discountData.combinesWith) == null ? void 0 : _b.productDiscounts) || false,
        shippingDiscounts: ((_c3 = discountData.combinesWith) == null ? void 0 : _c3.shippingDiscounts) || false
      }),
      requirementType: useField(RequirementType.None),
      requirementSubtotal: useField("0"),
      requirementQuantity: useField("0"),
      usageLimit: useField(null),
      appliesOncePerCustomer: useField(discountData.appliesOncePerCustomer),
      startDate: useField((discountData == null ? void 0 : discountData.startsAt) || today),
      endDate: useField((discountData == null ? void 0 : discountData.endsAt) === "" ? null : discountData == null ? void 0 : discountData.endsAt),
      configuration: {
        quantityPurchase: useField(""),
        amountPurchase: useField("")
      }
    },
    onSubmit: async (form) => {
      setCount(1);
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
          quantityPurchase,
          amountPurchase,
          quantityGet,
          percentageGet,
          freeGet: selectedGet.includes("free")
        },
        discountId: oneDiscount.getOneDiscountByXGetY.discountId,
        productSpend,
        productSpendId,
        productGet,
        productGetId
      };
      if (discount.code === "" && discount.title === "") {
        setCheck(1);
      } else if (validateNumber(parseInt(quantityPurchase)) === 1 && selectedPurchase.includes("quantity")) {
        setCheck(2);
      } else if (validateNumber(discount.configuration.amountPurchase) === 1 && selectedPurchase.includes("amount")) {
        setCheck(3);
      } else if (validateNumber(parseInt(quantityGet)) === 1) {
        setCheck(4);
      } else if (validatePercentage(discount.configuration.percentageGet) === 1 && selectedGet.includes("percentage")) {
        setCheck(5);
      } else if (!productSpend[0].productVariantId) {
        setCheck(6);
      } else if (!productGet[0].productVariantId) {
        setCheck(7);
      } else {
        setCheck(8);
        setDiscountUpdate(discount);
        submitForm({
          discountForm: JSON.stringify(discount)
        }, {
          method: "post"
        });
      }
      console.log(discount);
      return {
        status: "success"
      };
    }
  });
  const toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { content: message, onDismiss: toggleActive, error: check !== 8 }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 664,
    columnNumber: 32
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Create By X get Y discount", backAction: {
    content: "Return",
    onAction: () => navigate("../../app/discountList")
  }, primaryAction: {
    content: "Save",
    onAction: submit,
    loading: isLoading
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { align: "space-around", gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MethodCard, { title: "By X get Y", discountTitle, discountClass: DiscountClass.Product, discountCode, discountMethod }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 679,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h1", children: "Customer spends" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 686,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 683,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h3", children: "Purchase type" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 693,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 690,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Select Purchase type for By X get Y Discount", choices: [{
            label: "Minimum quantity of items",
            value: "quantity"
          }, {
            label: "Minimum purchase amount",
            value: "amount"
          }], selected: selectedPurchase, onChange: handleChangePurchase }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 697,
            columnNumber: 23
          }, this),
          selectedPurchase.includes("quantity") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Quantity", autoComplete: "on", value: quantityPurchase, onChange: handleChangePurchaseQuantity, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 704,
            columnNumber: 65
          }, this),
          selectedPurchase.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Amount", autoComplete: "on", value: amountPurchase, onChange: handleChangePurchaseAmount, suffix: "VND" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 705,
            columnNumber: 63
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductSpend, children: "Click here to set product Customer must spend" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 710,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 706,
            columnNumber: 23
          }, this),
          !productSpend[0].productVariantId ? EmptyProductSelected() : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: productSpend, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 718,
              columnNumber: 39
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromProductSpend(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 724,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 727,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 723,
              columnNumber: 32
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 714,
            columnNumber: 85
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 682,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 681,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 680,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h1", children: "Customer gets" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 739,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 736,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", tone: "subdued", children: "Customers must add the quantity of items specified below to their cart." }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 746,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 743,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Quantity", autoComplete: "on", value: quantityGet, onChange: handleChangeGetQuantity, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 753,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 750,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "At a discounted value", choices: [{
            label: "Percentage",
            value: "percentage"
          }, {
            label: "Free",
            value: "free"
          }], selected: selectedGet, onChange: handleChangeGet }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 755,
            columnNumber: 23
          }, this),
          selectedGet.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Percentage", autoComplete: "on", value: percentageGet, onChange: handleChangeGetPercentage, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 762,
            columnNumber: 62
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductGet, children: "Click here to set product Customer can get" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 768,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 764,
            columnNumber: 23
          }, this),
          !productGet[0].productVariantId ? EmptyProductSelected() : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: productGet, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 776,
              columnNumber: 39
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromProductGet(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 782,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 785,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 781,
              columnNumber: 32
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 772,
            columnNumber: 83
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 735,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 734,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 733,
          columnNumber: 17
        }, this),
        discountMethod.value === DiscountMethod.Code && // kiểm tra xem discount là code hay auto
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          UsageLimitsCard,
          {
            totalUsageLimit: usageLimit,
            oncePerCustomer: appliesOncePerCustomer
          },
          void 0,
          false,
          {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 793,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CombinationCard, { combinableDiscountTypes: combinesWith, discountClass: DiscountClass.Product, discountDescriptor: "Discount" }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 797,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ActiveDatesCard,
          {
            startDate,
            endDate,
            timezoneAbbreviation: "GMT+7"
          },
          void 0,
          false,
          {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 798,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 678,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 677,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 676,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SummaryCard,
        {
          header: {
            discountMethod: discountMethod.value,
            discountDescriptor: discountMethod.value === DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
            appDiscountType: "By X Get Y",
            isEditing: false
          },
          performance: {
            status: DiscountStatus.Scheduled,
            usageCount: 0
          },
          minimumRequirements: {
            requirementType: requirementType.value,
            subtotal: requirementSubtotal.value,
            quantity: requirementQuantity.value,
            currencyCode
          },
          customerEligibility: {
            eligibility: Eligibility.Everyone
          },
          usageLimits: {
            oncePerCustomer: appliesOncePerCustomer.value,
            totalUsageLimit: usageLimit.value
          },
          activeDates: {
            // @ts-ignore
            startDate: startDate.value,
            endDate: endDate.value
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 807,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 806,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageActions, { primaryAction: {
        content: "Save discount",
        onAction: submit,
        loading: isLoading
      }, secondaryActions: [{
        content: "Quit",
        onAction: () => navigate("../../app/discountList")
      }] }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 833,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
        lineNumber: 832,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
      lineNumber: 675,
      columnNumber: 9
    }, this),
    toastMarkup
  ] }, void 0, true, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 667,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 666,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 665,
    columnNumber: 10
  }, this);
};
_s(ByXGetYDiscount, "IIgu9G44kFr20UFxwcVf0VuGkX0=", false, function() {
  return [useLoaderData, useParams, useSubmit, useActionData, useNavigate, useNavigation, useQuery, useMutation, useForm, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField];
});
_c2 = ByXGetYDiscount;
var app_byXgetYdiscount_id_default = ByXGetYDiscount;
var _c;
var _c2;
$RefreshReg$(_c, "EmptyProductSelected");
$RefreshReg$(_c2, "ByXGetYDiscount");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_byXgetYdiscount_id_default as default
};
//# sourceMappingURL=/build/routes/app.byXgetYdiscount.$id-IXMNYZXS.js.map
