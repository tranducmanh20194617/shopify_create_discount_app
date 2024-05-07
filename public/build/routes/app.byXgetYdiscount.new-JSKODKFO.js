import {
  Function,
  useField,
  useForm
} from "/build/_shared/chunk-E2CTCRX3.js";
import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  GET_ALL_DISCOUNT_BY_X_GET_Y
} from "/build/_shared/chunk-OWNOZYKR.js";
import {
  useQuery
} from "/build/_shared/chunk-VJGS4LNA.js";
import {
  ActiveDatesCard,
  CREATE_DISCOUNT_BY_X_GET_Y,
  CombinationCard,
  CurrencyCode,
  DiscountClass,
  DiscountMethod,
  DiscountStatus,
  Eligibility,
  MethodCard,
  RequirementType,
  SummaryCard,
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

// app/routes/app.byXgetYdiscount.new.jsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/app.byXgetYdiscount.new.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.byXgetYdiscount.new.jsx"
  );
  import.meta.hot.lastModified = "1714728696976.7432";
}
var EmptyProductSelected = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
  textAlign: "center",
  maxHeight: "60vh"
}, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: {
    height: "60px",
    width: "60px"
  }, src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", alt: "test" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
    fontWeight: "bold"
  }, children: "There are no products selected" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Please choose product for this By X Get Y discount" }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
  lineNumber: 37,
  columnNumber: 36
}, this);
_c = EmptyProductSelected;
var getId = function(discountId) {
  if (discountId) {
    return discountId.split("/").pop();
  }
};
var ByXGetYDiscount = () => {
  _s();
  const {
    validateNumber,
    validatePercentage
  } = Function();
  const today = (0, import_react2.useMemo)(() => /* @__PURE__ */ new Date(), []);
  const [count, setCount] = (0, import_react2.useState)(0);
  const [check, setCheck] = (0, import_react2.useState)(0);
  const {
    shop
  } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const [active, setActive] = (0, import_react2.useState)(false);
  const toggleActive = (0, import_react2.useCallback)(() => setActive((active2) => !active2), []);
  const [message, setMessage] = (0, import_react2.useState)("");
  const isLoading = navigation.state === "submitting";
  const [quantityPurchase, setQuantityPurchase] = (0, import_react2.useState)("");
  const [amountPurchase, setAmountPurchase] = (0, import_react2.useState)("");
  const currencyCode = CurrencyCode.Cad;
  const [selectedPurchase, setSelectedPurchase] = (0, import_react2.useState)(["quantity"]);
  const [selectedGet, setSelectedGet] = (0, import_react2.useState)(["percentage"]);
  const [percentageGet, setPercentageGet] = (0, import_react2.useState)("");
  const [amountGet, setAmountGet] = (0, import_react2.useState)("");
  const [quantityGet, setQuantityGet] = (0, import_react2.useState)("");
  const submitForm = useSubmit();
  const [productSpendId, setProductSpendId] = (0, import_react2.useState)([]);
  const [productGetId, setProductGetId] = (0, import_react2.useState)([]);
  const [productSpend, setProductSpend] = (0, import_react2.useState)([{}]);
  const [productGet, setProductGet] = (0, import_react2.useState)([{}]);
  const [createDiscount] = useMutation(CREATE_DISCOUNT_BY_X_GET_Y);
  const {
    loading: byXGetYLoading,
    data: byXGetYDiscountsData
  } = useQuery(GET_ALL_DISCOUNT_BY_X_GET_Y);
  const addDiscountCode = async () => {
    var _a, _b;
    try {
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            id: getId(actionData.discountData.id),
            discountId: actionData.discountData.id,
            title: actionData.discountData.codeDiscount.title,
            code: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? (_b = (_a = actionData.discountData.codeDiscount.codes.nodes[0]) == null ? void 0 : _a.code) != null ? _b : "" : "",
            method: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.codeDiscount.combinesWith),
            usageLimit: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" && actionData.discountData.codeDiscount.usageLimit !== null ? actionData.discountData.codeDiscount.usageLimit.toString() : "",
            status: actionData.discountData.codeDiscount.status,
            startsAt: actionData.discountData.codeDiscount.startsAt,
            endsAt: actionData.discountData.codeDiscount.endsAt,
            asyncUsageCount: actionData.discountData.codeDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? actionData.discountData.codeDiscount.appliesOncePerCustomer : false,
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
  const addDiscountAutomatic = async () => {
    var _a, _b;
    try {
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            id: getId(actionData.automaticDiscountData.id),
            discountId: actionData.automaticDiscountData.id,
            title: actionData.automaticDiscountData.automaticDiscount.title,
            code: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? (_b = (_a = actionData.automaticDiscountData.automaticDiscount.codes.nodes[0]) == null ? void 0 : _a.code) != null ? _b : "" : "",
            method: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.automaticDiscountData.automaticDiscount.combinesWith),
            usageLimit: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" && actionData.automaticDiscountData.automaticDiscount.usageLimit !== null ? actionData.automaticDiscountData.automaticDiscount.usageLimit.toString() : "",
            status: actionData.automaticDiscountData.automaticDiscount.status,
            startsAt: actionData.automaticDiscountData.automaticDiscount.startsAt,
            endsAt: actionData.automaticDiscountData.automaticDiscount.endsAt,
            asyncUsageCount: actionData.automaticDiscountData.automaticDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? actionData.automaticDiscountData.automaticDiscount.appliesOncePerCustomer : false,
            quantityPurchase,
            amountPurchase,
            quantityGet,
            percentageGet,
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
  (0, import_react2.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.errors.length) === 0) {
      console.log(actionData == null ? void 0 : actionData.responseJson);
      if (actionData.discountData) {
        console.log("code");
        addDiscountCode().then(() => {
          console.log(actionData == null ? void 0 : actionData.discountData);
          navigate("../../app/discountList");
        }).catch((error) => {
          console.error("Error:", error);
        });
      } else if (actionData.automaticDiscountData) {
        addDiscountAutomatic().then(() => {
          console.log("automatic");
          console.log(actionData == null ? void 0 : actionData.automaticDiscountData);
          navigate("../../app/discountList");
        }).catch((error) => {
          console.error("Error:", error);
        });
      }
    }
  }, [actionData]);
  (0, import_react2.useEffect)(() => {
    console.log(productSpend);
  }, [productSpend]);
  (0, import_react2.useEffect)(() => {
    if (selectedPurchase.includes("quantity")) {
      setAmountPurchase("");
    } else {
      setQuantityPurchase("");
    }
  }, [selectedPurchase]);
  (0, import_react2.useEffect)(() => {
    if (selectedGet.includes("percentage")) {
      setAmountGet("");
    } else if (selectedGet.includes("amount")) {
      setPercentageGet("");
    } else {
      setPercentageGet("");
      setAmountGet("");
    }
  }, [selectedGet]);
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
  const handleChangeGetAmount = (0, import_react2.useCallback)((newValue) => {
    setAmountGet(newValue);
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
          id,
          variants,
          title,
          handle
        } = product;
        return variants.map((variant) => {
          var _a, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a = images[0]) == null ? void 0 : _a.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
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
      setProductSpendId((prevIds) => [...prevIds, ...selectedVariantIds]);
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
          id,
          variants,
          title,
          handle
        } = product;
        return variants.map((variant) => {
          var _a, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a = images[0]) == null ? void 0 : _a.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
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
      setProductGetId((prevIds) => [...prevIds, ...selectedVariantIds]);
    }
  }
  const toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { content: message, onDismiss: toggleActive, error: check !== 8 }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 572,
    columnNumber: 32
  }, this) : null;
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
      discountTitle: useField(""),
      discountMethod: useField(DiscountMethod.Code),
      discountCode: useField(""),
      combinesWith: useField({
        orderDiscounts: false,
        productDiscounts: false,
        shippingDiscounts: false
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
        quantityGet: useField(""),
        percentageGet: useField(""),
        amountGet: useField(""),
        freeGet: useField(false)
      }
    },
    onSubmit: async (form) => {
      setCount(1);
      let discount;
      let existingDiscount;
      let existingDiscountTitle;
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
          quantityPurchase,
          amountPurchase: parseFloat(amountPurchase),
          quantityGet,
          amountGet: parseFloat(amountGet),
          percentageGet: parseFloat(percentageGet),
          freeGet: selectedGet.includes("free")
        },
        productSpend,
        productSpendId,
        productGet,
        productGetId
      };
      if (!byXGetYLoading) {
        existingDiscount = byXGetYDiscountsData.getAllDiscountByXGetY.filter((node) => node.code !== "").find((item) => item.code === discount.code);
        existingDiscountTitle = byXGetYDiscountsData.getAllDiscountByXGetY.find((item) => item.title === discount.title);
      }
      if (discount.code === "" && discount.title === "") {
        setCheck(1);
      } else if (existingDiscount || existingDiscountTitle) {
        setCheck(15);
        console.log("trung ten");
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
        console.log(discount);
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
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 692,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h1", children: "Customer spends" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 699,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 696,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h3", children: "Purchase type" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 706,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 703,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Select Purchase type for By X get Y Discount", choices: [{
            label: "Minimum quantity of items",
            value: "quantity"
          }, {
            label: "Minimum purchase amount",
            value: "amount"
          }], selected: selectedPurchase, onChange: handleChangePurchase }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 710,
            columnNumber: 23
          }, this),
          selectedPurchase.includes("quantity") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Quantity", autoComplete: "on", value: quantityPurchase, onChange: handleChangePurchaseQuantity, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 717,
            columnNumber: 65
          }, this),
          selectedPurchase.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Amount", autoComplete: "on", value: amountPurchase, onChange: handleChangePurchaseAmount, suffix: "VND" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 718,
            columnNumber: 63
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductSpend, children: "Click here to set product Customer must spend" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 723,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 719,
            columnNumber: 23
          }, this),
          !productSpend[0].productVariantId ? EmptyProductSelected() : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: productSpend, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 731,
              columnNumber: 39
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromProductSpend(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 737,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 740,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 736,
              columnNumber: 32
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 727,
            columnNumber: 85
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 695,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 694,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 693,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h1", children: "Customer gets" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 752,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 749,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", tone: "subdued", children: "Customers must add the quantity of items specified below to their cart." }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 759,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 756,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Quantity", autoComplete: "on", value: quantityGet, onChange: handleChangeGetQuantity, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 766,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 763,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "At a discounted value", choices: [{
            label: "Percentage",
            value: "percentage"
          }, {
            label: "Free",
            value: "free"
          }], selected: selectedGet, onChange: handleChangeGet }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 768,
            columnNumber: 23
          }, this),
          selectedGet.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Percentage", autoComplete: "on", value: percentageGet, onChange: handleChangeGetPercentage, suffix: "" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 775,
            columnNumber: 62
          }, this),
          selectedGet.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Amount", autoComplete: "on", value: amountGet, onChange: handleChangeGetAmount, suffix: "VND" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 776,
            columnNumber: 58
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductGet, children: "Click here to set product Customer can get" }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 781,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 777,
            columnNumber: 23
          }, this),
          !productGet[0].productVariantId ? EmptyProductSelected() : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: productGet, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 789,
              columnNumber: 39
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromProductGet(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 795,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 798,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 794,
              columnNumber: 32
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 785,
            columnNumber: 83
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 748,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 747,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 746,
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
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 806,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CombinationCard, { combinableDiscountTypes: combinesWith, discountClass: DiscountClass.Product, discountDescriptor: "Discount" }, void 0, false, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 810,
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
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 811,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 691,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 690,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 689,
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
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 820,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 819,
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
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 846,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
        lineNumber: 845,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.byXgetYdiscount.new.jsx",
      lineNumber: 688,
      columnNumber: 9
    }, this),
    toastMarkup
  ] }, void 0, true, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 680,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 679,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 678,
    columnNumber: 10
  }, this);
};
_s(ByXGetYDiscount, "y0oiKXfstG80YqMszgmaOutWkOk=", false, function() {
  return [useLoaderData, useNavigate, useNavigation, useActionData, useSubmit, useMutation, useQuery, useForm, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField];
});
_c2 = ByXGetYDiscount;
var app_byXgetYdiscount_new_default = ByXGetYDiscount;
var _c;
var _c2;
$RefreshReg$(_c, "EmptyProductSelected");
$RefreshReg$(_c2, "ByXGetYDiscount");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_byXgetYdiscount_new_default as default
};
//# sourceMappingURL=/build/routes/app.byXgetYdiscount.new-JSKODKFO.js.map
