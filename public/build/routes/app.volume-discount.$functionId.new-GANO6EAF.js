import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Function,
  useField,
  useForm
} from "/build/_shared/chunk-E2CTCRX3.js";
import {
  GET_ALL_DISCOUNT
} from "/build/_shared/chunk-OWNOZYKR.js";
import {
  useQuery
} from "/build/_shared/chunk-VJGS4LNA.js";
import {
  ActiveDatesCard,
  CREATE_DISCOUNT,
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
  Select,
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

// app/routes/app.volume-discount.$functionId.new.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.volume-discount.$functionId.new.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.volume-discount.$functionId.new.jsx"
  );
  import.meta.hot.lastModified = "1714396006705.3518";
}
var EmptyProductSelected = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
  textAlign: "center",
  maxHeight: "60vh"
}, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: {
    height: "60px",
    width: "60px"
  }, src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", alt: "test" }, void 0, false, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
    fontWeight: "bold"
  }, children: "There are no products selected" }, void 0, false, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Please choose product for this discount" }, void 0, false, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
  lineNumber: 37,
  columnNumber: 36
}, this);
_c = EmptyProductSelected;
function CreateDiscount() {
  _s();
  const {
    validateNumber,
    validatePercentage
  } = Function();
  const {
    shop
  } = useLoaderData();
  const [formState, setFormState] = (0, import_react.useState)([{}]);
  const [formState2, setFormState2] = (0, import_react.useState)([{}]);
  const [formState3, setFormState3] = (0, import_react.useState)([{}]);
  const [isFirstButtonActive, setIsFirstButtonActive] = (0, import_react.useState)(true);
  const [check, setCheck] = (0, import_react.useState)(0);
  const [count, setCount] = (0, import_react.useState)(0);
  const [selected, setSelected] = (0, import_react.useState)(["allProduct"]);
  const [applyTo, setApplyTo] = (0, import_react.useState)("all");
  const [selectedVolume, setSelectedVolume] = (0, import_react.useState)(["percentage"]);
  const [selectedVolume2, setSelectedVolume2] = (0, import_react.useState)(["percentage"]);
  const [selectedVolume3, setSelectedVolume3] = (0, import_react.useState)(["percentage"]);
  const submitForm = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const today = (0, import_react.useMemo)(() => /* @__PURE__ */ new Date(), []);
  const isLoading = navigation.state === "submitting";
  const currencyCode = CurrencyCode.Cad;
  const navigate = useNavigate();
  const [active, setActive] = (0, import_react.useState)(false);
  const toggleActive = (0, import_react.useCallback)(() => setActive((active2) => !active2), []);
  const [message, setMessage] = (0, import_react.useState)("");
  const [showVolume1, setShowVolume1] = (0, import_react.useState)(true);
  const [percentageDiscount, setPercentageDiscount] = (0, import_react.useState)("");
  const [amountDiscount, setAmountDiscount] = (0, import_react.useState)("");
  const [selectedValueType, setSelectedValueType] = (0, import_react.useState)(["max"]);
  const [appliesToEachItem, setAppliesToEachItem] = (0, import_react.useState)(false);
  const [showVolume2, setShowVolume2] = (0, import_react.useState)(false);
  const [percentageDiscount2, setPercentageDiscount2] = (0, import_react.useState)("");
  const [amountDiscount2, setAmountDiscount2] = (0, import_react.useState)("");
  const [selectedValueType2, setSelectedValueType2] = (0, import_react.useState)(["max"]);
  const [appliesToEachItem2, setAppliesToEachItem2] = (0, import_react.useState)(false);
  const [showVolume3, setShowVolume3] = (0, import_react.useState)(false);
  const [percentageDiscount3, setPercentageDiscount3] = (0, import_react.useState)("");
  const [amountDiscount3, setAmountDiscount3] = (0, import_react.useState)("");
  const [selectedValueType3, setSelectedValueType3] = (0, import_react.useState)(["max"]);
  const [appliesToEachItem3, setAppliesToEachItem3] = (0, import_react.useState)(false);
  const [discountStrategyCount, setDiscountStrategyCount] = (0, import_react.useState)("1");
  const {
    loading: DiscountLoading,
    data: DiscountsData
  } = useQuery(GET_ALL_DISCOUNT);
  const [createDiscount] = useMutation(CREATE_DISCOUNT);
  const addDiscount = async () => {
    var _a, _b;
    try {
      let value;
      if (actionData.value1) {
        value = JSON.parse(actionData.value1);
      } else {
        value = {};
      }
      const createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            discountId: actionData.discountData.discountId,
            title: actionData.discountData.title,
            code: actionData.discountData.__typename === "DiscountCodeApp" ? (_b = (_a = actionData.discountData.codes.nodes[0]) == null ? void 0 : _a.code) != null ? _b : "" : "",
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
            quantity_3: value.quantity3 ? value.quantity3.toString() : ""
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
  (0, import_react.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.errors.length) === 0) {
      if (actionData.discountData) {
        addDiscount().then();
        navigate("../../app/discountList");
      }
    }
    console.log(actionData == null ? void 0 : actionData.responseJson);
  }, [actionData]);
  (0, import_react.useEffect)(() => {
    if (check === 9) {
      setMessage("There are duplicate products in Volume or Volume 3");
      setActive(true);
    } else if (check === 10) {
      setMessage("There are duplicate products in Volume 1 or Volume 3");
      setActive(true);
    } else if (check === 11) {
      setMessage("There are duplicate products in Volume 1 or Volume 2");
      setActive(true);
    }
    if (count === 1) {
      if (check === 1) {
        setMessage("Discount code cannot be empty");
        setActive(true);
      } else if (check === 2) {
        setMessage("Invalid Minimum quantity");
        setActive(true);
      } else if (check === 3) {
        setMessage("Invalid discount percentage");
        setActive(true);
      } else if (check === 4) {
        setMessage("Invalid discount amount");
        setActive(true);
      } else if (check === 5) {
        setMessage("Create Discount Success");
        setActive(true);
      } else if (check === 6) {
        setMessage("Product Volume 1 can not be empty");
        setActive(true);
      } else if (check === 7) {
        setMessage("Product Volume 2 can not be empty");
        setActive(true);
      } else if (check === 8) {
        setMessage("Product Volume 2 can not be empty");
        setActive(true);
      } else if (check === 15) {
        setMessage("Discount cannot be duplicated");
        setActive(true);
      }
      setCount(0);
    }
  }, [check, count]);
  (0, import_react.useEffect)(() => {
    if (discountStrategyCount === "1") {
      setShowVolume1(true);
      setShowVolume2(false);
      setShowVolume3(false);
    } else if (discountStrategyCount === "2") {
      setShowVolume1(true);
      setShowVolume2(true);
      setShowVolume3(false);
    } else if (discountStrategyCount === "3") {
      setShowVolume1(true);
      setShowVolume2(true);
      setShowVolume3(true);
    }
  }, [discountStrategyCount]);
  (0, import_react.useEffect)(() => {
    if (selectedVolume.includes("percentage")) {
      setAmountDiscount("");
      setAppliesToEachItem(false);
    } else {
      setPercentageDiscount("");
    }
  }, [selectedVolume]);
  (0, import_react.useEffect)(() => {
    if (selectedVolume2.includes("percentage")) {
      setAmountDiscount2("");
      setAppliesToEachItem2(false);
    } else {
      setPercentageDiscount2("");
    }
  }, [selectedVolume2]);
  (0, import_react.useEffect)(() => {
    if (selectedVolume3.includes("percentage")) {
      setAmountDiscount3("");
      setAppliesToEachItem3(false);
    } else {
      setPercentageDiscount3("");
    }
  }, [selectedVolume3]);
  async function selectProduct() {
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
      const isDuplicateProduct = flattenedVariants.some((newProduct) => {
        const isDuplicateInFormState2 = formState2.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        const isDuplicateInFormState3 = formState3.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState2 || isDuplicateInFormState3;
      });
      if (isDuplicateProduct) {
        setCheck(9);
        console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState2 ho\u1EB7c formState3");
      } else {
        setFormState(flattenedVariants);
      }
    }
  }
  async function selectProduct2() {
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
      const isDuplicateProduct2 = flattenedVariants.some((newProduct) => {
        const isDuplicateInFormState = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        const isDuplicateInFormState3 = formState3.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState || isDuplicateInFormState3;
      });
      if (isDuplicateProduct2) {
        console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState3");
        setCheck(10);
      } else {
        setFormState2(flattenedVariants);
      }
    }
  }
  async function selectProduct3() {
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
      const isDuplicateProduct3 = flattenedVariants.some((newProduct) => {
        const isDuplicateInFormState1 = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        const isDuplicateInFormState2 = formState2.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState1 || isDuplicateInFormState2;
      });
      if (isDuplicateProduct3) {
        setCheck(11);
        console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState2");
      } else {
        setFormState3(flattenedVariants);
      }
    }
  }
  (0, import_react.useEffect)(() => {
    console.log(formState);
  }, [formState]);
  (0, import_react.useEffect)(() => {
    if (selected.includes("chooseProduct")) {
      setApplyTo("choose");
      setIsFirstButtonActive(true);
      setDiscountStrategyCount("1");
      setFormState([{}]);
      setFormState2([{}]);
      setFormState3([{}]);
    } else {
      setApplyTo("all");
      setIsFirstButtonActive(false);
    }
  }, [selected]);
  (0, import_react.useEffect)(() => {
    if (selectedValueType.includes("max")) {
      setAppliesToEachItem(false);
    } else {
      setAppliesToEachItem(true);
    }
  }, [selectedValueType]);
  (0, import_react.useEffect)(() => {
    if (selectedValueType2.includes("max")) {
      setAppliesToEachItem2(false);
    } else {
      setAppliesToEachItem2(true);
    }
  }, [selectedValueType2]);
  (0, import_react.useEffect)(() => {
    if (selectedValueType3.includes("max")) {
      setAppliesToEachItem3(false);
    } else {
      setAppliesToEachItem3(true);
    }
  }, [selectedValueType3]);
  (0, import_react.useEffect)(() => {
    if (!showVolume2) {
      setAppliesToEachItem2(false);
      setAmountDiscount2("");
      setPercentageDiscount2("");
      setSelectedValueType2(["max"]);
      setSelectedVolume2(["percentage"]);
    }
  }, [showVolume2]);
  (0, import_react.useEffect)(() => {
    if (!showVolume3) {
      setAppliesToEachItem3(false);
      setAmountDiscount3("");
      setPercentageDiscount3("");
      setSelectedValueType3(["max"]);
      setSelectedVolume3(["percentage"]);
    }
  }, [showVolume3]);
  const handleSelectDiscountStrategyCountChange = (0, import_react.useCallback)((value) => setDiscountStrategyCount(value), []);
  const options = [{
    label: "1",
    value: "1"
  }, {
    label: "2",
    value: "2"
  }, {
    label: "3",
    value: "3"
  }];
  const handleChangeApplies = (value) => {
    setSelected(value);
    console.log(value);
  };
  const handleChoiceValueTypeChange = (0, import_react.useCallback)((value) => setSelectedValueType(value), []);
  const handleChoiceValueTypeChange2 = (0, import_react.useCallback)((value) => setSelectedValueType2(value), []);
  const handleChoiceValueTypeChange3 = (0, import_react.useCallback)((value) => setSelectedValueType3(value), []);
  const handleDiscountPercentageChange = (0, import_react.useCallback)((newValue) => {
    setPercentageDiscount(newValue);
  }, []);
  const handleDiscountPercentageChange2 = (0, import_react.useCallback)((newValue) => {
    setPercentageDiscount2(newValue);
  }, []);
  const handleDiscountPercentageChange3 = (0, import_react.useCallback)((newValue) => {
    setPercentageDiscount3(newValue);
  }, []);
  const handleDiscountAmountChange = (0, import_react.useCallback)((newValue) => {
    setAmountDiscount(newValue);
  }, []);
  const handleDiscountAmountChange2 = (0, import_react.useCallback)((newValue) => {
    setAmountDiscount2(newValue);
  }, []);
  const handleDiscountAmountChange3 = (0, import_react.useCallback)((newValue) => {
    setAmountDiscount3(newValue);
  }, []);
  const handleChangeVolume = (value) => {
    setSelectedVolume(value);
  };
  const handleChangeVolume2 = (value) => {
    setSelectedVolume2(value);
  };
  const handleChangeVolume3 = (value) => {
    setSelectedVolume3(value);
  };
  const removeItemFromFormState = (productVariantId) => {
    const updatedFormState = formState.filter((item) => item.productVariantId !== productVariantId);
    setFormState(updatedFormState.length > 0 ? updatedFormState : [{}]);
  };
  const removeItemFromFormState2 = (productVariantId) => {
    const updatedFormState2 = formState2.filter((item) => item.productVariantId !== productVariantId);
    setFormState2(updatedFormState2.length > 0 ? updatedFormState2 : [{}]);
  };
  const removeItemFromFormState3 = (productVariantId) => {
    const updatedFormState3 = formState3.filter((item) => item.productVariantId !== productVariantId);
    setFormState3(updatedFormState3.length > 0 ? updatedFormState3 : [{}]);
  };
  const renderChildren = (0, import_react.useCallback)(
    (isSelected) => isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "", choices: [{
      label: "Max Discount amount",
      value: "max"
    }, {
      label: "Discount for each product",
      value: "eachProduct"
    }], selected: selectedValueType, onChange: handleChoiceValueTypeChange }, void 0, false, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 710,
      columnNumber: 87
    }, this),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType]
  );
  const renderChildren2 = (0, import_react.useCallback)(
    (isSelected2) => isSelected2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "", choices: [{
      label: "Max Discount amount",
      value: "max"
    }, {
      label: "Discount for each product",
      value: "eachProduct"
    }], selected: selectedValueType2, onChange: handleChoiceValueTypeChange2 }, void 0, false, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 719,
      columnNumber: 90
    }, this),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType2]
  );
  const choiceWithValueRenderChildren2 = {
    label: "Value",
    value: "Value",
    renderChildren: renderChildren2
  };
  const renderChildren3 = (0, import_react.useCallback)(
    (isSelected3) => isSelected3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "", choices: [{
      label: "Max Discount amount",
      value: "max"
    }, {
      label: "Discount for each product",
      value: "eachProduct"
    }], selected: selectedValueType3, onChange: handleChoiceValueTypeChange3 }, void 0, false, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 733,
      columnNumber: 90
    }, this),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType3]
  );
  const choiceWithValueRenderChildren3 = {
    label: "Value",
    value: "Value",
    renderChildren: renderChildren3
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
      configuration
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
        countStrategy: discountStrategyCount,
        applyTo,
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
          appliesToEachItem,
          appliesToEachItem2,
          appliesToEachItem3
        },
        products1: formState[0].productVariantId ? formState : [],
        products2: formState2[0].productVariantId ? formState2 : [],
        products3: formState3[0].productVariantId ? formState3 : []
      };
      if (!DiscountLoading) {
        existingDiscount = DiscountsData.getAllDiscount.filter((node) => node.code !== "").find((item) => item.code === discount.code);
        existingDiscountTitle = DiscountsData.getAllDiscount.find((item) => item.title === discount.title);
      }
      if (discount.code === "" && discount.title === "") {
        setCheck(1);
      } else if (existingDiscount !== void 0 || existingDiscountTitle !== void 0) {
        setCheck(15);
        console.log("trung ten");
        console.log(existingDiscountTitle);
        console.log(existingDiscount);
      } else if (validateNumber(discount.configuration.quantity) === 1 || validateNumber(discount.configuration.quantity2) === 1 || validateNumber(discount.configuration.quantity3) === 1) {
        setCheck(2);
      } else if (showVolume1 && showVolume2 === false && showVolume3 === false) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage")) {
          setCheck(3);
          console.log("sai 1");
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value")) {
          setCheck(4);
          console.log("sai 2");
        } else if (discount.products1.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(6);
          console.log("sai 15");
        } else {
          setCheck(5);
          submitForm({
            discountForm: JSON.stringify(discount)
          }, {
            method: "post"
          });
        }
      } else if (showVolume2 && showVolume3 === false) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage")) {
          setCheck(3);
          console.log("sai 4");
        } else if (validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes("percentage")) {
          setCheck(3);
          console.log("sai 5");
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value")) {
          setCheck(4);
          console.log("sai 6");
        } else if (validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value")) {
          setCheck(4);
          console.log("sai 7");
        } else if (discount.products1.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(6);
          console.log("sai 16");
        } else if (discount.products2.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(7);
          console.log("sai 17");
        } else {
          setCheck(5);
          submitForm({
            discountForm: JSON.stringify(discount)
          }, {
            method: "post"
          });
        }
      } else if (showVolume2 && showVolume3) {
        if (validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage")) {
          setCheck(3);
          console.log("sai 9");
        } else if (validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes("percentage")) {
          setCheck(3);
          console.log("sai 10");
        } else if (validatePercentage(discount.configuration.percentage3) === 1 && selectedVolume3.includes("percentage")) {
          setCheck(3);
          console.log("sai 11");
        } else if (validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value")) {
          setCheck(4);
          console.log("sai 12");
        } else if (validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value")) {
          setCheck(4);
          console.log("sai 13");
        } else if (validatePercentage(discount.configuration.fixedAmount3) === 1 && selectedVolume3.includes("Value")) {
          setCheck(3);
          console.log("sai 14");
        } else if (discount.products1.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(6);
          console.log("sai 18");
        } else if (discount.products2.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(7);
          console.log("sai 19");
        } else if (discount.products3.length <= 0 && selected.includes("chooseProduct")) {
          setCheck(8);
          console.log("sai 20");
        } else {
          setCheck(5);
          submitForm({
            discountForm: JSON.stringify(discount)
          }, {
            method: "post"
          });
        }
      } else {
        setCheck(5);
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
  const toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { content: message, onDismiss: toggleActive, error: check !== 5 }, void 0, false, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 940,
    columnNumber: 32
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Create volume discount", backAction: {
    content: "Return",
    onAction: () => navigate("../../app/discountList")
  }, primaryAction: {
    content: "Save",
    onAction: submit,
    loading: isLoading
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { align: "space-around", gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MethodCard, { title: "Volume", discountTitle, discountClass: DiscountClass.Product, discountCode, discountMethod }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 955,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Apply to", choices: [{
          label: "Apply on all Product",
          value: "allProduct"
        }, {
          label: " Choose Product",
          value: "chooseProduct"
        }], selected, onChange: handleChangeApplies }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 959,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 958,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 957,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 956,
          columnNumber: 17
        }, this),
        isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Discount Strategy Count", options, onChange: handleSelectDiscountStrategyCountChange, value: discountStrategyCount }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 972,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 971,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 970,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 969,
          columnNumber: 40
        }, this) : null,
        showVolume1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h2", children: "Volume 1" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 980,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Minimum quantity", autoComplete: "on", ...configuration.quantity }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 983,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Select discount type", choices: [{
              label: "Percentage",
              value: "percentage"
            }, {
              label: "Value",
              value: "Value",
              renderChildren
            }], selected: selectedVolume, onChange: handleChangeVolume }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 984,
              columnNumber: 25
            }, this),
            selectedVolume.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount percentage", autoComplete: "on", value: percentageDiscount, onChange: handleDiscountPercentageChange, suffix: "%" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 992,
              columnNumber: 67
            }, this),
            selectedVolume.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount value", autoComplete: "on", value: amountDiscount, onChange: handleDiscountAmountChange, suffix: "VND" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 993,
              columnNumber: 62
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 979,
            columnNumber: 23
          }, this),
          isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct, children: "Click here to set product" }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 999,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 995,
            columnNumber: 46
          }, this) : null,
          isFirstButtonActive && formState[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: formState, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1007,
              columnNumber: 35
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromFormState(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1013,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1016,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1012,
              columnNumber: 28
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1003,
            columnNumber: 72
          }, this) : isFirstButtonActive && EmptyProductSelected()
        ] }, void 0, true, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 978,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 977,
          columnNumber: 33
        }, this),
        showVolume2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h2", children: "Volume 2" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1024,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Minimum quantity", autoComplete: "on", ...configuration.quantity2 }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1027,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Select discount type", choices: [
              {
                label: "Percentage",
                value: "percentage"
              },
              choiceWithValueRenderChildren2
              // Sử dụng đối tượng Choice mới ở đây
            ], selected: selectedVolume2, onChange: handleChangeVolume2 }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1028,
              columnNumber: 25
            }, this),
            selectedVolume2.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount percentage", autoComplete: "on", value: percentageDiscount2, onChange: handleDiscountPercentageChange2, suffix: "%" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1033,
              columnNumber: 68
            }, this),
            selectedVolume2.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount value", autoComplete: "on", value: amountDiscount2, onChange: handleDiscountAmountChange2, suffix: "VND" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1034,
              columnNumber: 63
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1023,
            columnNumber: 23
          }, this),
          isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct2, children: "Click here to set product" }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1040,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1036,
            columnNumber: 46
          }, this) : null,
          isFirstButtonActive && formState2[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: formState2, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1048,
              columnNumber: 35
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromFormState2(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1054,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1057,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1053,
              columnNumber: 28
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1044,
            columnNumber: 73
          }, this) : isFirstButtonActive && EmptyProductSelected()
        ] }, void 0, true, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1022,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1021,
          columnNumber: 33
        }, this),
        showVolume3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h2", children: "Volume 3" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1066,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Minimum quantity", autoComplete: "on", ...configuration.quantity3 }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1069,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Select discount type", choices: [
              {
                label: "Percentage",
                value: "percentage"
              },
              choiceWithValueRenderChildren3
              // Sử dụng đối tượng Choice mới ở đây
            ], selected: selectedVolume3, onChange: handleChangeVolume3 }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1070,
              columnNumber: 25
            }, this),
            selectedVolume3.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount percentage", autoComplete: "on", value: percentageDiscount3, onChange: handleDiscountPercentageChange3, suffix: "%" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1075,
              columnNumber: 68
            }, this),
            selectedVolume3.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Discount value", autoComplete: "on", value: amountDiscount3, onChange: handleDiscountAmountChange3, suffix: "VND" }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1076,
              columnNumber: 63
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1065,
            columnNumber: 23
          }, this),
          isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "15px",
            marginTop: "15px"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct3, children: "Click here to set product" }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1082,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1078,
            columnNumber: 46
          }, this) : null,
          isFirstButtonActive && formState3[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
            singular: "customer",
            plural: "customers"
          }, items: formState3, renderItem: (item) => {
            const media = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: item.productImage || "", alt: item.productAlt }, void 0, false, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1090,
              columnNumber: 35
            }, this);
            const shortcutActions = [{
              content: "Remove",
              onAction: () => removeItemFromFormState3(item.productVariantId)
            }];
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id: item.productId, url: item.productImage, media, shortcutActions, persistActions: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1096,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: item.variantTitle }, void 0, false, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1099,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1095,
              columnNumber: 28
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1086,
            columnNumber: 73
          }, this) : isFirstButtonActive && EmptyProductSelected()
        ] }, void 0, true, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1064,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1063,
          columnNumber: 33
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
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1108,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CombinationCard, { combinableDiscountTypes: combinesWith, discountClass: DiscountClass.Product, discountDescriptor: "Discount" }, void 0, false, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1112,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ActiveDatesCard,
          {
            startDate,
            endDate,
            timezoneAbbreviation: "GMT"
          },
          void 0,
          false,
          {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1113,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 954,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 953,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 952,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SummaryCard,
        {
          header: {
            discountMethod: discountMethod.value,
            discountDescriptor: discountMethod.value === DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
            appDiscountType: "Discount",
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
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1122,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 1121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageActions, { primaryAction: {
        content: "Save discount",
        onAction: submit,
        loading: isLoading
      }, secondaryActions: [{
        content: "Discard",
        onAction: () => navigate("../../app/discountList")
      }] }, void 0, false, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 1148,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 1147,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 951,
      columnNumber: 9
    }, this),
    toastMarkup
  ] }, void 0, true, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 943,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 942,
    columnNumber: 10
  }, this);
}
_s(CreateDiscount, "yccCLuUTuLQisRpDmHNuibi/h6c=", false, function() {
  return [useLoaderData, useSubmit, useActionData, useNavigation, useNavigate, useQuery, useMutation, useForm, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField, useField];
});
_c2 = CreateDiscount;
var _c;
var _c2;
$RefreshReg$(_c, "EmptyProductSelected");
$RefreshReg$(_c2, "CreateDiscount");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreateDiscount as default
};
//# sourceMappingURL=/build/routes/app.volume-discount.$functionId.new-GANO6EAF.js.map
