import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  GET_ALL_DISCOUNT,
  GET_ALL_DISCOUNT_BY_X_GET_Y
} from "/build/_shared/chunk-OWNOZYKR.js";
import {
  useQuery
} from "/build/_shared/chunk-VJGS4LNA.js";
import {
  DELETE_DISCOUNT,
  DELETE_DISCOUNT_BY_X_GET_Y,
  DiscountMethod,
  UPDATE_DISCOUNT_STATUS_AND_COUNT,
  UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y
} from "/build/_shared/chunk-HN52GLY7.js";
import "/build/_shared/chunk-CB7CFRQ5.js";
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
  Popover,
  Spinner,
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
  init_esm,
  useActionData,
  useLoaderData,
  useNavigate,
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

// app/routes/app.discountList.jsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
init_esm();
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.discountList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.discountList.jsx"
  );
  import.meta.hot.lastModified = "1714729132586.126";
}
var EmptyDiscountState = ({
  onAction
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { heading: "Create discount co for your product", action: {
  content: "Create discount",
  onAction
}, image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Allow to create new discount by function." }, void 0, false, {
  fileName: "app/routes/app.discountList.jsx",
  lineNumber: 273,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/app.discountList.jsx",
  lineNumber: 269,
  columnNumber: 7
}, this);
_c = EmptyDiscountState;
var setColorStatus = function(status) {
  switch (status) {
    case "ACTIVE":
      return "green";
    case "EXPIRED":
      return "red";
    case "SCHEDULED":
      return "yellow";
    default:
      return "black";
  }
};
var getId = function(discountId) {
  if (discountId) {
    return discountId.split("/").pop();
  }
};
var DiscountList = () => {
  _s();
  const {
    discountList,
    functionId,
    filteredNodesByXGetY,
    shop
  } = useLoaderData();
  const [discountListData, setDiscountData] = (0, import_react.useState)([{}]);
  const [discountListDataBefore, setDiscountDataBefore] = (0, import_react.useState)([{}]);
  const [discountListDataByXGetY, setDiscountDataByXGetY] = (0, import_react.useState)([{}]);
  const [discountListDataByXGetYBefore, setDiscountDataByXGetYBefore] = (0, import_react.useState)([{}]);
  const navigate = useNavigate();
  const actionData = useActionData();
  const submitForm = useSubmit();
  const [active, setActive] = (0, import_react.useState)(false);
  const [activeByXgetYModal, setActiveByXgetYModal] = (0, import_react.useState)(false);
  const [discount, setDiscount] = (0, import_react.useState)();
  const [activeToast, setActiveToast] = (0, import_react.useState)(false);
  const [count, setCount] = (0, import_react.useState)(0);
  const [delete_discount] = useMutation(DELETE_DISCOUNT);
  const [delete_discount_by_x_get_y] = useMutation(DELETE_DISCOUNT_BY_X_GET_Y);
  const [updateDiscount] = useMutation(UPDATE_DISCOUNT_STATUS_AND_COUNT);
  const [updateDiscountByXGetY] = useMutation(UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y);
  const [activeMessage, setActiveMessage] = (0, import_react.useState)(false);
  const toggleActive = (0, import_react.useCallback)(() => setActiveMessage((active2) => !active2), []);
  const [message, setMessage] = (0, import_react.useState)("");
  const {
    loading: DiscountLoading,
    data: DiscountsData
  } = useQuery(GET_ALL_DISCOUNT);
  const {
    loading: byXGetYLoading,
    data: byXGetYDiscountsData
  } = useQuery(GET_ALL_DISCOUNT_BY_X_GET_Y);
  (0, import_react.useEffect)(() => {
    if (discountList) {
      if (shop) {
        const updatePromises = discountList.map((node) => setTimeout(() => discountUpdate(node.discountId, node.discount.status, node.discount.asyncUsageCount), 1500));
        Promise.all(updatePromises).then(() => {
          if (!DiscountLoading) {
            if (DiscountsData) {
              const updatedDiscountsData = DiscountsData.getAllDiscount.map((discount2) => {
                const matchingNode = discountList.find((node) => node.discountId === discount2.discountId);
                if (matchingNode) {
                  return {
                    ...discount2,
                    status: matchingNode.discount.status,
                    asyncUsageCount: matchingNode.discount.asyncUsageCount.toString()
                  };
                } else {
                  return discount2;
                }
              });
              console.log(updatedDiscountsData);
              setDiscountData(updatedDiscountsData);
              setDiscountDataBefore(updatedDiscountsData);
            } else {
              setDiscountData([]);
            }
          }
        }).catch((error) => {
          console.error("Error updating discounts:", error);
        });
      }
    }
    if (!byXGetYLoading) {
      if (filteredNodesByXGetY) {
        if (shop) {
          const updatePromises = filteredNodesByXGetY.map((node) => setTimeout(() => discountUpdateByXGetY(node.id, node.discount.status, node.discount.asyncUsageCount), 1500));
          Promise.all(updatePromises).then(() => {
            if (!DiscountLoading) {
              if (byXGetYDiscountsData) {
                const updatedDiscountsData = byXGetYDiscountsData.getAllDiscountByXGetY.map((discount2) => {
                  const matchingNode = filteredNodesByXGetY.find((node) => node.id === discount2.discountId);
                  if (matchingNode) {
                    return {
                      ...discount2,
                      status: matchingNode.discount.status,
                      asyncUsageCount: matchingNode.discount.asyncUsageCount.toString()
                    };
                  } else {
                    return discount2;
                  }
                });
                console.log(updatedDiscountsData);
                setDiscountDataByXGetY(updatedDiscountsData);
                setDiscountDataByXGetYBefore(updatedDiscountsData);
              } else {
                setDiscountDataByXGetY([]);
              }
            }
          }).catch((error) => {
            console.error("Error updating discounts:", error);
          });
        }
      }
    }
  }, [DiscountLoading, byXGetYLoading]);
  (0, import_react.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.errors.length) === 0) {
      const discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.discountId);
      setDiscountData(discountDataUpdate);
    }
  }, [actionData, count]);
  const discountDelete = async (discount2) => {
    try {
      if (discount2) {
        const createPromise = await delete_discount({
          variables: {
            input: {
              discountId: discount2.discountId,
              storeId: shop.id
            }
          }
        });
        const timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Update program timed out"));
          }, 1e4);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const discountDeleteByXGetY = async (discount2) => {
    try {
      if (discount2) {
        const createPromise = await delete_discount_by_x_get_y({
          variables: {
            input: {
              discountId: discount2.id,
              storeId: shop.id
            }
          }
        });
        const timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Update program timed out"));
          }, 1e4);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const discountUpdate = async (discountId, status, asyncUsageCount) => {
    try {
      const createPromise = await updateDiscount({
        variables: {
          input: {
            storeId: shop.id,
            discountId,
            status,
            asyncUsageCount: asyncUsageCount.toString()
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
  const discountUpdateByXGetY = async (discountId, status, asyncUsageCount) => {
    try {
      const createPromise = await updateDiscountByXGetY({
        variables: {
          input: {
            storeId: shop.id,
            discountId,
            status,
            asyncUsageCount: asyncUsageCount.toString()
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
  const showDiscount = (discountId) => {
    console.log("Showing discount with ID:", discountId);
    navigate(`../../app/volume-discount/${functionId}/${discountId}`);
  };
  const showDiscountByXgetY = (id) => {
    console.log("Showing discount with ID:", id);
    navigate(`../../app/byXgetYdiscount/${id}`);
  };
  const openRemoveDiscountModal = (discount2) => {
    setActive(true);
    const findDiscount = discountList.find((node) => node.discountId === discount2.discountId);
    setDiscount(findDiscount);
    console.log("Removing discount with ID:", findDiscount);
  };
  const openRemoveDiscountByXgetYModal = (discount2) => {
    setActiveByXgetYModal(true);
    const findDiscount = filteredNodesByXGetY.find((node) => node.id === discount2.discountId);
    setDiscount(findDiscount);
    console.log("Removing discount with ID:", findDiscount);
  };
  const deleteDiscount = () => {
    setActive(false);
    console.log(discount);
    if (discount !== void 0) {
      const discountToDelete = {
        // @ts-ignore
        method: (discount == null ? void 0 : discount.discount.__typename) !== "DiscountCodeApp" ? DiscountMethod.Automatic : DiscountMethod.Code,
        // @ts-ignore
        discountId: discount == null ? void 0 : discount.discountId
      };
      submitForm({
        discountDelete: JSON.stringify(discountToDelete)
      }, {
        method: "post"
      });
      setCount(1);
      discountDelete(discount).then();
      setActiveToast(true);
    }
  };
  const deleteDiscountByXGetY = () => {
    setActiveByXgetYModal(false);
    console.log(discount);
    if (discount !== void 0) {
      const discountToDelete = {
        // @ts-ignore
        method: (discount == null ? void 0 : discount.discount.__typename) === "DiscountCodeBxgy" ? DiscountMethod.Code : DiscountMethod.Automatic,
        // @ts-ignore
        discountId: discount == null ? void 0 : discount.id
      };
      submitForm({
        discountDelete: JSON.stringify(discountToDelete)
      }, {
        method: "post"
      });
      setCount(1);
      discountDeleteByXGetY(discount).then();
      const discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.id);
      setDiscountDataByXGetY(discountDataUpdate);
      setActiveToast(true);
    }
  };
  const [popoverActiveDiscount, setPopoverActiveDiscount] = (0, import_react.useState)(false);
  const [popoverActiveStatus, setPopoverActiveStatus] = (0, import_react.useState)(false);
  const [popoverActiveMethod, setPopoverActiveMethod] = (0, import_react.useState)(false);
  const [popoverActiveStatusByXGetY, setPopoverActiveStatusByXGetY] = (0, import_react.useState)(false);
  const [popoverActiveMethodByXGetY, setPopoverActiveMethodByXGetY] = (0, import_react.useState)(false);
  const togglePopoverDiscount = (0, import_react.useCallback)(() => setPopoverActiveDiscount((popoverActive) => !popoverActive), []);
  const togglePopoverActiveStatus = (0, import_react.useCallback)(() => setPopoverActiveStatus((popoverActive) => !popoverActive), []);
  const togglePopoverActiveMethod = (0, import_react.useCallback)(() => setPopoverActiveMethod((popoverActive) => !popoverActive), []);
  const togglePopoverActiveStatusByXGetY = (0, import_react.useCallback)(() => setPopoverActiveStatusByXGetY((popoverActive) => !popoverActive), []);
  const togglePopoverActiveMethodByXGetY = (0, import_react.useCallback)(() => setPopoverActiveMethodByXGetY((popoverActive) => !popoverActive), []);
  const newDiscount = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: togglePopoverDiscount, variant: "primary", children: "New Discount" }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 571,
    columnNumber: 23
  }, this);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: togglePopoverActiveStatus, disclosure: true, children: "Status" }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 574,
    columnNumber: 21
  }, this);
  const activator2 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: togglePopoverActiveMethod, disclosure: true, children: "Method" }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 577,
    columnNumber: 22
  }, this);
  const activator3 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: togglePopoverActiveStatusByXGetY, disclosure: true, children: "Status" }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 580,
    columnNumber: 22
  }, this);
  const activator4 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: togglePopoverActiveMethodByXGetY, disclosure: true, children: "Method" }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 583,
    columnNumber: 22
  }, this);
  const handleAllDiscountApp = () => {
    setDiscountData(discountListDataBefore);
  };
  const handleAllDiscountAppByXGetY = () => {
    setDiscountDataByXGetY(discountListDataByXGetYBefore);
  };
  const handleDiscountAppActive = () => {
    const activeDiscounts = discountListDataBefore.filter((discount2) => discount2.status === "ACTIVE");
    if (activeDiscounts.length === 0) {
      setMessage("Discount not found");
      setActiveMessage(true);
    } else {
      setDiscountData(activeDiscounts);
    }
  };
  const handleDiscountAppActiveByXGetY = () => {
    const activeDiscountsByXGetY = discountListDataByXGetYBefore.filter((discount2) => discount2.status === "ACTIVE");
    if (activeDiscountsByXGetY.length === 0) {
      setMessage("Discount not found");
      setActiveMessage(true);
    } else {
      setDiscountDataByXGetY(activeDiscountsByXGetY);
    }
  };
  const handleDiscountAppExpired = () => {
    const expiredDiscounts = discountListDataBefore.filter((discount2) => discount2.status === "EXPIRED");
    if (expiredDiscounts.length === 0) {
      setMessage("Discount not found");
      setActiveMessage(true);
    } else {
      setDiscountData(expiredDiscounts);
    }
  };
  const handleDiscountAppExpiredByXGetY = () => {
    const expiredDiscountsByXGetY = discountListDataByXGetYBefore.filter((discount2) => discount2.status === "EXPIRED");
    if (expiredDiscountsByXGetY.length === 0) {
      setMessage("Discount not found");
      setActiveMessage(true);
    } else {
      setDiscountDataByXGetY(expiredDiscountsByXGetY);
    }
  };
  const handleDiscountAppCode = () => {
    const codeDiscounts = discountListDataBefore.filter((discount2) => discount2.method === "Code");
    setDiscountData(codeDiscounts);
  };
  const handleDiscountAppCodeByXGetY = () => {
    const codeDiscountsByXGetY = discountListDataByXGetYBefore.filter((discount2) => discount2.method === "Code");
    setDiscountDataByXGetY(codeDiscountsByXGetY);
  };
  const handleDiscountAppAutomatic = () => {
    const automaticDiscounts = discountListDataBefore.filter((discount2) => discount2.method === "Automatic");
    setDiscountData(automaticDiscounts);
  };
  const handleDiscountAppAutomaticByXGetY = () => {
    const automaticDiscountsByXGetY = discountListDataByXGetYBefore.filter((discount2) => discount2.method === "Automatic");
    setDiscountDataByXGetY(automaticDiscountsByXGetY);
  };
  const toastMarkup = activeMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { content: message, onDismiss: toggleActive, error: true }, void 0, false, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 644,
    columnNumber: 39
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Discount List" }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 646,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      position: "absolute",
      top: "20px",
      right: "20px",
      marginBottom: "15px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { active: popoverActiveDiscount, activator: newDiscount, autofocusTarget: "first-node", onClose: togglePopoverDiscount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionList, { actionRole: "menuitem", items: [{
      content: "Code or Automatic",
      onAction: () => navigate(`../../app/volume-discount/${functionId}/new`)
    }, {
      content: "By x Get y",
      onAction: () => navigate(`../../app/byXgetYdiscount/new`)
    }] }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 655,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 654,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 648,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginBottom: "20px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontWeight: "bold",
          fontSize: "20px"
        }, children: "Discount Code And Discount Automatic List" }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 670,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 667,
          columnNumber: 13
        }, this),
        DiscountLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { accessibilityLabel: "Spinner example", size: "large" }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 677,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: discountListData.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyDiscountState, { onAction: () => navigate(`../../app/volume-discount/${functionId}/new`) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 678,
          columnNumber: 50
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { padding: "0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            marginBottom: "5px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: handleAllDiscountApp, size: "medium", children: "All discount" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 686,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 683,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { active: popoverActiveStatus, activator, autofocusTarget: "first-node", onClose: togglePopoverActiveStatus, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionList, { actionRole: "menuitem", items: [{
              content: "Active",
              onAction: handleDiscountAppActive
            }, {
              content: "EXPIRED",
              onAction: handleDiscountAppExpired
            }] }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 694,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 693,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 690,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { active: popoverActiveMethod, activator: activator2, autofocusTarget: "first-node", onClose: togglePopoverActiveMethod, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionList, { actionRole: "menuitem", items: [{
              content: "Code",
              onAction: handleDiscountAppCode
            }, {
              content: "Automatic",
              onAction: handleDiscountAppAutomatic
            }] }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 707,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 706,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 703,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 679,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName: {
            singular: "Discount List",
            plural: "Discount List"
          }, itemCount: discountListData.length, headings: [{
            title: "Id"
          }, {
            title: "Title"
          }, {
            title: "Method"
          }, {
            title: "Start Date"
          }, {
            title: "Start Time"
          }, {
            title: "End Date"
          }, {
            title: "End Time"
          }, {
            title: "Status"
          }, {
            title: "Used"
          }, {
            title: "Action",
            hidden: true
          }, {
            title: "Action2",
            hidden: true
          }], selectable: false, children: discountListData.map((discount2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { id: discount2.discountId, position: discount2.discountId, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: getId(discount2.discountId) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 749,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.code !== "" ? discount2.code : discount2.title }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 752,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.method }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 755,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleDateString() }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 758,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleTimeString() }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 761,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleDateString() : "Not set" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 764,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleTimeString() : "Not set" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 767,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              color: setColorStatus(discount2.status)
            }, children: discount2.status }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 771,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 770,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.asyncUsageCount }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 777,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", onClick: () => showDiscount(getId(discount2.discountId)), children: "View discount" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 781,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 780,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", onClick: () => openRemoveDiscountModal(discount2), children: "Remove" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 785,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 784,
              columnNumber: 29
            }, this)
          ] }, index, true, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 748,
            columnNumber: 68
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 720,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 719,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 678,
          columnNumber: 148
        }, this) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 677,
          columnNumber: 96
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 666,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 665,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginBottom: "20px",
          marginTop: "30px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontWeight: "bold",
          fontSize: "20px"
        }, children: "Discount By X get Y List" }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 804,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 800,
          columnNumber: 13
        }, this),
        byXGetYLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { accessibilityLabel: "Spinner example", size: "large" }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 811,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: discountListDataByXGetY.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyDiscountState, { onAction: () => navigate(`../../app/byXgetYdiscount/new`) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 812,
          columnNumber: 57
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { padding: "0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            marginBottom: "5px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: handleAllDiscountAppByXGetY, size: "medium", children: "All discount" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 820,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 817,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { active: popoverActiveStatusByXGetY, activator: activator3, autofocusTarget: "first-node", onClose: togglePopoverActiveStatusByXGetY, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionList, { actionRole: "menuitem", items: [{
              content: "Active",
              onAction: handleDiscountAppActiveByXGetY
            }, {
              content: "EXPIRED",
              onAction: handleDiscountAppExpiredByXGetY
            }] }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 828,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 827,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 824,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginRight: "20px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { active: popoverActiveMethodByXGetY, activator: activator4, autofocusTarget: "first-node", onClose: togglePopoverActiveMethodByXGetY, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionList, { actionRole: "menuitem", items: [{
              content: "Code",
              onAction: handleDiscountAppCodeByXGetY
            }, {
              content: "Automatic",
              onAction: handleDiscountAppAutomaticByXGetY
            }] }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 841,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 840,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 837,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 813,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName: {
            singular: "Discount List By X Get Y",
            plural: "Discount List"
          }, itemCount: discountListDataByXGetY.length, headings: [{
            title: "Id"
          }, {
            title: "Title"
          }, {
            title: "Method"
          }, {
            title: "Start Date"
          }, {
            title: "Start Time"
          }, {
            title: "End Date"
          }, {
            title: "End Time"
          }, {
            title: "Status"
          }, {
            title: "Used"
          }, {
            title: "Action",
            hidden: true
          }, {
            title: "Action2",
            hidden: true
          }], selectable: false, children: discountListDataByXGetY.map((discount2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { id: discount2.discountId, position: discount2.discountId, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: getId(discount2.discountId) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 883,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.code !== "" ? discount2.code : discount2.title }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 886,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.method }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 889,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleDateString() }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 892,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleTimeString() }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 895,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleDateString() : "Not set" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 898,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleTimeString() : "Not set" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 901,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              color: setColorStatus(discount2.status)
            }, children: discount2.status }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 905,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 904,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: discount2.asyncUsageCount }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 911,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", onClick: () => showDiscountByXgetY(discount2.id), children: "View discount" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 915,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 914,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", onClick: () => openRemoveDiscountByXgetYModal(discount2), children: "Remove" }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 919,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 918,
              columnNumber: 29
            }, this)
          ] }, index, true, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 882,
            columnNumber: 75
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 853,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 852,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 812,
          columnNumber: 141
        }, this) }, void 0, false, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 811,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 799,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 798,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 664,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "500px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { open: active, onClose: () => setActive(false), title: "Are you sure to delete this discount ?", primaryAction: {
        content: "Delete",
        onAction: deleteDiscount
      }, secondaryActions: [{
        content: "Cancel",
        onAction: () => setActive(false)
      }] }, void 0, false, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 935,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { open: activeByXgetYModal, onClose: () => setActiveByXgetYModal(false), title: "Are you sure to delete this discount _222 ?", primaryAction: {
        content: "Delete",
        onAction: deleteDiscountByXGetY
      }, secondaryActions: [{
        content: "Cancel",
        onAction: () => setActiveByXgetYModal(false)
      }] }, void 0, false, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 943,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 934,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 931,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "250px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: [
      activeToast ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { content: "Discount Delete", onDismiss: () => setActiveToast(false) }, void 0, false, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 957,
        columnNumber: 26
      }, this) : null,
      toastMarkup
    ] }, void 0, true, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 956,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 953,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 645,
    columnNumber: 10
  }, this);
};
_s(DiscountList, "d4btON1hbR5dPrnZBxGPYUbUt0A=", false, function() {
  return [useLoaderData, useNavigate, useActionData, useSubmit, useMutation, useMutation, useMutation, useMutation, useQuery, useQuery];
});
_c2 = DiscountList;
var app_discountList_default = DiscountList;
var _c;
var _c2;
$RefreshReg$(_c, "EmptyDiscountState");
$RefreshReg$(_c2, "DiscountList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_discountList_default as default
};
//# sourceMappingURL=/build/routes/app.discountList-BQS3OBPR.js.map
