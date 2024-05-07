import {
  EmptyState,
  init_esm as init_esm2
} from "/build/_shared/chunk-X4VQBRVX.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  init_esm,
  useNavigate
} from "/build/_shared/chunk-OOXE47GJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TFSQ7PF6.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.label.jsx
init_remix_hmr();
init_esm2();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.label.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.label.jsx"
  );
  import.meta.hot.lastModified = "1713682676694.908";
}
var EmptyDiscountState = ({
  onAction
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { heading: "Create your first label", action: {
  content: "Create label",
  onAction
}, secondaryAction: {
  content: "Learn more",
  url: "https://help.shopify.com"
}, image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create labels by adding text or images to your product images to highlight key features" }, void 0, false, {
  fileName: "app/routes/app.label.jsx",
  lineNumber: 34,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/app.label.jsx",
  lineNumber: 27,
  columnNumber: 7
}, this);
_c = EmptyDiscountState;
var LabelList = () => {
  _s();
  const ListLabel = [123, 23];
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: ListLabel.length === 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyDiscountState, { onAction: () => navigate(`../../app/label/create`) }, void 0, false, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 42,
    columnNumber: 33
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "123" }, void 0, false, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 42,
    columnNumber: 110
  }, this) }, void 0, false, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(LabelList, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c2 = LabelList;
var app_label_default = LabelList;
var _c;
var _c2;
$RefreshReg$(_c, "EmptyDiscountState");
$RefreshReg$(_c2, "LabelList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_label_default as default
};
//# sourceMappingURL=/build/routes/app.label-RED56K5W.js.map
