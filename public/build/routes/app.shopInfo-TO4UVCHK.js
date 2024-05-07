import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import "/build/_shared/chunk-CB7CFRQ5.js";
import {
  BlockStack,
  Box,
  Card,
  TextField,
  init_esm as init_esm2
} from "/build/_shared/chunk-X4VQBRVX.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  init_esm,
  useLoaderData
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

// app/routes/app.shopInfo.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
var import_shopify = __toESM(require_shopify());
init_esm2();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.shopInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.shopInfo.jsx"
  );
  import.meta.hot.lastModified = "1714642677443.746";
}
function Index() {
  _s();
  const {
    shop
  } = useLoaderData();
  console.log(shop);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", autoComplete: "on", value: shop.name }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Email", autoComplete: "on", value: shop.email }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Access Token", autoComplete: "on", value: shop.accessToken }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Shop", autoComplete: "on", value: shop.shop }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Domain", autoComplete: "on", value: shop.domain }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Scope", autoComplete: "on", value: shop.scope }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "My shop domain", autoComplete: "on", value: shop.myshopify_domain }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Country", autoComplete: "on", value: shop.country_name }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Phone", autoComplete: "on", value: shop.phone }, void 0, false, {
      fileName: "app/routes/app.shopInfo.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 60,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 59,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(Index, "af7C+nCRLS/D4iuT/f70loG52ho=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app.shopInfo-TO4UVCHK.js.map
