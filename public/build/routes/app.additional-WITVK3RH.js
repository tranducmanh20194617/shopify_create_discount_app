import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  BlockStack,
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
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
  useActionData
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

// app/routes/app.additional.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.additional.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.additional.jsx"
  );
  import.meta.hot.lastModified = "1712159969000";
}
function AdditionalPage() {
  _s();
  const actionData = useActionData();
  (0, import_react.useEffect)(() => {
    console.log(actionData);
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, false, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/app-bridge", target: "_blank", children: "App Bridge" }, void 0, false, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code, { children: "app/routes" }, void 0, false, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 77,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, false, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 78,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, false, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 79,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, false, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { gap: "extraTight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav", target: "_blank", children: "App nav best practices" }, void 0, false, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 92,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 91,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 90,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(AdditionalPage, "PRDjjkJaMryQ6wxX5PsbqQjqVos=", false, function() {
  return [useActionData];
});
_c = AdditionalPage;
function Code({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { as: "span", padding: "025", paddingInlineStart: "100", paddingInlineEnd: "100", background: "bg-surface-active", borderWidth: "100", borderColor: "border", borderRadius: "100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children }, void 0, false, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_c2 = Code;
var _c;
var _c2;
$RefreshReg$(_c, "AdditionalPage");
$RefreshReg$(_c2, "Code");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdditionalPage as default
};
//# sourceMappingURL=/build/routes/app.additional-WITVK3RH.js.map
