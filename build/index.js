var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/app.labe.create.js
var require_app_labe_create = __commonJS({
  "app/routes/app.labe.create.js"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot");

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-07");

// app/graphql/graphql.server.js
var import_express = __toESM(require("express")), import_cors = __toESM(require("cors")), import_express_graphql = require("express-graphql");

// app/graphql/schema.server.js
var { buildSchema } = require("graphql"), schema = buildSchema(`
    type Store {
        id: String,
        name: String,
        email: String,
        shop: String,
        domain: String,
        scope: String,
        country: String,
        customer_email: String,
        myshopify_domain: String,
        plan_name: String,
        plan_display_name: String,
        shop_owner: String,
        iana_timezone: String,
        currency: String,
        address1: String,
        address2: String,
        phone: String,
        created_at: String,
        accessToken: String
    }
input CreateStoreInput {
        id: String,
        name: String,
        email: String,
        shop: String,
        domain: String,
        scope: String,
        country: String,
        customer_email: String,
        myshopify_domain: String,
        plan_name: String,
        plan_display_name: String,
        shop_owner: String,
        iana_timezone: String,
        currency: String,
        address1: String,
        address2: String,
        phone: String,
        created_at: String,
        accessToken: String
    }


type Discount {
    storeId:String,
    title:String,
    discountId:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
    asyncUsageCount:String,
    type:String,
    quantity_1:String,
    quantity_2:String,
    quantity_3:String,
    amount_1:String,
    amount_2:String,
    amount_3:String,
    appliesToEachItem_1:Boolean,
    appliesToEachItem_2:Boolean,
    appliesToEachItem_3:Boolean,
    percentage_1:String,
    percentage_2:String,
    percentage_3:String,
    product_1:String,
    product_2:String,
    product_3:String,
    }

type DiscountByXGetY {
    storeId:String,
    title:String,
        id:String,
    discountId:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
    asyncUsageCount:String,
   quantityPurchase:String,
   amountPurchase:String,
   quantityGet:String,
   percentageGet:String,
   productPurchase:String,
   productPurchaseId:String,
   productGet:String,
   productGetId:String,
}

input CreateDiscountInput {
    storeId:String,
    discountId:String,
    title:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
    asyncUsageCount:String,
    type:String,
     quantity_1:String,
     quantity_2:String,
     quantity_3:String,
    amount_1:String,
    amount_2:String,
    amount_3:String,
    appliesToEachItem_1:Boolean,
    appliesToEachItem_2:Boolean,
    appliesToEachItem_3:Boolean,
    percentage_1:String,
    percentage_2:String,
    percentage_3:String,
    product_1:String,
    product_2:String,
    product_3:String,

}
input CreateDiscountByXGetYInput {
    id:String,
    storeId:String,
    discountId:String,
    title:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
   asyncUsageCount:String,
   quantityPurchase:String,
   amountPurchase:String,
   quantityGet:String,
   percentageGet:String,
   productPurchase:String,
   productPurchaseId:String,
   productGet:String,
   productGetId:String,

}
input UpdateDiscountByXGetYInput {
    id:String,
    storeId:String,
    discountId:String,
    title:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
   asyncUsageCount:String,
   quantityPurchase:String,
   amountPurchase:String,
   quantityGet:String,
   percentageGet:String,
   productPurchase:String,
   productPurchaseId:String,
   productGet:String,
   productGetId:String,

}

input UpdateDiscountInput {
    storeId:String,
    discountId:String,
    title:String,
    code:String,
    method:String,
    combinesWith:String,
    usageLimit:String,
    appliesOncePerCustomer:Boolean,
    startsAt:String,
    endsAt:String,
    status:String,
    asyncUsageCount:String,
    type:String,
     quantity_1:String,
     quantity_2:String,
     quantity_3:String,
    amount_1:String,
    amount_2:String,
    amount_3:String,
    appliesToEachItem_1:Boolean,
    appliesToEachItem_2:Boolean,
    appliesToEachItem_3:Boolean,
    percentage_1:String,
    percentage_2:String,
    percentage_3:String,
    product_1:String,
    product_2:String,
    product_3:String,
}
input UpdateDiscountStatusAndUseCountInput {
    storeId:String,
    discountId:String,
    status:String,
    asyncUsageCount:String,
}

input UpdateDiscountByXGetYStatusAndUseCountInput {
    storeId:String,
    discountId:String,
    status:String,
    asyncUsageCount:String,
}

input DeleteDiscountInput {
    storeId:String,
    discountId:String,


}
input DeleteDiscountByXGetYInput {
    storeId:String,
    discountId:String,

}
input GetOneDiscountByXGetYInput {
   storeId:String,
   id:String
}


    type Query {
        hello: String
        getAllDiscount: [Discount]
        getAllDiscountByXGetY :[DiscountByXGetY]
        getOneDiscountByXGetY(input:GetOneDiscountByXGetYInput) :DiscountByXGetY

    }

    type Mutation {
        createStore(input:CreateStoreInput):Store

        createDiscount(input: CreateDiscountInput): Discount
        updateStatusAndUseCount(input: UpdateDiscountStatusAndUseCountInput): Discount
        updateDiscount(input: UpdateDiscountInput): Discount
        deleteDiscount(input: DeleteDiscountInput): Discount

        createDiscountByXGetY(input: CreateDiscountByXGetYInput): DiscountByXGetY
        updateDiscountByXGetY(input: UpdateDiscountByXGetYInput): DiscountByXGetY
        deleteDiscountByXGetY(input: DeleteDiscountByXGetYInput): DiscountByXGetY
        updateStatusAndUseCountByXGetY(input: UpdateDiscountByXGetYStatusAndUseCountInput): DiscountByXGetY




    }
`);

// app/models/discount.model.js
var import_mongoose = __toESM(require("mongoose")), Schema = import_mongoose.default.Schema, discountSchema = new Schema({
  storeId: {
    type: String
  },
  discountId: {
    type: String
  },
  code: {
    type: String
  },
  title: {
    type: String
  },
  method: {
    type: String,
    required: !0
  },
  combinesWith: {
    type: String
  },
  usageLimit: {
    type: String
  },
  appliesOncePerCustomer: {
    type: Boolean
  },
  startsAt: {
    type: String,
    required: !0
  },
  endsAt: {
    type: String
  },
  asyncUsageCount: {
    type: String
  },
  status: {
    type: String
  },
  type: {
    type: String
  },
  quantity_1: {
    type: String
  },
  quantity_2: {
    type: String
  },
  quantity_3: {
    type: String
  },
  amount_1: {
    type: String
  },
  amount_2: {
    type: String
  },
  amount_3: {
    type: String
  },
  appliesToEachItem_1: {
    type: Boolean
  },
  appliesToEachItem_2: {
    type: Boolean
  },
  appliesToEachItem_3: {
    type: Boolean
  },
  percentage_1: {
    type: String
  },
  percentage_2: {
    type: String
  },
  percentage_3: {
    type: String
  },
  product_1: {
    type: String
  },
  product_2: {
    type: String
  },
  product_3: {
    type: String
  }
}), discount_model_default = import_mongoose.default.model("Discount", discountSchema);

// app/models/byXGetYDiscount.model.js
var import_mongoose2 = __toESM(require("mongoose")), Schema2 = import_mongoose2.default.Schema, discountSchema2 = new Schema2({
  storeId: {
    type: String
  },
  id: {
    type: String
  },
  discountId: {
    type: String
  },
  code: {
    type: String
  },
  title: {
    type: String
  },
  method: {
    type: String,
    required: !0
  },
  combinesWith: {
    type: String
  },
  usageLimit: {
    type: String
  },
  appliesOncePerCustomer: {
    type: Boolean
  },
  startsAt: {
    type: String,
    required: !0
  },
  endsAt: {
    type: String
  },
  asyncUsageCount: {
    type: String
  },
  status: {
    type: String
  },
  quantityPurchase: {
    type: String
  },
  amountPurchase: {
    type: String
  },
  quantityGet: {
    type: String
  },
  percentageGet: {
    type: String
  },
  productPurchase: {
    type: String
  },
  productPurchaseId: {
    type: String
  },
  productGet: {
    type: String
  },
  productGetId: {
    type: String
  }
}), byXGetYDiscount_model_default = import_mongoose2.default.model("ByXGetYDiscount", discountSchema2);

// app/graphql/resolver.server.js
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));

// app/models/store.model.js
var import_mongoose3 = __toESM(require("mongoose")), Schema3 = import_mongoose3.default.Schema, storeSchema = new Schema3({
  id: {
    type: String,
    required: !0
  },
  name: {
    type: String,
    required: !0
  },
  email: {
    type: String,
    required: !0
  },
  shop: {
    type: String,
    required: !0
  },
  domain: {
    type: String,
    required: !0
  },
  scope: {
    type: String,
    required: !0
  },
  country: {
    type: String
  },
  customer_email: {
    type: String,
    required: !0
  },
  myshopify_domain: {
    type: String,
    required: !0
  },
  plan_name: {
    type: String,
    required: !0
  },
  plan_display_name: {
    type: String,
    required: !0
  },
  shop_owner: {
    type: String,
    required: !0
  },
  iana_timezone: {
    type: String,
    required: !0
  },
  currency: {
    type: String,
    required: !0
  },
  address1: {
    type: String,
    required: !0
  },
  address2: {
    type: String,
    required: !0
  },
  phone: {
    type: String,
    required: !0
  },
  created_at: {
    type: String,
    required: !0
  },
  accessToken: {
    type: String
  }
}), store_model_default = import_mongoose3.default.model("Store", storeSchema);

// app/graphql/resolver.server.js
var resolver = {
  hello: () => "Hello World",
  createStore: async ({ input }) => {
    let [store] = await Promise.all([store_model_default.create(input)]);
    return store;
  },
  getAllDiscount: async () => await discount_model_default.find({}),
  getAllDiscountByXGetY: async () => await byXGetYDiscount_model_default.find({}),
  getOneDiscountByXGetY: async ({ input }) => await byXGetYDiscount_model_default.findOne({
    id: input.id,
    storeId: input.storeId
  }),
  createDiscount: async ({ input }) => {
    let [discount] = await Promise.all([discount_model_default.create(input)]);
    return discount;
  },
  createDiscountByXGetY: async ({ input }) => {
    let [discount] = await Promise.all([byXGetYDiscount_model_default.create(input)]);
    return discount;
  },
  updateDiscount: async ({ input }) => discount_model_default.findOneAndUpdate({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    title: input.title,
    code: input.code,
    method: input.method,
    combinesWith: input.combinesWith,
    usageLimit: input.usageLimit,
    status: input.status,
    startsAt: input.startsAt,
    endsAt: input.endsAt,
    asyncUsageCount: input.asyncUsageCount,
    appliesOncePerCustomer: input.appliesOncePerCustomer,
    amount_1: input.amount_1,
    amount_2: input.amount_2,
    amount_3: input.amount_3,
    appliesToEachItem_1: input.appliesToEachItem_1,
    appliesToEachItem_2: input.appliesToEachItem_2,
    appliesToEachItem_3: input.appliesToEachItem_3,
    percentage_1: input.percentage_1,
    percentage_2: input.percentage_2,
    percentage_3: input.percentage_3,
    product_1: input.product_1,
    product_2: input.product_2,
    product_3: input.product_3,
    quantity_1: input.quantity_1,
    quantity_2: input.quantity_2,
    quantity_3: input.quantity_3,
    type: input.type
  }, {
    returnDocument: "after",
    new: !0
  }),
  updateDiscountByXGetY: async ({ input }) => byXGetYDiscount_model_default.findOneAndUpdate({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    title: input.title,
    code: input.code,
    method: input.method,
    combinesWith: input.combinesWith,
    usageLimit: input.usageLimit,
    status: input.status,
    startsAt: input.startsAt,
    endsAt: input.endsAt,
    asyncUsageCount: input.asyncUsageCount,
    appliesOncePerCustomer: input.appliesOncePerCustomer,
    quantityPurchase: input.quantityPurchase,
    amountPurchase: input.amountPurchase,
    quantityGet: input.quantityGet,
    percentageGet: input.percentageGet,
    productPurchase: input.productPurchase,
    productPurchaseId: input.productPurchaseId,
    productGet: input.productGet,
    productGetId: input.productGetId
  }, {
    returnDocument: "after",
    new: !0
  }),
  updateStatusAndUseCount: async ({ input }) => discount_model_default.findOneAndUpdate({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    status: input.status,
    asyncUsageCount: input.asyncUsageCount.toString()
  }, {
    returnDocument: "after",
    new: !0
  }),
  updateStatusAndUseCountByXGetY: async ({ input }) => byXGetYDiscount_model_default.findOneAndUpdate({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    status: input.status,
    asyncUsageCount: input.asyncUsageCount.toString()
  }, {
    returnDocument: "after",
    new: !0
  }),
  deleteDiscount: async ({ input }) => discount_model_default.findOneAndDelete({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    returnDocument: "after",
    new: !0
  }),
  deleteDiscountByXGetY: async ({ input }) => byXGetYDiscount_model_default.findOneAndDelete({
    discountId: input.discountId,
    storeId: input.storeId
  }, {
    returnDocument: "after",
    new: !0
  })
};

// app/graphql/graphql.server.js
function GraphQLServer() {
  let app = (0, import_express.default)();
  app.use((0, import_cors.default)()), app.use(import_express.default.json()), app.use("/graphql", (0, import_express_graphql.graphqlHTTP)({
    schema,
    rootValue: resolver,
    graphiql: !0
  })), app.listen(4e3, () => {
    console.log("Server is running on PORT 4000");
  });
}

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var import_mongoose4 = __toESM(require("mongoose")), _a, shopify2 = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: (_a = process.env.SCOPES) == null ? void 0 : _a.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
}), dbConnectionString = "mongodb+srv://manh20194617:c1xvU6kqymtfQIZ0@cluster0.ggio7lj.mongodb.net/gr3?retryWrites=true&w=majority&appName=Cluster0";
import_mongoose4.default.set("debug", !0);
import_mongoose4.default.set("debug", { color: !0 });
import_mongoose4.default.connect(dbConnectionString).then((result) => {
  console.log("Connect to mongodb successfully"), GraphQLServer();
}).catch((err) => {
  console.log("Error occured when connect to mongodb: ", err.message);
});
var shopify_server_default = shopify2;
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, unauthenticated = shopify2.unauthenticated, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.isbot)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_context = require("@apollo/client/link/context"), import_client2 = require("@apollo/client"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  let httpLink = (0, import_client2.createHttpLink)({
    uri: "http://localhost:4000/graphql"
  }), authLink = (0, import_context.setContext)((_, { headers: headers2 }) => {
    let token = localStorage.getItem("accessToken");
    return {
      headers: {
        ...headers2,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  }), client = new import_client2.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new import_client2.InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore"
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", href: "https://unpkg.com/@shopify/polaris@11.1.2/build/esm/styles.css" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_client2.ApolloProvider, { client, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 59,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/app.volume-discount.$functionId.$id.jsx
var app_volume_discount_functionId_id_exports = {};
__export(app_volume_discount_functionId_id_exports, {
  action: () => action,
  default: () => VolumeEdit,
  loader: () => loader
});
var import_react3 = require("react"), import_node3 = require("@remix-run/node"), import_react_form = require("@shopify/react-form"), import_react_i18n = require("@shopify/react-i18n"), import_react4 = require("@remix-run/react"), import_discount_app_components = require("@shopify/discount-app-components"), import_polaris2 = require("@shopify/polaris");

// app/components/NotFoundPage/NotFoundPage.jsx
var import_polaris = require("@shopify/polaris");

// app/components/NotFoundPage/empty-state.svg
var empty_state_default = "/build/_assets/empty-state-J7PKHSDM.svg";

// app/components/NotFoundPage/NotFoundPage.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function NotFoundPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.EmptyState,
    {
      heading: "There is no page at this address",
      image: empty_state_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Check the URL and try again, or use the search bar to find what you need." }, void 0, !1, {
        fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/const/Function.ts
var Function = () => ({
  validateNumber: (value) => isNaN(parseFloat(value)) || parseFloat(value) <= 0 ? 1 : 2,
  validatePercentage: (value) => isNaN(parseFloat(value)) || parseFloat(value) < 0 || parseFloat(value) >= 100 ? 1 : 2
});

// app/routes/app.volume-discount.$functionId.$id.jsx
var import_client4 = require("@apollo/client");

// app/graphql/mutation.js
var import_client3 = require("@apollo/client"), CREATE_STORE = import_client3.gql`
    mutation CreateStore($input : CreateStoreInput) {
        createStore(input : $input) {
           id,
        name,
        email,
        shop,
        domain,
        scope,
        country,
        customer_email,
        myshopify_domain,
        plan_name,
        plan_display_name,
        shop_owner,
        iana_timezone,
        currency,
        address1,
        address2,
        phone,
        created_at,
        accessToken
        }
    }
`, CREATE_DISCOUNT = import_client3.gql`
    mutation CreateDiscount($input : CreateDiscountInput) {
        createDiscount(input : $input) {
           discountId,
           code,
           method,
           startsAt,
           endsAt,
           status,
           asyncUsageCount
        }
    }
`, CREATE_DISCOUNT_BY_X_GET_Y = import_client3.gql`
    mutation CreateDiscountByXGetY($input : CreateDiscountByXGetYInput) {
        createDiscountByXGetY(input : $input) {
           discountId,
           code,
           method,
           startsAt,
           endsAt,
           status,
           asyncUsageCount
        }
    }
`, UPDATE_DISCOUNT = import_client3.gql`
    mutation UpdateDiscount($input : UpdateDiscountInput) {
        updateDiscount(input : $input) {
             code,
             method,
             startsAt,
             endsAt,
             status,
             asyncUsageCount
        }
    }
`, UPDATE_DISCOUNT_BY_X_GET_Y = import_client3.gql`
    mutation UpdateDiscountByXGetY($input : UpdateDiscountByXGetYInput) {
        updateDiscountByXGetY(input : $input) {
             code,
             method,
             startsAt,
             endsAt,
             status,
             asyncUsageCount
        }
    }
`, UPDATE_DISCOUNT_STATUS_AND_COUNT = import_client3.gql`
    mutation UpdateStatusAndUseCount($input : UpdateDiscountStatusAndUseCountInput) {
        updateStatusAndUseCount(input : $input) {
             status,
             asyncUsageCount
        }
    }
`, UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y = import_client3.gql`
    mutation UpdateStatusAndUseCountByXGetY($input : UpdateDiscountByXGetYStatusAndUseCountInput) {
        updateStatusAndUseCountByXGetY(input : $input) {
             status,
             asyncUsageCount
        }
    }
`, DELETE_DISCOUNT = import_client3.gql`
    mutation DeleteDiscount($input : DeleteDiscountInput) {
        deleteDiscount(input : $input) {
            discountId
        }
    }
`, DELETE_DISCOUNT_BY_X_GET_Y = import_client3.gql`
    mutation DeleteDiscountByXGetY($input : DeleteDiscountByXGetYInput) {
        deleteDiscountByXGetY(input : $input) {
            discountId
        }
    }
`;

// app/routes/app.volume-discount.$functionId.$id.jsx
var import_axios = __toESM(require("axios"));
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action = async ({ params, request }) => {
  var _a2, _b, _c, _d;
  let { id, functionId } = params, { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
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
  } = JSON.parse(formData.get("discountForm")), value1, discountTitle;
  method === import_discount_app_components.DiscountMethod.Automatic ? discountTitle = title : method === import_discount_app_components.DiscountMethod.Code && (discountTitle = code), value1 = JSON.stringify({
    countStrategy,
    discountCode: discountTitle,
    applyTo,
    quantity: configuration.quantity,
    quantity2: configuration.quantity2,
    quantity3: configuration.quantity3,
    fixedAmount: configuration.fixedAmount,
    fixedAmount2: configuration.fixedAmount2,
    fixedAmount3: configuration.fixedAmount3,
    percentage: configuration.percentage,
    percentage2: configuration.percentage2,
    percentage3: configuration.percentage3,
    products1,
    products2,
    products3,
    appliesForEachProduct: configuration.appliesToEachItem,
    appliesForEachProduct2: configuration.appliesToEachItem2,
    appliesForEachProduct3: configuration.appliesToEachItem3
  });
  let baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt)
  };
  if (method === import_discount_app_components.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer
    }, responseJson = await (await admin.graphql(
      `#graphql
          mutation UpdateCodeDiscount($id: ID!, $discount: DiscountCodeAppInput!) {
            discountUpdate: discountCodeAppUpdate(id: $id, codeAppDiscount: $discount) {
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
                  }
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
          id: `gid://shopify/DiscountCodeApp/${id}`,
          discount: {
            ...baseCodeDiscount,
            metafields: [
              {
                id: configuration.metafieldId,
                value: value1
              }
            ]
          }
        }
      }
    )).json(), errors = (_a2 = responseJson.data.discountUpdate) == null ? void 0 : _a2.userErrors, discountData = (_b = responseJson.data.discountUpdate) == null ? void 0 : _b.codeAppDiscount;
    return (0, import_node3.json)({ errors, value1, discountData, responseJson });
  } else {
    let responseJson = await (await admin.graphql(
      `#graphql
          mutation UpdateAutomaticDiscount($id: ID!, $discount: DiscountAutomaticAppInput!) {
            discountUpdate: discountAutomaticAppUpdate(id: $id, automaticAppDiscount: $discount) {
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
          id: `gid://shopify/DiscountAutomaticApp/${id}`,
          discount: {
            ...baseDiscount,
            metafields: [
              {
                id: configuration.metafieldId,
                value: value1
              }
            ]
          }
        }
      }
    )).json(), discountData = (_c = responseJson.data.discountUpdate) == null ? void 0 : _c.automaticAppDiscount, errors = (_d = responseJson.data.discountUpdate) == null ? void 0 : _d.userErrors;
    return (0, import_node3.json)({ errors, discountData, value1 });
  }
}, loader = async ({ params, request }) => {
  var _a2;
  let { id } = params, { admin } = await shopify_server_default.authenticate.admin(request), { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  ), responseJson = await (await admin.graphql(
    `#graphql
      query GetDiscount($id: ID!) {
        discountNode(id: $id) {
          id
          configurationField: metafield(
            namespace: "$app:volume-discount"
            key: "function-configuration"
          ) {
            id
            value
          }
          discount {
            __typename
            ... on DiscountAutomaticApp {
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
            }
            ... on DiscountCodeApp {
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
              codes(first: 1) {
                nodes {
                  code
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        id: `gid://shopify/DiscountNode/${id}`
      }
    }
  )).json();
  if (!responseJson.data.discountNode || !responseJson.data.discountNode.discount)
    return (0, import_node3.json)({ discount: null, shop: shopData });
  let method = responseJson.data.discountNode.discount.__typename === "DiscountCodeApp" ? import_discount_app_components.DiscountMethod.Code : import_discount_app_components.DiscountMethod.Automatic, {
    title,
    codes,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt
  } = responseJson.data.discountNode.discount, configuration = JSON.parse(
    responseJson.data.discountNode.configurationField.value
  ), discount = {
    title,
    method,
    code: ((_a2 = codes == null ? void 0 : codes.nodes[0]) == null ? void 0 : _a2.code) ?? "",
    combinesWith,
    usageLimit: usageLimit ?? null,
    appliesOncePerCustomer: appliesOncePerCustomer ?? !1,
    startsAt,
    endsAt,
    configuration: {
      ...configuration,
      metafieldId: responseJson.data.discountNode.configurationField.id
    }
  };
  return (0, import_node3.json)({ discount, shop: shopData });
}, EmptyProductSelected = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { textAlign: "center", maxHeight: "60vh" }, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "img",
    {
      style: { height: "60px", width: "60px" },
      src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      alt: "test"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 342,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { style: { fontWeight: "bold" }, children: "There are no products selected" }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 344,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Please choose product for this discount" }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 345,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
  lineNumber: 341,
  columnNumber: 3
}, this);
function VolumeEdit() {
  let {
    validateNumber,
    validatePercentage
  } = Function(), submitForm = (0, import_react4.useSubmit)(), actionData = (0, import_react4.useActionData)(), [selected, setSelected] = (0, import_react3.useState)(["allProduct"]), [isFirstButtonActive, setIsFirstButtonActive] = (0, import_react3.useState)(!0), [applyTo, setApplyTo] = (0, import_react3.useState)("all"), { discount, shop } = (0, import_react4.useLoaderData)(), navigation = (0, import_react4.useNavigation)(), navigate = (0, import_react4.useNavigate)(), [active, setActive] = (0, import_react3.useState)(!1), toggleActive = (0, import_react3.useCallback)(() => setActive((active2) => !active2), []), [message, setMessage] = (0, import_react3.useState)(""), [selectedVolume, setSelectedVolume] = (0, import_react3.useState)(["percentage"]), [selectedVolume2, setSelectedVolume2] = (0, import_react3.useState)(["percentage"]), [selectedVolume3, setSelectedVolume3] = (0, import_react3.useState)(["percentage"]), [formState, setFormState] = (0, import_react3.useState)([{}]), [formState2, setFormState2] = (0, import_react3.useState)([{}]), [formState3, setFormState3] = (0, import_react3.useState)([{}]), isLoading = navigation.state === "submitting", currencyCode = import_react_i18n.CurrencyCode.Cad, [check, setCheck] = (0, import_react3.useState)(0), [count, setCount] = (0, import_react3.useState)(0), [countDiscountCheck, setCountDiscountCheck] = (0, import_react3.useState)(0), [showVolume1, setShowVolume1] = (0, import_react3.useState)(!0), [percentageDiscount, setPercentageDiscount] = (0, import_react3.useState)(""), [amountDiscount, setAmountDiscount] = (0, import_react3.useState)(""), [selectedValueType, setSelectedValueType] = (0, import_react3.useState)(["max"]), [appliesToEachItem, setAppliesToEachItem] = (0, import_react3.useState)(!1), [showVolume2, setShowVolume2] = (0, import_react3.useState)(!1), [percentageDiscount2, setPercentageDiscount2] = (0, import_react3.useState)(""), [amountDiscount2, setAmountDiscount2] = (0, import_react3.useState)(""), [selectedValueType2, setSelectedValueType2] = (0, import_react3.useState)(["max"]), [appliesToEachItem2, setAppliesToEachItem2] = (0, import_react3.useState)(!1), [showVolume3, setShowVolume3] = (0, import_react3.useState)(!1), [percentageDiscount3, setPercentageDiscount3] = (0, import_react3.useState)(""), [amountDiscount3, setAmountDiscount3] = (0, import_react3.useState)(""), [selectedValueType3, setSelectedValueType3] = (0, import_react3.useState)(["max"]), [appliesToEachItem3, setAppliesToEachItem3] = (0, import_react3.useState)(!1), [discountStrategyCount, setDiscountStrategyCount] = (0, import_react3.useState)("3"), [update] = (0, import_client4.useMutation)(UPDATE_DISCOUNT), updateDiscount = async () => {
    var _a2;
    try {
      let value;
      actionData.value1 ? value = JSON.parse(actionData.value1) : value = {};
      let createPromise = await update({
        variables: {
          input: {
            storeId: shop.id,
            discountId: actionData.discountData.discountId,
            title: actionData.discountData.title,
            code: actionData.discountData.__typename === "DiscountCodeApp" ? ((_a2 = actionData.discountData.codes.nodes[0]) == null ? void 0 : _a2.code) ?? "" : "",
            method: actionData.discountData.__typename === "DiscountCodeApp" ? import_discount_app_components.DiscountMethod.Code : import_discount_app_components.DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.combinesWith),
            usageLimit: actionData.discountData.__typename === "DiscountCodeApp" && actionData.discountData.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: actionData.discountData.startsAt,
            endsAt: actionData.discountData.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.__typename === "DiscountCodeApp" ? actionData.discountData.appliesOncePerCustomer : !1,
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
      console.log(discount);
      let timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if ((0, import_react3.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && actionData.discountData && (updateDiscount().then(), navigate("../../app/discountList")), console.log(actionData == null ? void 0 : actionData.responseJson);
  }, [actionData]), (0, import_react3.useEffect)(() => {
    console.log(discount), setCountDiscountCheck(1), setDiscountStrategyCount(discount.configuration.countStrategy), setApplyTo(discount.configuration.applyTo), discount.configuration.applyTo === "choose" && setIsFirstButtonActive(!0), discount.configuration.fixedAmount > 0 ? (setShowVolume1(!0), console.log("sai 1"), setSelectedVolume(["Value"]), setAmountDiscount(`${discount.configuration.fixedAmount}`), discount.configuration.appliesForEachProduct === !0 ? (setSelectedValueType(["eachProduct"]), console.log("sai 2")) : (setSelectedValueType(["max"]), console.log("sai 3"))) : (setShowVolume1(!0), setSelectedVolume(["percentage"]), setPercentageDiscount(`${discount.configuration.percentage}`)), discount.configuration.products1 && discount.configuration.products1.length > 0 && discount.configuration.products1[0].productId ? (setFormState(discount.configuration.products1), setSelected(["chooseProduct"])) : console.log(1233), discount.configuration.fixedAmount2 > 0 ? (setShowVolume2(!0), console.log("sai 4"), setSelectedVolume2(["Value"]), setAmountDiscount2(`${discount.configuration.fixedAmount2}`), discount.configuration.appliesForEachProduct2 === !0 ? (setSelectedValueType2(["eachProduct"]), console.log("sai 5")) : (setSelectedValueType2(["max"]), console.log("sai 6"))) : (console.log("sai 7"), setShowVolume2(!0), setSelectedVolume2(["percentage"]), setPercentageDiscount2(`${discount.configuration.percentage2}`)), discount.configuration.products2 && discount.configuration.products2.length > 0 && discount.configuration.products2[0].productId ? setFormState2(discount.configuration.products2) : console.log(123), discount.configuration.fixedAmount3 > 0 ? (console.log(1234), setShowVolume3(!0), setSelectedVolume3(["Value"]), setAmountDiscount3(`${discount.configuration.fixedAmount3}`), discount.configuration.appliesForEachProduct3 === !0 ? setSelectedValueType3(["eachProduct"]) : setSelectedValueType3(["max"])) : (setShowVolume3(!0), setSelectedVolume3(["percentage"]), setPercentageDiscount3(`${discount.configuration.percentage3}`)), discount.configuration.products3 && discount.configuration.products3.length > 0 && discount.configuration.products3[0].productId && setFormState3(discount.configuration.products3);
  }, [discount]), (0, import_react3.useEffect)(() => {
    selectedVolume.includes("percentage") ? (setAmountDiscount(""), discount.configuration.percentage > 0 ? setPercentageDiscount(`${discount.configuration.percentage}`) : setPercentageDiscount("")) : (setPercentageDiscount(""), discount.configuration.fixedAmount > 0 ? setAmountDiscount(`${discount.configuration.fixedAmount}`) : setAmountDiscount(""));
  }, [selectedVolume]), (0, import_react3.useEffect)(() => {
    countDiscountCheck === 1 && (selectedVolume2.includes("percentage") ? (setAmountDiscount2(""), discount.configuration.percentage2 > 0 ? setPercentageDiscount(`${discount.configuration.percentage2}`) : setPercentageDiscount2("")) : (setPercentageDiscount2(""), discount.configuration.fixedAmount2 > 0 ? setAmountDiscount2(`${discount.configuration.fixedAmount2}`) : setAmountDiscount2("")));
  }, [selectedVolume2]), (0, import_react3.useEffect)(() => {
    selectedVolume3.includes("percentage") ? (setAmountDiscount3(""), discount.configuration.percentage3 > 0 ? setPercentageDiscount3(`${discount.configuration.percentage3}`) : setPercentageDiscount3("")) : (setPercentageDiscount3(""), discount.configuration.fixedAmount3 !== null ? setAmountDiscount3(`${discount.configuration.fixedAmount3}`) : setAmountDiscount3(""));
  }, [selectedVolume3]), (0, import_react3.useEffect)(() => {
    console.log(discountStrategyCount), discountStrategyCount === "1" ? (setShowVolume1(!0), setShowVolume2(!1), setShowVolume3(!1)) : discountStrategyCount === "2" ? (setShowVolume1(!0), setShowVolume2(!0), setShowVolume3(!1)) : discountStrategyCount === "3" && (setShowVolume1(!0), setShowVolume2(!0), setShowVolume3(!0));
  }, [discountStrategyCount]), (0, import_react3.useEffect)(() => {
    selectedValueType.includes("max") ? setAppliesToEachItem(!1) : setAppliesToEachItem(!0);
  }, [selectedValueType]), (0, import_react3.useEffect)(() => {
    selectedValueType2.includes("max") ? setAppliesToEachItem2(!1) : setAppliesToEachItem2(!0);
  }, [selectedValueType2]), (0, import_react3.useEffect)(() => {
    selectedValueType3.includes("max") ? setAppliesToEachItem3(!1) : setAppliesToEachItem3(!0);
  }, [selectedValueType3]), (0, import_react3.useEffect)(() => {
    selected.includes("chooseProduct") ? (setApplyTo("choose"), setDiscountStrategyCount(discount.configuration.countStrategy), setIsFirstButtonActive(!0), discount.configuration.fixedAmount > 0 ? (setSelectedVolume(["Value"]), setAmountDiscount(`${discount.configuration.fixedAmount}`), discount.configuration.appliesForEachProduct === !0 ? setSelectedValueType(["eachProduct"]) : setSelectedValueType(["max"])) : (setSelectedVolume(["percentage"]), setPercentageDiscount(`${discount.configuration.percentage}`)), discount.configuration.products1 && discount.configuration.products1.length > 0 && discount.configuration.products1[0].productId ? setFormState(discount.configuration.products1) : setFormState([{}]), discount.configuration.fixedAmount2 > 0 ? (setSelectedVolume2(["Value"]), setAmountDiscount2(`${discount.configuration.fixedAmount2}`), discount.configuration.appliesForEachProduct2 === !0 ? setSelectedValueType2(["eachProduct"]) : setSelectedValueType2(["max"])) : (setSelectedVolume2(["percentage"]), setPercentageDiscount2(`${discount.configuration.percentage2}`)), discount.configuration.products2 && discount.configuration.products2.length > 0 && discount.configuration.products2[0].productId ? setFormState2(discount.configuration.products2) : setFormState2([{}]), discount.configuration.fixedAmount3 > 0 ? (setSelectedVolume3(["Value"]), setAmountDiscount3(`${discount.configuration.fixedAmount3}`), discount.configuration.appliesForEachProduct3 === !0 ? setSelectedValueType3(["eachProduct"]) : setSelectedValueType3(["max"])) : (setSelectedVolume3(["percentage"]), setPercentageDiscount3(`${discount.configuration.percentage3}`)), discount.configuration.products3 && discount.configuration.products3.length > 0 && discount.configuration.products3[0].productId ? setFormState3(discount.configuration.products3) : setFormState3([{}])) : selected.includes("allProduct") && (console.log("sai o day"), setApplyTo("all"), setDiscountStrategyCount("1"), setFormState([{}]), setFormState2([{}]), setFormState3([{}]), setAppliesToEachItem2(!1), setAmountDiscount2(""), setPercentageDiscount2(""), setSelectedValueType2(["max"]), setSelectedVolume2(["percentage"]), setIsFirstButtonActive(!1), setAppliesToEachItem3(!1), setAmountDiscount3(""), setPercentageDiscount3(""), setSelectedValueType3(["max"]), setSelectedVolume3(["percentage"])), console.log(selected), console.log(countDiscountCheck);
  }, [selected]), (0, import_react3.useEffect)(() => {
    !showVolume2 && discountStrategyCount === "1" ? (setAppliesToEachItem2(!1), setAmountDiscount2(""), setPercentageDiscount2(""), setSelectedValueType2(["max"]), setSelectedVolume2(["percentage"]), setFormState2([{}])) : (discount.configuration.fixedAmount2 > 0 ? (setSelectedVolume2(["Value"]), setAmountDiscount2(`${discount.configuration.fixedAmount2}`), discount.configuration.appliesForEachProduct2 === !0 ? setSelectedValueType2(["eachProduct"]) : setSelectedValueType2(["max"])) : (setSelectedVolume2(["percentage"]), setPercentageDiscount2(`${discount.configuration.percentage2}`)), discount.configuration.products2 && discount.configuration.products2.length > 0 && discount.configuration.products2[0].productId && setFormState2(discount.configuration.products2));
  }, [showVolume2, discountStrategyCount]), (0, import_react3.useEffect)(() => {
    !showVolume3 && discountStrategyCount !== "3" ? (setAppliesToEachItem3(!1), setAmountDiscount3(""), setPercentageDiscount3(""), setSelectedValueType3(["max"]), setSelectedVolume3(["percentage"]), setFormState3([{}])) : (discount.configuration.fixedAmount3 > 0 ? (setSelectedVolume3(["Value"]), setAmountDiscount3(`${discount.configuration.fixedAmount3}`), discount.configuration.appliesForEachProduct3 === !0 ? setSelectedValueType3(["eachProduct"]) : setSelectedValueType3(["max"])) : (setSelectedVolume3(["percentage"]), setPercentageDiscount3(`${discount.configuration.percentage3}`)), discount.configuration.products3 && discount.configuration.products3.length > 0 && discount.configuration.products3[0].productId && setFormState3(discount.configuration.products3));
  }, [showVolume3, discountStrategyCount]), (0, import_react3.useEffect)(() => {
    check === 9 ? (setMessage("There are duplicate products in Volume or Volume 3"), setActive(!0)) : check === 10 ? (setMessage("There are duplicate products in Volume 1 or Volume 3"), setActive(!0)) : check === 11 && (setMessage("There are duplicate products in Volume 1 or Volume 2"), setActive(!0)), count === 1 && (check === 1 ? (setMessage("Discount code cannot be empty"), setActive(!0)) : check === 2 ? (setMessage("Invalid Minimum quantity"), setActive(!0)) : check === 3 ? (setMessage("Invalid discount percentage"), setActive(!0)) : check === 4 ? (setMessage("Invalid discount amount"), setActive(!0)) : check === 5 ? (setMessage("Save Discount Success"), setActive(!0)) : check === 6 ? (setMessage("Product Volume 1 can not be empty"), setActive(!0)) : (check === 7 || check === 8) && (setMessage("Product Volume 2 can not be empty"), setActive(!0)), setCount(0));
  }, [check, count]), !discount)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NotFoundPage, {}, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 863,
      columnNumber: 12
    }, this);
  let handleChangeApplies = (value) => {
    setSelected(value), console.log(value);
  }, handleChoiceValueTypeChange = (0, import_react3.useCallback)(
    (value) => {
      setSelectedValueType(value);
    },
    []
  ), handleChoiceValueTypeChange2 = (0, import_react3.useCallback)(
    (value) => setSelectedValueType2(value),
    []
  ), handleChoiceValueTypeChange3 = (0, import_react3.useCallback)(
    (value) => setSelectedValueType3(value),
    []
  ), handleDiscountPercentageChange = (0, import_react3.useCallback)(
    (newValue) => {
      setPercentageDiscount(newValue);
    },
    []
  ), handleDiscountPercentageChange2 = (0, import_react3.useCallback)(
    (newValue) => {
      setPercentageDiscount2(newValue);
    },
    []
  ), handleDiscountPercentageChange3 = (0, import_react3.useCallback)(
    (newValue) => {
      setPercentageDiscount3(newValue);
    },
    []
  ), handleDiscountAmountChange = (0, import_react3.useCallback)(
    (newValue) => {
      setAmountDiscount(newValue);
    },
    []
  ), handleDiscountAmountChange2 = (0, import_react3.useCallback)(
    (newValue) => {
      setAmountDiscount2(newValue);
    },
    []
  ), handleDiscountAmountChange3 = (0, import_react3.useCallback)(
    (newValue) => {
      setAmountDiscount3(newValue);
    },
    []
  ), handleChangeVolume = (value) => {
    setSelectedVolume(value);
  }, handleChangeVolume2 = (value) => {
    setSelectedVolume2(value);
  }, handleChangeVolume3 = (value) => {
    setSelectedVolume3(value);
  }, handleSelectDiscountStrategyCountChange = (0, import_react3.useCallback)(
    (value) => {
      setDiscountStrategyCount(value), setCountDiscountCheck(0);
    },
    []
  );
  async function selectProduct() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState2 = formState2.some(
          (existingProduct) => existingProduct.productVariantId === newProduct.productVariantId
        ), isDuplicateInFormState3 = formState3.some(
          (existingProduct) => existingProduct.productVariantId === newProduct.productVariantId
        );
        return isDuplicateInFormState2 || isDuplicateInFormState3;
      }) ? (setCheck(9), console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState2 ho\u1EB7c formState3")) : setFormState(flattenedVariants);
    }
  }
  async function selectProduct2() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId), isDuplicateInFormState3 = formState3.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState || isDuplicateInFormState3;
      }) ? (setCheck(10), console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState3")) : setFormState2(flattenedVariants);
    }
  }
  async function selectProduct3() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState1 = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId), isDuplicateInFormState2 = formState2.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState1 || isDuplicateInFormState2;
      }) ? (setCheck(11), console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState2")) : setFormState3(flattenedVariants);
    }
  }
  let removeItemFromFormState = (productVariantId) => {
    let updatedFormState = formState.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState(updatedFormState.length > 0 ? updatedFormState : [{}]);
  }, removeItemFromFormState2 = (productVariantId) => {
    let updatedFormState2 = formState2.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState2(updatedFormState2.length > 0 ? updatedFormState2 : [{}]);
  }, removeItemFromFormState3 = (productVariantId) => {
    let updatedFormState3 = formState3.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState3(updatedFormState3.length > 0 ? updatedFormState3 : [{}]);
  }, renderChildren = (0, import_react3.useCallback)(
    (isSelected) => isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.ChoiceList,
      {
        title: "",
        choices: [
          { label: "Max Discount amount", value: "max" },
          { label: "Discount for each product", value: "eachProduct" }
        ],
        selected: selectedValueType,
        onChange: handleChoiceValueTypeChange
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
        lineNumber: 1108,
        columnNumber: 9
      },
      this
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType]
  ), choiceWithValueRenderChildren2 = {
    label: "Value",
    value: "Value",
    renderChildren: (0, import_react3.useCallback)(
      (isSelected2) => isSelected2 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_polaris2.ChoiceList,
        {
          title: "",
          choices: [
            { label: "Max Discount amount", value: "max" },
            { label: "Discount for each product", value: "eachProduct" }
          ],
          selected: selectedValueType2,
          onChange: handleChoiceValueTypeChange2
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
          lineNumber: 1126,
          columnNumber: 9
        },
        this
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedValueType2]
    )
  }, choiceWithValueRenderChildren3 = {
    label: "Value",
    value: "Value",
    renderChildren: (0, import_react3.useCallback)(
      (isSelected3) => isSelected3 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_polaris2.ChoiceList,
        {
          title: "",
          choices: [
            { label: "Max Discount amount", value: "max" },
            { label: "Discount for each product", value: "eachProduct" }
          ],
          selected: selectedValueType3,
          onChange: handleChoiceValueTypeChange3
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
          lineNumber: 1149,
          columnNumber: 9
        },
        this
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedValueType3]
    )
  }, options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" }
  ], { metafieldId } = discount.configuration, {
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = (0, import_react_form.useForm)({
    fields: {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      discountTitle: (0, import_react_form.useField)(discount.title),
      discountMethod: (0, import_react_form.useField)(discount.method),
      discountCode: (0, import_react_form.useField)(discount.code),
      combinesWith: (0, import_react_form.useField)(discount.combinesWith),
      requirementType: (0, import_react_form.useField)(import_discount_app_components.RequirementType.None),
      requirementSubtotal: (0, import_react_form.useField)("0"),
      requirementQuantity: (0, import_react_form.useField)("0"),
      usageLimit: (0, import_react_form.useField)(discount.usageLimit),
      appliesOncePerCustomer: (0, import_react_form.useField)(discount.appliesOncePerCustomer),
      startDate: (0, import_react_form.useField)(discount.startsAt),
      endDate: (0, import_react_form.useField)(discount.endsAt),
      configuration: {
        quantity: (0, import_react_form.useField)(discount.configuration.quantity),
        percentage: (0, import_react_form.useField)(discount.configuration.percentage),
        fixedAmount: (0, import_react_form.useField)(discount.configuration.fixedAmount),
        quantity2: (0, import_react_form.useField)(discount.configuration.quantity2),
        percentage2: (0, import_react_form.useField)(discount.configuration.percentage2),
        fixedAmount2: (0, import_react_form.useField)(discount.configuration.fixedAmount2),
        quantity3: (0, import_react_form.useField)(discount.configuration.quantity3),
        percentage3: (0, import_react_form.useField)(discount.configuration.percentage3),
        fixedAmount3: (0, import_react_form.useField)(discount.configuration.fixedAmount3)
      },
      products1: [{}],
      products2: [{}],
      products3: [{}],
      countStrategy: (0, import_react_form.useField)("1"),
      applyTo: (0, import_react_form.useField)("")
    },
    onSubmit: async (form) => {
      setCount(1);
      let discount2;
      return discount2 = {
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
          metafieldId,
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
      }, discount2.code === "" && discount2.title === "" ? setCheck(1) : validateNumber(discount2.configuration.quantity) === 1 || validateNumber(discount2.configuration.quantity2) === 1 || validateNumber(discount2.configuration.quantity3) === 1 ? setCheck(2) : showVolume1 && showVolume2 === !1 && showVolume3 === !1 ? validatePercentage(discount2.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 1")) : validateNumber(discount2.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 2")) : discount2.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 15")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount2) }, { method: "post" })) : showVolume2 && showVolume3 === !1 ? validatePercentage(discount2.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 4")) : validatePercentage(discount2.configuration.percentage2) === 1 && selectedVolume2.includes("percentage") ? (setCheck(3), console.log("sai 5")) : validateNumber(discount2.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 6")) : validateNumber(discount2.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value") ? (setCheck(4), console.log("sai 7")) : discount2.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 16")) : discount2.products2.length <= 0 && selected.includes("chooseProduct") ? (setCheck(7), console.log("sai 17")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount2) }, { method: "post" })) : showVolume2 && showVolume3 ? validatePercentage(discount2.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 9")) : validatePercentage(discount2.configuration.percentage2) === 1 && selectedVolume2.includes("percentage") ? (setCheck(3), console.log("sai 10")) : validatePercentage(discount2.configuration.percentage3) === 1 && selectedVolume3.includes("percentage") ? (setCheck(3), console.log("sai 11")) : validateNumber(discount2.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 12")) : validateNumber(discount2.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value") ? (setCheck(4), console.log("sai 13")) : validatePercentage(discount2.configuration.fixedAmount3) === 1 && selectedVolume3.includes("Value") ? (setCheck(3), console.log("sai 14")) : discount2.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 18")) : discount2.products2.length <= 0 && selected.includes("chooseProduct") ? (setCheck(7), console.log("sai 19")) : discount2.products3.length <= 0 && selected.includes("chooseProduct") ? (setCheck(8), console.log("sai 20")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount2) }, { method: "post" })) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount2) }, { method: "post" })), console.log(discount2), { status: "success" };
    }
  }), toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Toast, { content: message, onDismiss: toggleActive, error: check !== 5 }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 1359,
    columnNumber: 5
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_polaris2.Page,
    {
      title: "Create volume discount",
      backAction: {
        content: "Return",
        onAction: () => navigate("../../app/discountList")
      },
      primaryAction: {
        content: "Save",
        onAction: submit,
        loading: isLoading
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { align: "space-around", gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.MethodCard,
              {
                title: "Volume",
                discountTitle,
                discountClass: import_discount_app_components.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1382,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris2.ChoiceList,
              {
                title: "Apply to",
                choices: [
                  { label: "Apply on all Product", value: "allProduct" },
                  { label: " Choose Product", value: "chooseProduct" }
                ],
                selected,
                onChange: handleChangeApplies
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1392,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1391,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1390,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1389,
              columnNumber: 17
            }, this),
            isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris2.Select,
              {
                label: "Discount Strategy Count",
                options,
                onChange: handleSelectDiscountStrategyCountChange,
                value: discountStrategyCount
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1409,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1408,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1407,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1406,
              columnNumber: 19
            }, this) : null,
            showVolume1 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "headingMd", as: "h2", children: "Volume 1" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1424,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1427,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      { label: "Value", value: "Value", renderChildren }
                    ],
                    selected: selectedVolume,
                    onChange: handleChangeVolume
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1432,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount,
                    onChange: handleDiscountPercentageChange,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1442,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount,
                    onChange: handleDiscountAmountChange,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1451,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1423,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1462,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1461,
                columnNumber: 25
              }, this) : null,
              formState[0].productId && isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_polaris2.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1472,
                        columnNumber: 43
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1489,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1492,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1482,
                        columnNumber: 31
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1468,
                  columnNumber: 25
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1422,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1421,
              columnNumber: 19
            }, this),
            showVolume2 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "headingMd", as: "h2", children: "Volume 2" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1507,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity2
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1510,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      choiceWithValueRenderChildren2
                      // Sử dụng đối tượng Choice mới ở đây
                    ],
                    selected: selectedVolume2,
                    onChange: handleChangeVolume2
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1515,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume2.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount2,
                    onChange: handleDiscountPercentageChange2,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1525,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume2.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount2,
                    onChange: handleDiscountAmountChange2,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1534,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1506,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct2, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1545,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1544,
                columnNumber: 25
              }, this) : null,
              formState2[0].productId && isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_polaris2.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState2,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1555,
                        columnNumber: 43
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState2(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1572,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1575,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1565,
                        columnNumber: 31
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1551,
                  columnNumber: 26
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1505,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1504,
              columnNumber: 19
            }, this),
            showVolume3 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "headingMd", as: "h2", children: "Volume 3" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1589,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity3
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1592,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      choiceWithValueRenderChildren3
                      // Sử dụng đối tượng Choice mới ở đây
                    ],
                    selected: selectedVolume3,
                    onChange: handleChangeVolume3
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1597,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume3.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount3,
                    onChange: handleDiscountPercentageChange3,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1607,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume3.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_polaris2.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount3,
                    onChange: handleDiscountAmountChange3,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                    lineNumber: 1616,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1588,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct3, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1626,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1625,
                columnNumber: 46
              }, this) : null,
              formState3[0].productId && isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_polaris2.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState3,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1635,
                        columnNumber: 41
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState3(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      import_polaris2.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1652,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                            lineNumber: 1655,
                            columnNumber: 31
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                        lineNumber: 1645,
                        columnNumber: 29
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 1631,
                  columnNumber: 74
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1587,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1586,
              columnNumber: 19
            }, this),
            discountMethod.value === import_discount_app_components.DiscountMethod.Code && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1667,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1673,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "GMT+7"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 1678,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 1381,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 1380,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 1379,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_discount_app_components.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "Volume",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components.DiscountStatus.Scheduled,
                usageCount: 0
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              customerEligibility: {
                eligibility: import_discount_app_components.Eligibility.Everyone
              },
              usageLimits: {
                oncePerCustomer: appliesOncePerCustomer.value,
                totalUsageLimit: usageLimit.value
              },
              activeDates: {
                startDate: startDate.value,
                endDate: endDate.value
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1687,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 1686,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris2.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Discard",
                  onAction: () => navigate("../../app/discountList")
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 1721,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 1720,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
          lineNumber: 1378,
          columnNumber: 9
        }, this),
        toastMarkup
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 1365,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 1364,
    columnNumber: 5
  }, this);
}

// app/routes/app.volume-discount.$functionId.new.jsx
var app_volume_discount_functionId_new_exports = {};
__export(app_volume_discount_functionId_new_exports, {
  action: () => action2,
  default: () => CreateDiscount,
  loader: () => loader2
});
var import_react5 = require("react"), import_node4 = require("@remix-run/node"), import_react_form2 = require("@shopify/react-form"), import_client6 = require("@apollo/client"), import_react_i18n2 = require("@shopify/react-i18n"), import_react6 = require("@remix-run/react"), import_discount_app_components2 = require("@shopify/discount-app-components"), import_polaris3 = require("@shopify/polaris");

// app/graphql/query.js
var import_client5 = require("@apollo/client"), HELLO_QUERY = import_client5.gql`
    query hello {
        hello
    }
`, GET_ALL_DISCOUNT = import_client5.gql`
  query GetAllDiscount {
    getAllDiscount {
    title,
    discountId,
    code,
    method,
    startsAt,
    endsAt,
    status,
    asyncUsageCount
    }
  }
`, GET_ALL_DISCOUNT_BY_X_GET_Y = import_client5.gql`
  query GetAllDiscountByXGetY {
    getAllDiscountByXGetY {
    title,
    discountId,
    code,
    method,
    startsAt,
    endsAt,
    status,
    asyncUsageCount,
       id,
    }
  }
`, GET_ONB_DISCOUNT_BY_X_GET_Y = import_client5.gql`
  query GetOneDiscountByXGetY($input : GetOneDiscountByXGetYInput) {
    getOneDiscountByXGetY(input: $input) {
    title,
    id,
    discountId,
    code,
    method,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    quantityPurchase,
    amountPurchase,
    quantityGet,
    percentageGet,
    productPurchase,
    productPurchaseId,
    productGet,
    productGetId,

    }
  }
`;

// app/routes/app.volume-discount.$functionId.new.jsx
var import_axios2 = __toESM(require("axios"));
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), EmptyProductSelected2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { textAlign: "center", maxHeight: "60vh" }, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "img",
    {
      style: { height: "60px", width: "60px" },
      src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      alt: "test"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { fontWeight: "bold" }, children: "There are no products selected" }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Please choose product for this discount" }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
  lineNumber: 44,
  columnNumber: 3
}, this), action2 = async ({ params, request }) => {
  var _a2, _b, _c, _d;
  let { functionId } = params, { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
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
  } = JSON.parse(formData.get("discountForm")), value1, discountTitle;
  method === import_discount_app_components2.DiscountMethod.Automatic ? discountTitle = title : method === import_discount_app_components2.DiscountMethod.Code && (discountTitle = code), value1 = JSON.stringify({
    countStrategy,
    discountCode: discountTitle,
    applyTo,
    quantity: configuration.quantity,
    quantity2: configuration.quantity2,
    quantity3: configuration.quantity3,
    fixedAmount: configuration.fixedAmount,
    fixedAmount2: configuration.fixedAmount2,
    fixedAmount3: configuration.fixedAmount3,
    percentage: configuration.percentage,
    percentage2: configuration.percentage2,
    percentage3: configuration.percentage3,
    products1,
    products2,
    products3,
    appliesForEachProduct: configuration.appliesToEachItem,
    appliesForEachProduct2: configuration.appliesToEachItem2,
    appliesForEachProduct3: configuration.appliesToEachItem3
  });
  let baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt)
  };
  if (method === import_discount_app_components2.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer
    }, responseJson = await (await admin.graphql(
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
                value: value1
              }
            ]
          }
        }
      }
    )).json(), errors = (_a2 = responseJson.data.discountCreate) == null ? void 0 : _a2.userErrors, discountData = (_b = responseJson.data.discountCreate) == null ? void 0 : _b.codeAppDiscount;
    return (0, import_node4.json)({ errors, discountData, responseJson, value1 });
  } else {
    let responseJson = await (await admin.graphql(
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
                value: value1
              }
            ]
          }
        }
      }
    )).json(), errors = (_c = responseJson.data.discountCreate) == null ? void 0 : _c.userErrors, discountData = (_d = responseJson.data.discountCreate) == null ? void 0 : _d.automaticAppDiscount;
    return (0, import_node4.json)({ errors, responseJson, value1, discountData });
  }
};
async function loader2({ request }) {
  let { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios2.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  );
  return (0, import_node4.json)({
    shop: shopData
  });
}
function CreateDiscount() {
  let {
    validateNumber,
    validatePercentage
  } = Function(), { shop } = (0, import_react6.useLoaderData)(), [formState, setFormState] = (0, import_react5.useState)([{}]), [formState2, setFormState2] = (0, import_react5.useState)([{}]), [formState3, setFormState3] = (0, import_react5.useState)([{}]), [isFirstButtonActive, setIsFirstButtonActive] = (0, import_react5.useState)(!0), [check, setCheck] = (0, import_react5.useState)(0), [count, setCount] = (0, import_react5.useState)(0), [selected, setSelected] = (0, import_react5.useState)(["allProduct"]), [applyTo, setApplyTo] = (0, import_react5.useState)("all"), [selectedVolume, setSelectedVolume] = (0, import_react5.useState)(["percentage"]), [selectedVolume2, setSelectedVolume2] = (0, import_react5.useState)(["percentage"]), [selectedVolume3, setSelectedVolume3] = (0, import_react5.useState)(["percentage"]), submitForm = (0, import_react6.useSubmit)(), actionData = (0, import_react6.useActionData)(), navigation = (0, import_react6.useNavigation)(), today = (0, import_react5.useMemo)(() => /* @__PURE__ */ new Date(), []), isLoading = navigation.state === "submitting", currencyCode = import_react_i18n2.CurrencyCode.Cad, navigate = (0, import_react6.useNavigate)(), [active, setActive] = (0, import_react5.useState)(!1), toggleActive = (0, import_react5.useCallback)(() => setActive((active2) => !active2), []), [message, setMessage] = (0, import_react5.useState)(""), [showVolume1, setShowVolume1] = (0, import_react5.useState)(!0), [percentageDiscount, setPercentageDiscount] = (0, import_react5.useState)(""), [amountDiscount, setAmountDiscount] = (0, import_react5.useState)(""), [selectedValueType, setSelectedValueType] = (0, import_react5.useState)(["max"]), [appliesToEachItem, setAppliesToEachItem] = (0, import_react5.useState)(!1), [showVolume2, setShowVolume2] = (0, import_react5.useState)(!1), [percentageDiscount2, setPercentageDiscount2] = (0, import_react5.useState)(""), [amountDiscount2, setAmountDiscount2] = (0, import_react5.useState)(""), [selectedValueType2, setSelectedValueType2] = (0, import_react5.useState)(["max"]), [appliesToEachItem2, setAppliesToEachItem2] = (0, import_react5.useState)(!1), [showVolume3, setShowVolume3] = (0, import_react5.useState)(!1), [percentageDiscount3, setPercentageDiscount3] = (0, import_react5.useState)(""), [amountDiscount3, setAmountDiscount3] = (0, import_react5.useState)(""), [selectedValueType3, setSelectedValueType3] = (0, import_react5.useState)(["max"]), [appliesToEachItem3, setAppliesToEachItem3] = (0, import_react5.useState)(!1), [discountStrategyCount, setDiscountStrategyCount] = (0, import_react5.useState)("1"), { loading: DiscountLoading, data: DiscountsData } = (0, import_client6.useQuery)(GET_ALL_DISCOUNT), [createDiscount] = (0, import_client6.useMutation)(CREATE_DISCOUNT), addDiscount = async () => {
    var _a2;
    try {
      let value;
      actionData.value1 ? value = JSON.parse(actionData.value1) : value = {};
      let createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            discountId: actionData.discountData.discountId,
            title: actionData.discountData.title,
            code: actionData.discountData.__typename === "DiscountCodeApp" ? ((_a2 = actionData.discountData.codes.nodes[0]) == null ? void 0 : _a2.code) ?? "" : "",
            method: actionData.discountData.__typename === "DiscountCodeApp" ? import_discount_app_components2.DiscountMethod.Code : import_discount_app_components2.DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.combinesWith),
            usageLimit: actionData.discountData.__typename === "DiscountCodeApp" && actionData.discountData.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: actionData.discountData.startsAt,
            endsAt: actionData.discountData.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.__typename === "DiscountCodeApp" ? actionData.discountData.appliesOncePerCustomer : !1,
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
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  (0, import_react5.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && actionData.discountData && (addDiscount().then(), navigate("../../app/discountList")), console.log(actionData == null ? void 0 : actionData.responseJson);
  }, [actionData]), (0, import_react5.useEffect)(() => {
    check === 9 ? (setMessage("There are duplicate products in Volume or Volume 3"), setActive(!0)) : check === 10 ? (setMessage("There are duplicate products in Volume 1 or Volume 3"), setActive(!0)) : check === 11 && (setMessage("There are duplicate products in Volume 1 or Volume 2"), setActive(!0)), count === 1 && (check === 1 ? (setMessage("Discount code cannot be empty"), setActive(!0)) : check === 2 ? (setMessage("Invalid Minimum quantity"), setActive(!0)) : check === 3 ? (setMessage("Invalid discount percentage"), setActive(!0)) : check === 4 ? (setMessage("Invalid discount amount"), setActive(!0)) : check === 5 ? (setMessage("Create Discount Success"), setActive(!0)) : check === 6 ? (setMessage("Product Volume 1 can not be empty"), setActive(!0)) : check === 7 || check === 8 ? (setMessage("Product Volume 2 can not be empty"), setActive(!0)) : check === 15 && (setMessage("Discount cannot be duplicated"), setActive(!0)), setCount(0));
  }, [check, count]), (0, import_react5.useEffect)(() => {
    discountStrategyCount === "1" ? (setShowVolume1(!0), setShowVolume2(!1), setShowVolume3(!1)) : discountStrategyCount === "2" ? (setShowVolume1(!0), setShowVolume2(!0), setShowVolume3(!1)) : discountStrategyCount === "3" && (setShowVolume1(!0), setShowVolume2(!0), setShowVolume3(!0));
  }, [discountStrategyCount]), (0, import_react5.useEffect)(() => {
    selectedVolume.includes("percentage") ? (setAmountDiscount(""), setAppliesToEachItem(!1)) : setPercentageDiscount("");
  }, [selectedVolume]), (0, import_react5.useEffect)(() => {
    selectedVolume2.includes("percentage") ? (setAmountDiscount2(""), setAppliesToEachItem2(!1)) : setPercentageDiscount2("");
  }, [selectedVolume2]), (0, import_react5.useEffect)(() => {
    selectedVolume3.includes("percentage") ? (setAmountDiscount3(""), setAppliesToEachItem3(!1)) : setPercentageDiscount3("");
  }, [selectedVolume3]);
  async function selectProduct() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState2 = formState2.some(
          (existingProduct) => existingProduct.productVariantId === newProduct.productVariantId
        ), isDuplicateInFormState3 = formState3.some(
          (existingProduct) => existingProduct.productVariantId === newProduct.productVariantId
        );
        return isDuplicateInFormState2 || isDuplicateInFormState3;
      }) ? (setCheck(9), console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState2 ho\u1EB7c formState3")) : setFormState(flattenedVariants);
    }
  }
  async function selectProduct2() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId), isDuplicateInFormState3 = formState3.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState || isDuplicateInFormState3;
      }) ? (console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState3"), setCheck(10)) : setFormState2(flattenedVariants);
    }
  }
  async function selectProduct3() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      flattenedVariants.some((newProduct) => {
        let isDuplicateInFormState1 = formState.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId), isDuplicateInFormState2 = formState2.some((existingProduct) => existingProduct.productVariantId === newProduct.productVariantId);
        return isDuplicateInFormState1 || isDuplicateInFormState2;
      }) ? (setCheck(11), console.log("C\xF3 s\u1EA3n ph\u1EA9m tr\xF9ng l\u1EB7p trong formState ho\u1EB7c formState2")) : setFormState3(flattenedVariants);
    }
  }
  (0, import_react5.useEffect)(() => {
    console.log(formState);
  }, [formState]), (0, import_react5.useEffect)(() => {
    selected.includes("chooseProduct") ? (setApplyTo("choose"), setIsFirstButtonActive(!0), setDiscountStrategyCount("1"), setFormState([{}]), setFormState2([{}]), setFormState3([{}])) : (setApplyTo("all"), setIsFirstButtonActive(!1));
  }, [selected]), (0, import_react5.useEffect)(() => {
    selectedValueType.includes("max") ? setAppliesToEachItem(!1) : setAppliesToEachItem(!0);
  }, [selectedValueType]), (0, import_react5.useEffect)(() => {
    selectedValueType2.includes("max") ? setAppliesToEachItem2(!1) : setAppliesToEachItem2(!0);
  }, [selectedValueType2]), (0, import_react5.useEffect)(() => {
    selectedValueType3.includes("max") ? setAppliesToEachItem3(!1) : setAppliesToEachItem3(!0);
  }, [selectedValueType3]), (0, import_react5.useEffect)(() => {
    showVolume2 || (setAppliesToEachItem2(!1), setAmountDiscount2(""), setPercentageDiscount2(""), setSelectedValueType2(["max"]), setSelectedVolume2(["percentage"]));
  }, [showVolume2]), (0, import_react5.useEffect)(() => {
    showVolume3 || (setAppliesToEachItem3(!1), setAmountDiscount3(""), setPercentageDiscount3(""), setSelectedValueType3(["max"]), setSelectedVolume3(["percentage"]));
  }, [showVolume3]);
  let handleSelectDiscountStrategyCountChange = (0, import_react5.useCallback)(
    (value) => setDiscountStrategyCount(value),
    []
  ), options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" }
  ], handleChangeApplies = (value) => {
    setSelected(value), console.log(value);
  }, handleChoiceValueTypeChange = (0, import_react5.useCallback)(
    (value) => setSelectedValueType(value),
    []
  ), handleChoiceValueTypeChange2 = (0, import_react5.useCallback)(
    (value) => setSelectedValueType2(value),
    []
  ), handleChoiceValueTypeChange3 = (0, import_react5.useCallback)(
    (value) => setSelectedValueType3(value),
    []
  ), handleDiscountPercentageChange = (0, import_react5.useCallback)(
    (newValue) => {
      setPercentageDiscount(newValue);
    },
    []
  ), handleDiscountPercentageChange2 = (0, import_react5.useCallback)(
    (newValue) => {
      setPercentageDiscount2(newValue);
    },
    []
  ), handleDiscountPercentageChange3 = (0, import_react5.useCallback)(
    (newValue) => {
      setPercentageDiscount3(newValue);
    },
    []
  ), handleDiscountAmountChange = (0, import_react5.useCallback)(
    (newValue) => {
      setAmountDiscount(newValue);
    },
    []
  ), handleDiscountAmountChange2 = (0, import_react5.useCallback)(
    (newValue) => {
      setAmountDiscount2(newValue);
    },
    []
  ), handleDiscountAmountChange3 = (0, import_react5.useCallback)(
    (newValue) => {
      setAmountDiscount3(newValue);
    },
    []
  ), handleChangeVolume = (value) => {
    setSelectedVolume(value);
  }, handleChangeVolume2 = (value) => {
    setSelectedVolume2(value);
  }, handleChangeVolume3 = (value) => {
    setSelectedVolume3(value);
  }, removeItemFromFormState = (productVariantId) => {
    let updatedFormState = formState.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState(updatedFormState.length > 0 ? updatedFormState : [{}]);
  }, removeItemFromFormState2 = (productVariantId) => {
    let updatedFormState2 = formState2.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState2(updatedFormState2.length > 0 ? updatedFormState2 : [{}]);
  }, removeItemFromFormState3 = (productVariantId) => {
    let updatedFormState3 = formState3.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setFormState3(updatedFormState3.length > 0 ? updatedFormState3 : [{}]);
  }, renderChildren = (0, import_react5.useCallback)(
    (isSelected) => isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_polaris3.ChoiceList,
      {
        title: "",
        choices: [
          { label: "Max Discount amount", value: "max" },
          { label: "Discount for each product", value: "eachProduct" }
        ],
        selected: selectedValueType,
        onChange: handleChoiceValueTypeChange
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 764,
        columnNumber: 9
      },
      this
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValueType]
  ), choiceWithValueRenderChildren2 = {
    label: "Value",
    value: "Value",
    renderChildren: (0, import_react5.useCallback)(
      (isSelected2) => isSelected2 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_polaris3.ChoiceList,
        {
          title: "",
          choices: [
            { label: "Max Discount amount", value: "max" },
            { label: "Discount for each product", value: "eachProduct" }
          ],
          selected: selectedValueType2,
          onChange: handleChoiceValueTypeChange2
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 781,
          columnNumber: 9
        },
        this
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedValueType2]
    )
  }, choiceWithValueRenderChildren3 = {
    label: "Value",
    value: "Value",
    renderChildren: (0, import_react5.useCallback)(
      (isSelected3) => isSelected3 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_polaris3.ChoiceList,
        {
          title: "",
          choices: [
            { label: "Max Discount amount", value: "max" },
            { label: "Discount for each product", value: "eachProduct" }
          ],
          selected: selectedValueType3,
          onChange: handleChoiceValueTypeChange3
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 804,
          columnNumber: 9
        },
        this
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedValueType3]
    )
  }, {
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
  } = (0, import_react_form2.useForm)({
    fields: {
      discountTitle: (0, import_react_form2.useField)(""),
      discountMethod: (0, import_react_form2.useField)(import_discount_app_components2.DiscountMethod.Code),
      discountCode: (0, import_react_form2.useField)(""),
      combinesWith: (0, import_react_form2.useField)({
        orderDiscounts: !1,
        productDiscounts: !1,
        shippingDiscounts: !1
      }),
      requirementType: (0, import_react_form2.useField)(import_discount_app_components2.RequirementType.None),
      requirementSubtotal: (0, import_react_form2.useField)("0"),
      requirementQuantity: (0, import_react_form2.useField)("0"),
      usageLimit: (0, import_react_form2.useField)(null),
      appliesOncePerCustomer: (0, import_react_form2.useField)(!1),
      startDate: (0, import_react_form2.useField)(today),
      endDate: (0, import_react_form2.useField)(null),
      configuration: {
        quantity: (0, import_react_form2.useField)("1"),
        percentage: (0, import_react_form2.useField)(""),
        fixedAmount: (0, import_react_form2.useField)(""),
        quantity2: (0, import_react_form2.useField)("1"),
        percentage2: (0, import_react_form2.useField)(""),
        fixedAmount2: (0, import_react_form2.useField)(""),
        quantity3: (0, import_react_form2.useField)("1"),
        percentage3: (0, import_react_form2.useField)(""),
        fixedAmount3: (0, import_react_form2.useField)("")
      },
      products1: [{}],
      products2: [{}],
      products3: [{}],
      countStrategy: (0, import_react_form2.useField)("1"),
      applyTo: (0, import_react_form2.useField)("")
    },
    onSubmit: async (form) => {
      setCount(1);
      let discount, existingDiscount, existingDiscountTitle;
      return discount = {
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
      }, DiscountLoading || (existingDiscount = DiscountsData.getAllDiscount.filter((node) => node.code !== "").find((item) => item.code === discount.code), existingDiscountTitle = DiscountsData.getAllDiscount.find((item) => item.title === discount.title)), discount.code === "" && discount.title === "" ? setCheck(1) : existingDiscount !== void 0 || existingDiscountTitle !== void 0 ? (setCheck(15), console.log("trung ten"), console.log(existingDiscountTitle), console.log(existingDiscount)) : validateNumber(discount.configuration.quantity) === 1 || validateNumber(discount.configuration.quantity2) === 1 || validateNumber(discount.configuration.quantity3) === 1 ? setCheck(2) : showVolume1 && showVolume2 === !1 && showVolume3 === !1 ? validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 1")) : validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 2")) : discount.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 15")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })) : showVolume2 && showVolume3 === !1 ? validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 4")) : validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes("percentage") ? (setCheck(3), console.log("sai 5")) : validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 6")) : validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value") ? (setCheck(4), console.log("sai 7")) : discount.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 16")) : discount.products2.length <= 0 && selected.includes("chooseProduct") ? (setCheck(7), console.log("sai 17")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })) : showVolume2 && showVolume3 ? validatePercentage(discount.configuration.percentage) === 1 && selectedVolume.includes("percentage") ? (setCheck(3), console.log("sai 9")) : validatePercentage(discount.configuration.percentage2) === 1 && selectedVolume2.includes("percentage") ? (setCheck(3), console.log("sai 10")) : validatePercentage(discount.configuration.percentage3) === 1 && selectedVolume3.includes("percentage") ? (setCheck(3), console.log("sai 11")) : validateNumber(discount.configuration.fixedAmount) === 1 && selectedVolume.includes("Value") ? (setCheck(4), console.log("sai 12")) : validateNumber(discount.configuration.fixedAmount2) === 1 && selectedVolume2.includes("Value") ? (setCheck(4), console.log("sai 13")) : validatePercentage(discount.configuration.fixedAmount3) === 1 && selectedVolume3.includes("Value") ? (setCheck(3), console.log("sai 14")) : discount.products1.length <= 0 && selected.includes("chooseProduct") ? (setCheck(6), console.log("sai 18")) : discount.products2.length <= 0 && selected.includes("chooseProduct") ? (setCheck(7), console.log("sai 19")) : discount.products3.length <= 0 && selected.includes("chooseProduct") ? (setCheck(8), console.log("sai 20")) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })) : (setCheck(5), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })), console.log(discount), { status: "success" };
    }
  }), toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Toast, { content: message, onDismiss: toggleActive, error: check !== 5 }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 1020,
    columnNumber: 5
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_polaris3.Page,
    {
      title: "Create volume discount",
      backAction: {
        content: "Return",
        onAction: () => navigate("../../app/discountList")
      },
      primaryAction: {
        content: "Save",
        onAction: submit,
        loading: isLoading
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { align: "space-around", gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.MethodCard,
              {
                title: "Volume",
                discountTitle,
                discountClass: import_discount_app_components2.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1042,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_polaris3.ChoiceList,
              {
                title: "Apply to",
                choices: [
                  { label: "Apply on all Product", value: "allProduct" },
                  { label: " Choose Product", value: "chooseProduct" }
                ],
                selected,
                onChange: handleChangeApplies
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1052,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1051,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1050,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1049,
              columnNumber: 17
            }, this),
            isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_polaris3.Select,
              {
                label: "Discount Strategy Count",
                options,
                onChange: handleSelectDiscountStrategyCountChange,
                value: discountStrategyCount
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1068,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1067,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1066,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1065,
              columnNumber: 19
            }, this) : null,
            showVolume1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Volume 1" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1083,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1086,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      { label: "Value", value: "Value", renderChildren }
                    ],
                    selected: selectedVolume,
                    onChange: handleChangeVolume
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1091,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount,
                    onChange: handleDiscountPercentageChange,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1101,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount,
                    onChange: handleDiscountAmountChange,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1110,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1082,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1121,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1120,
                columnNumber: 25
              }, this) : null,
              isFirstButtonActive && formState[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1131,
                        columnNumber: 43
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1148,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1151,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1141,
                        columnNumber: 31
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1127,
                  columnNumber: 25
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected2()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1081,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1080,
              columnNumber: 19
            }, this),
            showVolume2 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Volume 2" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1166,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity2
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1169,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      choiceWithValueRenderChildren2
                      // Sử dụng đối tượng Choice mới ở đây
                    ],
                    selected: selectedVolume2,
                    onChange: handleChangeVolume2
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1174,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume2.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount2,
                    onChange: handleDiscountPercentageChange2,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1184,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume2.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount2,
                    onChange: handleDiscountAmountChange2,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1193,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1165,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct2, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1203,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1202,
                columnNumber: 46
              }, this) : null,
              isFirstButtonActive && formState2[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState2,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1213,
                        columnNumber: 43
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState2(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1230,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1233,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1223,
                        columnNumber: 31
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1209,
                  columnNumber: 25
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected2()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1164,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1163,
              columnNumber: 19
            }, this),
            showVolume3 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Volume 3" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1248,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Minimum quantity",
                    autoComplete: "on",
                    ...configuration.quantity3
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1251,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.ChoiceList,
                  {
                    title: "Select discount type",
                    choices: [
                      { label: "Percentage", value: "percentage" },
                      choiceWithValueRenderChildren3
                      // Sử dụng đối tượng Choice mới ở đây
                    ],
                    selected: selectedVolume3,
                    onChange: handleChangeVolume3
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1256,
                    columnNumber: 25
                  },
                  this
                ),
                selectedVolume3.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount percentage",
                    autoComplete: "on",
                    value: percentageDiscount3,
                    onChange: handleDiscountPercentageChange3,
                    suffix: "%"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1266,
                    columnNumber: 27
                  },
                  this
                ),
                selectedVolume3.includes("Value") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "Discount value",
                    autoComplete: "on",
                    value: amountDiscount3,
                    onChange: handleDiscountAmountChange3,
                    suffix: "VND"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 1275,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1247,
                columnNumber: 23
              }, this),
              isFirstButtonActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProduct3, children: "Click here to set product" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1285,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1284,
                columnNumber: 46
              }, this) : null,
              isFirstButtonActive && formState3[0].productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: formState3,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1295,
                        columnNumber: 43
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromFormState3(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_polaris3.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1312,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                            lineNumber: 1315,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                        lineNumber: 1305,
                        columnNumber: 31
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 1291,
                  columnNumber: 25
                },
                this
              ) : isFirstButtonActive && EmptyProductSelected2()
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1246,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1245,
              columnNumber: 19
            }, this),
            discountMethod.value === import_discount_app_components2.DiscountMethod.Code && // kiểm tra xem discount là code hay auto
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1328,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components2.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1335,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "GMT"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 1340,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1041,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1040,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1039,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_discount_app_components2.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components2.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "Discount",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components2.DiscountStatus.Scheduled,
                usageCount: 0
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              customerEligibility: {
                eligibility: import_discount_app_components2.Eligibility.Everyone
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
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1351,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1350,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_polaris3.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Discard",
                  onAction: () => navigate("../../app/discountList")
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 1386,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 1385,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 1038,
          columnNumber: 9
        }, this),
        toastMarkup
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 1025,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 1024,
    columnNumber: 5
  }, this);
}

// app/routes/app.byXgetYdiscount.$id.jsx
var app_byXgetYdiscount_id_exports = {};
__export(app_byXgetYdiscount_id_exports, {
  action: () => action3,
  default: () => app_byXgetYdiscount_id_default,
  loader: () => loader3
});
var import_discount_app_components3 = require("@shopify/discount-app-components"), import_polaris4 = require("@shopify/polaris"), import_react7 = require("@remix-run/react"), import_react_form3 = require("@shopify/react-form"), import_react8 = require("react"), import_react_i18n3 = require("@shopify/react-i18n");
var import_client7 = require("@apollo/client");
var import_node5 = require("@remix-run/node");
var import_axios3 = __toESM(require("axios"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), EmptyProductSelected3 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { textAlign: "center", maxHeight: "60vh" }, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "img",
    {
      style: { height: "60px", width: "60px" },
      src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      alt: "test"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { fontWeight: "bold" }, children: "There are no products selected" }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Please choose product for this By X Get Y discount" }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
  lineNumber: 41,
  columnNumber: 3
}, this), action3 = async ({ request }) => {
  var _a2, _b, _c, _d;
  let { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
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
  } = JSON.parse(formData.get("discountForm")), valueSpend, valueGet;
  configuration.quantityPurchase > 0 ? valueSpend = { quantity: configuration.quantityPurchase } : valueSpend = { amount: configuration.amountPurchase }, configuration.freeGet ? valueGet = {
    discountOnQuantity: {
      effect: {
        percentage: 1
      },
      quantity: configuration.quantityGet
    }
  } : valueGet = {
    discountOnQuantity: {
      effect: {
        percentage: configuration.percentageGet / 100
      },
      quantity: configuration.quantityGet
    }
  };
  let baseDiscount = {
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt),
    customerBuys: {
      items: {
        all: !1,
        products: {
          productVariantsToAdd: productSpendId
        }
      },
      value: valueSpend
    },
    customerGets: {
      items: {
        all: !1,
        products: {
          productVariantsToAdd: productGetId
        }
      },
      value: valueGet
    }
  };
  if (method === import_discount_app_components3.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer,
      customerSelection: {
        all: !0
      }
    }, responseJson = await (await admin.graphql(
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
          id: discountId
        }
      }
    )).json(), discountData = (_a2 = responseJson.data.discountCodeBxgyUpdate) == null ? void 0 : _a2.codeDiscountNode.codeDiscount, errors = (_b = responseJson.data.discountCodeBxgyUpdate) == null ? void 0 : _b.userErrors;
    return (0, import_node5.json)({ errors, responseJson, discountData });
  } else {
    let responseJson = await (await admin.graphql(
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
          id: discountId
        }
      }
    )).json(), discountData = (_c = responseJson.data.discountAutomaticBxgyUpdate) == null ? void 0 : _c.automaticDiscountNode.automaticDiscount, errors = (_d = responseJson.data.discountAutomaticBxgyCreate) == null ? void 0 : _d.userErrors;
    return (0, import_node5.json)({ errors, responseJson, discountData });
  }
};
async function loader3({ request }) {
  let { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios3.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  );
  return (0, import_node5.json)({
    shop: shopData
  });
}
var getId = function(discountId) {
  if (discountId)
    return discountId.split("/").pop();
}, ByXGetYDiscount = () => {
  var _a2, _b, _c;
  let {
    validateNumber,
    validatePercentage
  } = Function(), { shop } = (0, import_react7.useLoaderData)(), { id } = (0, import_react7.useParams)(), submitForm = (0, import_react7.useSubmit)(), actionData = (0, import_react7.useActionData)(), [count, setCount] = (0, import_react8.useState)(0), [check, setCheck] = (0, import_react8.useState)(0), navigate = (0, import_react7.useNavigate)(), isLoading = (0, import_react7.useNavigation)().state === "submitting", [quantityPurchase, setQuantityPurchase] = (0, import_react8.useState)(""), [amountPurchase, setAmountPurchase] = (0, import_react8.useState)(""), currencyCode = import_react_i18n3.CurrencyCode.Cad, [selectedPurchase, setSelectedPurchase] = (0, import_react8.useState)(["amount"]), [selectedGet, setSelectedGet] = (0, import_react8.useState)(["percentage"]), [percentageGet, setPercentageGet] = (0, import_react8.useState)(""), [quantityGet, setQuantityGet] = (0, import_react8.useState)(""), [productSpend, setProductSpend] = (0, import_react8.useState)([{}]), [productGet, setProductGet] = (0, import_react8.useState)([{}]), [productSpendId, setProductSpendId] = (0, import_react8.useState)([]), [productGetId, setProductGetId] = (0, import_react8.useState)([]), [active, setActive] = (0, import_react8.useState)(!1), toggleActive = (0, import_react8.useCallback)(() => setActive((active2) => !active2), []), [message, setMessage] = (0, import_react8.useState)(""), { loading: loadingData, data: oneDiscount } = (0, import_client7.useQuery)(GET_ONB_DISCOUNT_BY_X_GET_Y, {
    variables: {
      input: {
        id,
        storeId: shop.id
      }
    }
  });
  (0, import_react8.useEffect)(() => {
    actionData != null && actionData.discountData && (updateDiscount().then(), navigate("../../app/discountList"));
  }, [actionData]);
  let [update] = (0, import_client7.useMutation)(UPDATE_DISCOUNT_BY_X_GET_Y), [discountUpdate, setDiscountUpdate] = (0, import_react8.useState)(), updateDiscount = async () => {
    try {
      let createPromise = await update({
        variables: {
          input: {
            storeId: shop.id,
            discountId: discountUpdate.discountId,
            id: getId(discountUpdate.discountId),
            title: actionData.discountData.title,
            code: discountUpdate.method === import_discount_app_components3.DiscountMethod.Code ? discountUpdate.code : "",
            method: discountUpdate.method,
            combinesWith: JSON.stringify(discountUpdate.combinesWith),
            usageLimit: discountUpdate.method === import_discount_app_components3.DiscountMethod.Code && discountUpdate.usageLimit !== null ? actionData.discountData.usageLimit.toString() : "",
            status: actionData.discountData.status,
            startsAt: discountUpdate.startsAt,
            endsAt: discountUpdate.endsAt,
            asyncUsageCount: actionData.discountData.asyncUsageCount.toString(),
            appliesOncePerCustomer: discountUpdate.method === import_discount_app_components3.DiscountMethod.Code ? discountUpdate.appliesOncePerCustomer : !1,
            quantityPurchase,
            amountPurchase,
            quantityGet,
            percentageGet: selectedGet.includes("free") === !0 ? "100" : percentageGet,
            productPurchase: JSON.stringify(productSpend),
            productPurchaseId: JSON.stringify(productSpendId),
            productGet: JSON.stringify(productGet),
            productGetId: JSON.stringify(productGetId)
          }
        }
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  }, today = (0, import_react8.useMemo)(() => /* @__PURE__ */ new Date(), []), [discountData, setDiscountData] = (0, import_react8.useState)({});
  (0, import_react8.useEffect)(() => {
    console.log(oneDiscount), loadingData || oneDiscount && (setProductSpend(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchase)), setProductSpendId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productPurchaseId)), setProductGetId(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGetId)), setProductGet(JSON.parse(oneDiscount.getOneDiscountByXGetY.productGet)), console.log(oneDiscount), setDiscountData({
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
    }));
  }, [loadingData, oneDiscount, id]), (0, import_react8.useEffect)(() => {
    setPercentageGet(discountData == null ? void 0 : discountData.percentageGet), setQuantityGet(discountData == null ? void 0 : discountData.quantityGet), setQuantityPurchase(discountData == null ? void 0 : discountData.quantityPurchase), setAmountPurchase(discountData == null ? void 0 : discountData.amountPurchase), parseInt(discountData == null ? void 0 : discountData.quantityPurchase) > 0 ? setSelectedPurchase(["quantity"]) : setSelectedPurchase(["amount"]);
  }, [discountData]), (0, import_react8.useEffect)(() => {
    percentageGet === "100" && (setSelectedGet(["free"]), setPercentageGet(""));
  }, [percentageGet]), (0, import_react8.useEffect)(() => {
    selectedPurchase.includes("quantity") ? (parseInt(discountData == null ? void 0 : discountData.quantityPurchase) > 0 ? setQuantityPurchase(discountData == null ? void 0 : discountData.quantityPurchase) : setQuantityPurchase(""), setAmountPurchase("")) : (parseInt(discountData == null ? void 0 : discountData.amountPurchase) > 0 ? setAmountPurchase(discountData == null ? void 0 : discountData.amountPurchase) : setAmountPurchase(""), setQuantityPurchase(""));
  }, [selectedPurchase, discountData]), (0, import_react8.useEffect)(() => {
    console.log("product Spend:", productSpend), console.log("Product Spend id ", productSpendId);
  }, [productSpend]), (0, import_react8.useEffect)(() => {
    count === 1 && (check === 1 ? (setMessage("Discount code cannot be empty"), setActive(!0)) : check === 2 ? (setMessage("Invalid Minimum  purchase quantity"), setActive(!0)) : check === 3 ? (setMessage("Invalid Minimum purchase amount"), setActive(!0)) : check === 4 ? (setMessage("Invalid Minimum quantity get"), setActive(!0)) : check === 5 ? (setMessage("Invalid Minimum Percentage get"), setActive(!0)) : check === 6 ? (setMessage("Product Spend can not be empty"), setActive(!0)) : check === 7 ? (setMessage("Product Get can not be empty"), setActive(!0)) : check === 8 ? (setMessage("Discount Create Success"), setActive(!0)) : check === 15 && (setMessage("Discount cannot be duplicated"), setActive(!0)), setCount(0));
  }, [count, check]);
  let handleChangePurchase = (value) => {
    setSelectedPurchase(value);
  }, handleChangeGet = (value) => {
    setSelectedGet(value);
  }, handleChangePurchaseQuantity = (0, import_react8.useCallback)(
    (newValue) => {
      setQuantityPurchase(newValue);
    },
    []
  ), handleChangePurchaseAmount = (0, import_react8.useCallback)(
    (newValue) => {
      setAmountPurchase(newValue);
    },
    []
  ), handleChangeGetQuantity = (0, import_react8.useCallback)(
    (newValue) => {
      setQuantityGet(newValue);
    },
    []
  ), handleChangeGetPercentage = (0, import_react8.useCallback)(
    (newValue) => {
      setPercentageGet(newValue);
    },
    []
  ), removeItemFromProductSpend = (productVariantId) => {
    let updatedProductSpend = productSpend.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductSpend(updatedProductSpend.length > 0 ? updatedProductSpend : [{}]);
    let updatedProductSpendId = productSpendId.filter(
      (item) => item !== productVariantId
    );
    setProductSpendId(updatedProductSpendId.length > 0 ? updatedProductSpendId : []);
  }, removeItemFromProductGet = (productVariantId) => {
    let updatedProductGet = productGet.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductGet(updatedProductGet.length > 0 ? updatedProductGet : [{}]);
    let updatedProductGetId = productGetId.filter(
      (item) => item !== productVariantId
    );
    setProductGetId(updatedProductGetId.length > 0 ? updatedProductGetId : []);
  };
  async function selectProductSpend() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 1
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id: id2, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a3, _b2;
          return {
            productId: id2,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a3 = images[0]) == null ? void 0 : _a3.altText,
            productImage: (_b2 = images[0]) == null ? void 0 : _b2.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      setProductSpend(flattenedVariants);
      let selectedVariantIds = products.map((product) => product.variants.map((variant) => variant.id)).flat();
      setProductSpendId([...selectedVariantIds]);
    }
  }
  async function selectProductGet() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id: id2, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a3, _b2;
          return {
            productId: id2,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a3 = images[0]) == null ? void 0 : _a3.altText,
            productImage: (_b2 = images[0]) == null ? void 0 : _b2.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      setProductGet(flattenedVariants);
      let selectedVariantIds = products.map((product) => product.variants.map((variant) => variant.id)).flat();
      setProductGetId([...selectedVariantIds]);
    }
  }
  let {
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
  } = (0, import_react_form3.useForm)({
    fields: {
      discountTitle: (0, import_react_form3.useField)(discountData.title ? discountData.title : ""),
      discountMethod: (0, import_react_form3.useField)(discountData.method !== "Automatic" ? import_discount_app_components3.DiscountMethod.Code : import_discount_app_components3.DiscountMethod.Automatic),
      discountCode: (0, import_react_form3.useField)((discountData == null ? void 0 : discountData.code) || ""),
      combinesWith: (0, import_react_form3.useField)({
        orderDiscounts: ((_a2 = discountData.combinesWith) == null ? void 0 : _a2.orderDiscounts) || !1,
        productDiscounts: ((_b = discountData.combinesWith) == null ? void 0 : _b.productDiscounts) || !1,
        shippingDiscounts: ((_c = discountData.combinesWith) == null ? void 0 : _c.shippingDiscounts) || !1
      }),
      requirementType: (0, import_react_form3.useField)(import_discount_app_components3.RequirementType.None),
      requirementSubtotal: (0, import_react_form3.useField)("0"),
      requirementQuantity: (0, import_react_form3.useField)("0"),
      usageLimit: (0, import_react_form3.useField)(null),
      appliesOncePerCustomer: (0, import_react_form3.useField)(discountData.appliesOncePerCustomer),
      startDate: (0, import_react_form3.useField)((discountData == null ? void 0 : discountData.startsAt) || today),
      endDate: (0, import_react_form3.useField)((discountData == null ? void 0 : discountData.endsAt) === "" ? null : discountData == null ? void 0 : discountData.endsAt),
      configuration: {
        quantityPurchase: (0, import_react_form3.useField)(""),
        amountPurchase: (0, import_react_form3.useField)("")
      }
    },
    onSubmit: async (form) => {
      setCount(1);
      let discount;
      return discount = {
        title: form.discountMethod !== import_discount_app_components3.DiscountMethod.Code ? form.discountTitle : "",
        method: form.discountMethod,
        code: form.discountMethod === import_discount_app_components3.DiscountMethod.Code ? form.discountCode : "",
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
      }, discount.code === "" && discount.title === "" ? setCheck(1) : validateNumber(parseInt(quantityPurchase)) === 1 && selectedPurchase.includes("quantity") ? setCheck(2) : validateNumber(discount.configuration.amountPurchase) === 1 && selectedPurchase.includes("amount") ? setCheck(3) : validateNumber(parseInt(quantityGet)) === 1 ? setCheck(4) : validatePercentage(discount.configuration.percentageGet) === 1 && selectedGet.includes("percentage") ? setCheck(5) : productSpend[0].productVariantId ? productGet[0].productVariantId ? (setCheck(8), setDiscountUpdate(discount), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })) : setCheck(7) : setCheck(6), console.log(discount), { status: "success" };
    }
  }), toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Toast, { content: message, onDismiss: toggleActive, error: check !== 8 }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 718,
    columnNumber: 5
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_polaris4.Page,
    {
      title: "Create By X get Y discount",
      backAction: {
        content: "Return",
        onAction: () => navigate("../../app/discountList")
      },
      primaryAction: {
        content: "Save",
        onAction: submit,
        loading: isLoading
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.BlockStack, { align: "space-around", gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.MethodCard,
              {
                title: "By X get Y",
                discountTitle,
                discountClass: import_discount_app_components3.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 740,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.BlockStack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h1", children: "Customer spends" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 751,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 750,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h3", children: "Purchase type" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 756,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 755,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.ChoiceList,
                {
                  title: "Select Purchase type for By X get Y Discount",
                  choices: [
                    { label: "Minimum quantity of items", value: "quantity" },
                    { label: "Minimum purchase amount", value: "amount" }
                  ],
                  selected: selectedPurchase,
                  onChange: handleChangePurchase
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 760,
                  columnNumber: 23
                },
                this
              ),
              selectedPurchase.includes("quantity") && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.TextField,
                {
                  label: "Quantity",
                  autoComplete: "on",
                  value: quantityPurchase,
                  onChange: handleChangePurchaseQuantity,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 770,
                  columnNumber: 25
                },
                this
              ),
              selectedPurchase.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.TextField,
                {
                  label: "Amount",
                  autoComplete: "on",
                  value: amountPurchase,
                  onChange: handleChangePurchaseAmount,
                  suffix: "VND"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 779,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductSpend, children: "Click here to set product Customer must spend" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 788,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 787,
                columnNumber: 23
              }, this),
              productSpend[0].productVariantId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: productSpend,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                        lineNumber: 800,
                        columnNumber: 45
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromProductSpend(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                            lineNumber: 817,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                            lineNumber: 820,
                            columnNumber: 35
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                        lineNumber: 810,
                        columnNumber: 33
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 796,
                  columnNumber: 27
                },
                this
              ) : EmptyProductSelected3()
            ] }, void 0, !0, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 749,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 748,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 747,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.BlockStack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h1", children: "Customer gets" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 834,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 833,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { as: "p", tone: "subdued", children: "Customers must add the quantity of items specified below to their cart." }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 839,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 838,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.TextField,
                {
                  label: "Quantity",
                  autoComplete: "on",
                  value: quantityGet,
                  onChange: handleChangeGetQuantity,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 844,
                  columnNumber: 25
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 843,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.ChoiceList,
                {
                  title: "At a discounted value",
                  choices: [
                    { label: "Percentage", value: "percentage" },
                    { label: "Free", value: "free" }
                  ],
                  selected: selectedGet,
                  onChange: handleChangeGet
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 852,
                  columnNumber: 23
                },
                this
              ),
              selectedGet.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.TextField,
                {
                  label: "Percentage",
                  autoComplete: "on",
                  value: percentageGet,
                  onChange: handleChangeGetPercentage,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 862,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductGet, children: "Click here to set product Customer can get" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 872,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 871,
                columnNumber: 23
              }, this),
              productGet[0].productVariantId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: productGet,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                        lineNumber: 884,
                        columnNumber: 45
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromProductGet(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                            lineNumber: 901,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                            lineNumber: 904,
                            columnNumber: 35
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                        lineNumber: 894,
                        columnNumber: 33
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                  lineNumber: 880,
                  columnNumber: 27
                },
                this
              ) : EmptyProductSelected3()
            ] }, void 0, !0, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 832,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 831,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 830,
              columnNumber: 17
            }, this),
            discountMethod.value === import_discount_app_components3.DiscountMethod.Code && // kiểm tra xem discount là code hay auto
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 915,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components3.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 922,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "GMT+7"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
                lineNumber: 927,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 739,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 738,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 737,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_discount_app_components3.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components3.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "By X Get Y",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components3.DiscountStatus.Scheduled,
                usageCount: 0
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              customerEligibility: {
                eligibility: import_discount_app_components3.Eligibility.Everyone
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
            !1,
            {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 938,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 937,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris4.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Quit",
                  onAction: () => navigate("../../app/discountList")
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
              lineNumber: 974,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
            lineNumber: 973,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
          lineNumber: 736,
          columnNumber: 9
        }, this),
        toastMarkup
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
      lineNumber: 723,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 722,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.$id.jsx",
    lineNumber: 721,
    columnNumber: 5
  }, this);
}, app_byXgetYdiscount_id_default = ByXGetYDiscount;

// app/routes/app.byXgetYdiscount.new.jsx
var app_byXgetYdiscount_new_exports = {};
__export(app_byXgetYdiscount_new_exports, {
  action: () => action4,
  default: () => app_byXgetYdiscount_new_default,
  loader: () => loader4
});
var import_discount_app_components4 = require("@shopify/discount-app-components"), import_polaris5 = require("@shopify/polaris"), import_react9 = require("@remix-run/react"), import_react_form4 = require("@shopify/react-form"), import_react10 = require("react"), import_react_i18n4 = require("@shopify/react-i18n");
var import_node6 = require("@remix-run/node");
var import_client8 = require("@apollo/client");
var import_axios4 = __toESM(require("axios"));
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), EmptyProductSelected4 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { textAlign: "center", maxHeight: "60vh" }, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "img",
    {
      style: { height: "60px", width: "60px" },
      src: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      alt: "test"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.byXgetYdiscount.new.jsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { style: { fontWeight: "bold" }, children: "There are no products selected" }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Please choose product for this By X Get Y discount" }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
  lineNumber: 40,
  columnNumber: 3
}, this), action4 = async ({ request }) => {
  var _a2, _b, _c, _d;
  let { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
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
  } = JSON.parse(formData.get("discountForm")), valueSpend, valueGet;
  configuration.quantityPurchase > 0 ? valueSpend = { quantity: configuration.quantityPurchase } : valueSpend = { amount: configuration.amountPurchase }, configuration.freeGet ? valueGet = {
    discountOnQuantity: {
      effect: {
        percentage: 1
      },
      quantity: configuration.quantityGet
    }
  } : valueGet = {
    discountOnQuantity: {
      effect: {
        percentage: configuration.percentageGet / 100
      },
      quantity: configuration.quantityGet
    }
  };
  let baseDiscount = {
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt),
    customerBuys: {
      items: {
        all: !1,
        products: {
          productVariantsToAdd: productSpendId
        }
      },
      value: valueSpend
    },
    customerGets: {
      items: {
        all: !1,
        products: {
          productVariantsToAdd: productGetId
        }
      },
      value: valueGet
    }
  };
  if (method === import_discount_app_components4.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer,
      customerSelection: {
        all: !0
      }
    }, responseJson = await (await admin.graphql(
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
        }
      }
    )).json(), errors = (_a2 = responseJson.data.discountCodeBxgyCreate) == null ? void 0 : _a2.userErrors, discountData = (_b = responseJson.data.discountCodeBxgyCreate) == null ? void 0 : _b.codeDiscountNode;
    return (0, import_node6.json)({ errors, responseJson, discountData });
  } else {
    let responseJson = await (await admin.graphql(
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
        }
      }
    )).json(), errors = (_c = responseJson.data.discountAutomaticBxgyCreate) == null ? void 0 : _c.userErrors, automaticDiscountData = (_d = responseJson.data.discountAutomaticBxgyCreate) == null ? void 0 : _d.automaticDiscountNode;
    return (0, import_node6.json)({ errors, responseJson, automaticDiscountData });
  }
};
async function loader4({ request }) {
  let { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios4.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  );
  return (0, import_node6.json)({
    shop: shopData
  });
}
var getId2 = function(discountId) {
  if (discountId)
    return discountId.split("/").pop();
}, ByXGetYDiscount2 = () => {
  let {
    validateNumber,
    validatePercentage
  } = Function(), today = (0, import_react10.useMemo)(() => /* @__PURE__ */ new Date(), []), [count, setCount] = (0, import_react10.useState)(0), [check, setCheck] = (0, import_react10.useState)(0), { shop } = (0, import_react9.useLoaderData)(), navigate = (0, import_react9.useNavigate)(), navigation = (0, import_react9.useNavigation)(), actionData = (0, import_react9.useActionData)(), [active, setActive] = (0, import_react10.useState)(!1), toggleActive = (0, import_react10.useCallback)(() => setActive((active2) => !active2), []), [message, setMessage] = (0, import_react10.useState)(""), isLoading = navigation.state === "submitting", [quantityPurchase, setQuantityPurchase] = (0, import_react10.useState)(""), [amountPurchase, setAmountPurchase] = (0, import_react10.useState)(""), currencyCode = import_react_i18n4.CurrencyCode.Cad, [selectedPurchase, setSelectedPurchase] = (0, import_react10.useState)(["quantity"]), [selectedGet, setSelectedGet] = (0, import_react10.useState)(["percentage"]), [percentageGet, setPercentageGet] = (0, import_react10.useState)(""), [amountGet, setAmountGet] = (0, import_react10.useState)(""), [quantityGet, setQuantityGet] = (0, import_react10.useState)(""), submitForm = (0, import_react9.useSubmit)(), [productSpendId, setProductSpendId] = (0, import_react10.useState)([]), [productGetId, setProductGetId] = (0, import_react10.useState)([]), [productSpend, setProductSpend] = (0, import_react10.useState)([{}]), [productGet, setProductGet] = (0, import_react10.useState)([{}]), [createDiscount] = (0, import_client8.useMutation)(CREATE_DISCOUNT_BY_X_GET_Y), { loading: byXGetYLoading, data: byXGetYDiscountsData } = (0, import_client8.useQuery)(GET_ALL_DISCOUNT_BY_X_GET_Y), addDiscountCode = async () => {
    var _a2;
    try {
      let createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            id: getId2(actionData.discountData.id),
            discountId: actionData.discountData.id,
            title: actionData.discountData.codeDiscount.title,
            code: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? ((_a2 = actionData.discountData.codeDiscount.codes.nodes[0]) == null ? void 0 : _a2.code) ?? "" : "",
            method: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? import_discount_app_components4.DiscountMethod.Code : import_discount_app_components4.DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.discountData.codeDiscount.combinesWith),
            usageLimit: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" && actionData.discountData.codeDiscount.usageLimit !== null ? actionData.discountData.codeDiscount.usageLimit.toString() : "",
            status: actionData.discountData.codeDiscount.status,
            startsAt: actionData.discountData.codeDiscount.startsAt,
            endsAt: actionData.discountData.codeDiscount.endsAt,
            asyncUsageCount: actionData.discountData.codeDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.discountData.codeDiscount.__typename === "DiscountCodeBxgy" ? actionData.discountData.codeDiscount.appliesOncePerCustomer : !1,
            quantityPurchase,
            amountPurchase,
            quantityGet,
            percentageGet: selectedGet.includes("free") === !0 ? "100" : percentageGet,
            productPurchase: JSON.stringify(productSpend),
            productPurchaseId: JSON.stringify(productSpendId),
            productGet: JSON.stringify(productGet),
            productGetId: JSON.stringify(productGetId)
          }
        }
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  }, addDiscountAutomatic = async () => {
    var _a2;
    try {
      let createPromise = await createDiscount({
        variables: {
          input: {
            storeId: shop.id,
            id: getId2(actionData.automaticDiscountData.id),
            discountId: actionData.automaticDiscountData.id,
            title: actionData.automaticDiscountData.automaticDiscount.title,
            code: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? ((_a2 = actionData.automaticDiscountData.automaticDiscount.codes.nodes[0]) == null ? void 0 : _a2.code) ?? "" : "",
            method: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? import_discount_app_components4.DiscountMethod.Code : import_discount_app_components4.DiscountMethod.Automatic,
            combinesWith: JSON.stringify(actionData.automaticDiscountData.automaticDiscount.combinesWith),
            usageLimit: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" && actionData.automaticDiscountData.automaticDiscount.usageLimit !== null ? actionData.automaticDiscountData.automaticDiscount.usageLimit.toString() : "",
            status: actionData.automaticDiscountData.automaticDiscount.status,
            startsAt: actionData.automaticDiscountData.automaticDiscount.startsAt,
            endsAt: actionData.automaticDiscountData.automaticDiscount.endsAt,
            asyncUsageCount: actionData.automaticDiscountData.automaticDiscount.asyncUsageCount.toString(),
            appliesOncePerCustomer: actionData.automaticDiscountData.automaticDiscount.__typename === "DiscountCodeBxgy" ? actionData.automaticDiscountData.automaticDiscount.appliesOncePerCustomer : !1,
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
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  (0, import_react10.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && (console.log(actionData == null ? void 0 : actionData.responseJson), actionData.discountData ? (console.log("code"), addDiscountCode().then(() => {
      console.log(actionData == null ? void 0 : actionData.discountData), navigate("../../app/discountList");
    }).catch((error) => {
      console.error("Error:", error);
    })) : actionData.automaticDiscountData && addDiscountAutomatic().then(() => {
      console.log("automatic"), console.log(actionData == null ? void 0 : actionData.automaticDiscountData), navigate("../../app/discountList");
    }).catch((error) => {
      console.error("Error:", error);
    }));
  }, [actionData]), (0, import_react10.useEffect)(() => {
    console.log(productSpend);
  }, [productSpend]), (0, import_react10.useEffect)(() => {
    selectedPurchase.includes("quantity") ? setAmountPurchase("") : setQuantityPurchase("");
  }, [selectedPurchase]), (0, import_react10.useEffect)(() => {
    selectedGet.includes("percentage") ? setAmountGet("") : selectedGet.includes("amount") ? setPercentageGet("") : (setPercentageGet(""), setAmountGet(""));
  }, [selectedGet]), (0, import_react10.useEffect)(() => {
    count === 1 && (check === 1 ? (setMessage("Discount code cannot be empty"), setActive(!0)) : check === 2 ? (setMessage("Invalid Minimum  purchase quantity"), setActive(!0)) : check === 3 ? (setMessage("Invalid Minimum purchase amount"), setActive(!0)) : check === 4 ? (setMessage("Invalid Minimum quantity get"), setActive(!0)) : check === 5 ? (setMessage("Invalid Minimum Percentage get"), setActive(!0)) : check === 6 ? (setMessage("Product Spend can not be empty"), setActive(!0)) : check === 7 ? (setMessage("Product Get can not be empty"), setActive(!0)) : check === 8 ? (setMessage("Discount Create Success"), setActive(!0)) : check === 15 && (setMessage("Discount cannot be duplicated"), setActive(!0)), setCount(0));
  }, [count, check]);
  let handleChangePurchase = (value) => {
    setSelectedPurchase(value);
  }, handleChangeGet = (value) => {
    setSelectedGet(value);
  }, handleChangePurchaseQuantity = (0, import_react10.useCallback)(
    (newValue) => {
      setQuantityPurchase(newValue);
    },
    []
  ), handleChangePurchaseAmount = (0, import_react10.useCallback)(
    (newValue) => {
      setAmountPurchase(newValue);
    },
    []
  ), handleChangeGetQuantity = (0, import_react10.useCallback)(
    (newValue) => {
      setQuantityGet(newValue);
    },
    []
  ), handleChangeGetPercentage = (0, import_react10.useCallback)(
    (newValue) => {
      setPercentageGet(newValue);
    },
    []
  ), handleChangeGetAmount = (0, import_react10.useCallback)(
    (newValue) => {
      setAmountGet(newValue);
    },
    []
  ), removeItemFromProductSpend = (productVariantId) => {
    let updatedProductSpend = productSpend.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductSpend(updatedProductSpend.length > 0 ? updatedProductSpend : [{}]);
    let updatedProductSpendId = productSpendId.filter(
      (item) => item !== productVariantId
    );
    setProductSpendId(updatedProductSpendId.length > 0 ? updatedProductSpendId : []);
  }, removeItemFromProductGet = (productVariantId) => {
    let updatedProductGet = productGet.filter(
      (item) => item.productVariantId !== productVariantId
    );
    setProductGet(updatedProductGet.length > 0 ? updatedProductGet : [{}]);
    let updatedProductGetId = productGetId.filter(
      (item) => item !== productVariantId
    );
    setProductGetId(updatedProductGetId.length > 0 ? updatedProductGetId : []);
  };
  async function selectProductSpend() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 1
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      setProductSpend(flattenedVariants);
      let selectedVariantIds = products.map((product) => product.variants.map((variant) => variant.id)).flat();
      setProductSpendId((prevIds) => [...prevIds, ...selectedVariantIds]);
    }
  }
  async function selectProductGet() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
      // customized action verb, either 'select' or 'add',
      multiple: 3
    });
    if (products) {
      let flattenedVariants = products.map((product) => {
        let { images, id, variants, title, handle } = product;
        return variants.map((variant) => {
          var _a2, _b;
          return {
            productId: id,
            productVariantId: variant.id,
            productTitle: title,
            productHandle: handle,
            productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
            productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc,
            variantTitle: variant.title,
            variantPrice: variant.price,
            variantSKU: variant.sku
          };
        });
      }).flat();
      setProductGet(flattenedVariants);
      let selectedVariantIds = products.map((product) => product.variants.map((variant) => variant.id)).flat();
      setProductGetId((prevIds) => [...prevIds, ...selectedVariantIds]);
    }
  }
  let toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Toast, { content: message, onDismiss: toggleActive, error: check !== 8 }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 623,
    columnNumber: 5
  }, this) : null, {
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
  } = (0, import_react_form4.useForm)({
    fields: {
      discountTitle: (0, import_react_form4.useField)(""),
      discountMethod: (0, import_react_form4.useField)(import_discount_app_components4.DiscountMethod.Code),
      discountCode: (0, import_react_form4.useField)(""),
      combinesWith: (0, import_react_form4.useField)({
        orderDiscounts: !1,
        productDiscounts: !1,
        shippingDiscounts: !1
      }),
      requirementType: (0, import_react_form4.useField)(import_discount_app_components4.RequirementType.None),
      requirementSubtotal: (0, import_react_form4.useField)("0"),
      requirementQuantity: (0, import_react_form4.useField)("0"),
      usageLimit: (0, import_react_form4.useField)(null),
      appliesOncePerCustomer: (0, import_react_form4.useField)(!1),
      startDate: (0, import_react_form4.useField)(today),
      endDate: (0, import_react_form4.useField)(null),
      configuration: {
        quantityPurchase: (0, import_react_form4.useField)(""),
        amountPurchase: (0, import_react_form4.useField)(""),
        quantityGet: (0, import_react_form4.useField)(""),
        percentageGet: (0, import_react_form4.useField)(""),
        amountGet: (0, import_react_form4.useField)(""),
        freeGet: (0, import_react_form4.useField)(!1)
      }
    },
    onSubmit: async (form) => {
      setCount(1);
      let discount, existingDiscount, existingDiscountTitle;
      return discount = {
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
      }, byXGetYLoading || (existingDiscount = byXGetYDiscountsData.getAllDiscountByXGetY.filter((node) => node.code !== "").find((item) => item.code === discount.code), existingDiscountTitle = byXGetYDiscountsData.getAllDiscountByXGetY.find((item) => item.title === discount.title)), discount.code === "" && discount.title === "" ? setCheck(1) : existingDiscount || existingDiscountTitle ? (setCheck(15), console.log("trung ten")) : validateNumber(parseInt(quantityPurchase)) === 1 && selectedPurchase.includes("quantity") ? setCheck(2) : validateNumber(discount.configuration.amountPurchase) === 1 && selectedPurchase.includes("amount") ? setCheck(3) : validateNumber(parseInt(quantityGet)) === 1 ? setCheck(4) : validatePercentage(discount.configuration.percentageGet) === 1 && selectedGet.includes("percentage") ? setCheck(5) : productSpend[0].productVariantId ? productGet[0].productVariantId ? (setCheck(8), console.log(discount), submitForm({ discountForm: JSON.stringify(discount) }, { method: "post" })) : setCheck(7) : setCheck(6), console.log(discount), { status: "success" };
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_polaris5.Page,
    {
      title: "Create By X get Y discount",
      backAction: {
        content: "Return",
        onAction: () => navigate("../../app/discountList")
      },
      primaryAction: {
        content: "Save",
        onAction: submit,
        loading: isLoading
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.BlockStack, { align: "space-around", gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_discount_app_components4.MethodCard,
              {
                title: "By X get Y",
                discountTitle,
                discountClass: import_discount_app_components4.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 764,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.BlockStack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { variant: "headingMd", as: "h1", children: "Customer spends" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 775,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 774,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { variant: "headingMd", as: "h3", children: "Purchase type" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 780,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 779,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.ChoiceList,
                {
                  title: "Select Purchase type for By X get Y Discount",
                  choices: [
                    { label: "Minimum quantity of items", value: "quantity" },
                    { label: "Minimum purchase amount", value: "amount" }
                  ],
                  selected: selectedPurchase,
                  onChange: handleChangePurchase
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 784,
                  columnNumber: 23
                },
                this
              ),
              selectedPurchase.includes("quantity") && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.TextField,
                {
                  label: "Quantity",
                  autoComplete: "on",
                  value: quantityPurchase,
                  onChange: handleChangePurchaseQuantity,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 794,
                  columnNumber: 25
                },
                this
              ),
              selectedPurchase.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.TextField,
                {
                  label: "Amount",
                  autoComplete: "on",
                  value: amountPurchase,
                  onChange: handleChangePurchaseAmount,
                  suffix: "VND"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 803,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductSpend, children: "Click here to set product Customer must spend" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 812,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 811,
                columnNumber: 23
              }, this),
              productSpend[0].productVariantId ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: productSpend,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_polaris5.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                        lineNumber: 824,
                        columnNumber: 45
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromProductSpend(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_polaris5.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                            lineNumber: 841,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                            lineNumber: 844,
                            columnNumber: 35
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                        lineNumber: 834,
                        columnNumber: 33
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 820,
                  columnNumber: 27
                },
                this
              ) : EmptyProductSelected4()
            ] }, void 0, !0, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 773,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 772,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 771,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.BlockStack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { variant: "headingMd", as: "h1", children: "Customer gets" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 858,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 857,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { as: "p", tone: "subdued", children: "Customers must add the quantity of items specified below to their cart." }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 863,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 862,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.TextField,
                {
                  label: "Quantity",
                  autoComplete: "on",
                  value: quantityGet,
                  onChange: handleChangeGetQuantity,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 868,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 867,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.ChoiceList,
                {
                  title: "At a discounted value",
                  choices: [
                    { label: "Percentage", value: "percentage" },
                    { label: "Free", value: "free" }
                  ],
                  selected: selectedGet,
                  onChange: handleChangeGet
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 876,
                  columnNumber: 23
                },
                this
              ),
              selectedGet.includes("percentage") && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.TextField,
                {
                  label: "Percentage",
                  autoComplete: "on",
                  value: percentageGet,
                  onChange: handleChangeGetPercentage,
                  suffix: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 886,
                  columnNumber: 25
                },
                this
              ),
              selectedGet.includes("amount") && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.TextField,
                {
                  label: "Amount",
                  autoComplete: "on",
                  value: amountGet,
                  onChange: handleChangeGetAmount,
                  suffix: "VND"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 895,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { marginBottom: "15px", marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { variant: "plain", textAlign: "left", size: "large", onClick: selectProductGet, children: "Click here to set product Customer can get" }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 904,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 903,
                columnNumber: 23
              }, this),
              productGet[0].productVariantId ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_polaris5.ResourceList,
                {
                  resourceName: { singular: "customer", plural: "customers" },
                  items: productGet,
                  renderItem: (item) => {
                    let media = /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_polaris5.Thumbnail,
                      {
                        source: item.productImage || "",
                        alt: item.productAlt
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                        lineNumber: 916,
                        columnNumber: 45
                      },
                      this
                    ), shortcutActions = [
                      {
                        content: "Remove",
                        onAction: () => removeItemFromProductGet(item.productVariantId)
                      }
                    ];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_polaris5.ResourceItem,
                      {
                        id: item.productId,
                        url: item.productImage,
                        media,
                        shortcutActions,
                        persistActions: !0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: item.productTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                            lineNumber: 933,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: item.variantTitle }, void 0, !1, {
                            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                            lineNumber: 936,
                            columnNumber: 35
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                        lineNumber: 926,
                        columnNumber: 33
                      },
                      this
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                  lineNumber: 912,
                  columnNumber: 27
                },
                this
              ) : EmptyProductSelected4()
            ] }, void 0, !0, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 856,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 855,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 854,
              columnNumber: 17
            }, this),
            discountMethod.value === import_discount_app_components4.DiscountMethod.Code && // kiểm tra xem discount là code hay auto
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_discount_app_components4.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 947,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_discount_app_components4.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components4.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 954,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_discount_app_components4.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "GMT+7"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.byXgetYdiscount.new.jsx",
                lineNumber: 959,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 763,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 762,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 761,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_discount_app_components4.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components4.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "By X Get Y",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components4.DiscountStatus.Scheduled,
                usageCount: 0
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              customerEligibility: {
                eligibility: import_discount_app_components4.Eligibility.Everyone
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
            !1,
            {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 970,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 969,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris5.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Quit",
                  onAction: () => navigate("../../app/discountList")
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.byXgetYdiscount.new.jsx",
              lineNumber: 1006,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.byXgetYdiscount.new.jsx",
            lineNumber: 1005,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.byXgetYdiscount.new.jsx",
          lineNumber: 760,
          columnNumber: 9
        }, this),
        toastMarkup
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/app.byXgetYdiscount.new.jsx",
      lineNumber: 747,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 746,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.byXgetYdiscount.new.jsx",
    lineNumber: 745,
    columnNumber: 5
  }, this);
}, app_byXgetYdiscount_new_default = ByXGetYDiscount2;

// app/routes/app.discountList.jsx
var app_discountList_exports = {};
__export(app_discountList_exports, {
  action: () => action5,
  default: () => app_discountList_default,
  loader: () => loader5
});
var import_polaris6 = require("@shopify/polaris"), import_react11 = require("react"), import_react12 = require("@remix-run/react");
var import_node7 = require("@remix-run/node"), import_discount_app_components5 = require("@shopify/discount-app-components"), import_client9 = require("@apollo/client");
var import_axios5 = __toESM(require("axios"));
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
    method,
    discountId
  } = JSON.parse(formData.get("discountDelete"));
  if (method === import_discount_app_components5.DiscountMethod.Code) {
    let errors = (await (await admin.graphql(
      `#graphql
              mutation discountCodeDelete($id: ID!) {
               discountCodeDelete(id: $id) {
                 deletedCodeDiscountId
                  userErrors {
                   field
                   message
                  }
  }
}`,
      {
        variables: {
          id: discountId
        }
      }
    )).json()).data.discountCodeDelete.userErrors;
    return (0, import_node7.json)({ errors });
  } else {
    let errors = (await (await admin.graphql(
      `#graphql
              mutation discountAutomaticDelete($id: ID!) {
                   discountAutomaticDelete(id: $id) {
                      deletedAutomaticDiscountId
                        userErrors {
                          field
                          message
                        }
                   }
              }`,
      {
        variables: {
          id: discountId
        }
      }
    )).json()).data.discountAutomaticDelete.userErrors;
    return (0, import_node7.json)({ errors });
  }
}, loader5 = async ({ request }) => {
  var _a2;
  let { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios5.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopCreate, shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  ), { admin } = await shopify_server_default.authenticate.admin(request), responseGetFunctionId = await admin.graphql(
    `#graphql
      query {
  shopifyFunctions(first: 25) {
    nodes {
      app {
        title
      }
      apiType
      title
      id
    }
  }
}
`,
    {
      variables: {}
    }
  ), response = await admin.graphql(
    `#graphql
      query GetDiscounts($list: Int!) {
  discountNodes(first: $list) {
    nodes {
      id
      configurationField: metafield(
        namespace: "$app:volume-discount"
        key: "function-configuration"
      ) {
        id
        value
      }
      discount {
        __typename
        ... on DiscountAutomaticApp {
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
        ... on DiscountCodeApp {
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
          }
        }
      }
    }
  }
}

      `,
    {
      variables: {
        list: 20
      }
    }
  ), functionId = ((_a2 = (await responseGetFunctionId.json()).data.shopifyFunctions.nodes.find((node) => node.apiType === "product_discounts")) == null ? void 0 : _a2.id) ?? null, discountList = (await response.json()).data.discountNodes.nodes.filter((node) => node.configurationField !== null).map((node) => {
    var _a3;
    return {
      id: getId3(node.id),
      discountId: node.id,
      discount: {
        ...node.discount,
        codes: node.discount.__typename === "DiscountCodeApp" ? ((_a3 = node.discount.codes.nodes[0]) == null ? void 0 : _a3.code) ?? "" : ""
      },
      startAt: node.startsAt,
      endAt: node.endsAt,
      asyncUsageCount: node.asyncUsageCount,
      configurationField: {
        id: node.configurationField.id,
        value: JSON.parse(node.configurationField.value)
      }
    };
  }), filteredNodesByXGetY = (await (await admin.graphql(
    `#graphql
      query GetDiscounts($list: Int!) {
  discountNodes(first: $list) {
    nodes {
      id
      discount {
        __typename
        ... on DiscountAutomaticBxgy {
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
        ... on DiscountCodeBxgy {
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
          }
        }
      }
    }
  }
}

      `,
    {
      variables: {
        list: 20
      }
    }
  )).json()).data.discountNodes.nodes.filter((node) => node.discount.__typename === "DiscountAutomaticBxgy" || node.discount.__typename === "DiscountCodeBxgy");
  return (0, import_node7.json)({ filteredNodesByXGetY, discountList, functionId, shop: shopData });
}, EmptyDiscountState = ({ onAction }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  import_polaris6.EmptyState,
  {
    heading: "Create discount co for your product",
    action: {
      content: "Create discount",
      onAction
    },
    image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Allow to create new discount by function." }, void 0, !1, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 279,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 271,
    columnNumber: 3
  },
  this
), setColorStatus = function(status) {
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
}, getId3 = function(discountId) {
  if (discountId)
    return discountId.split("/").pop();
}, DiscountList = () => {
  let { discountList, functionId, filteredNodesByXGetY, shop } = (0, import_react12.useLoaderData)(), [discountListData, setDiscountData] = (0, import_react11.useState)([{}]), [discountListDataBefore, setDiscountDataBefore] = (0, import_react11.useState)([{}]), [discountListDataByXGetY, setDiscountDataByXGetY] = (0, import_react11.useState)([{}]), [discountListDataByXGetYBefore, setDiscountDataByXGetYBefore] = (0, import_react11.useState)([{}]), navigate = (0, import_react12.useNavigate)(), actionData = (0, import_react12.useActionData)(), submitForm = (0, import_react12.useSubmit)(), [active, setActive] = (0, import_react11.useState)(!1), [activeByXgetYModal, setActiveByXgetYModal] = (0, import_react11.useState)(!1), [discount, setDiscount] = (0, import_react11.useState)(), [activeToast, setActiveToast] = (0, import_react11.useState)(!1), [count, setCount] = (0, import_react11.useState)(0), [delete_discount] = (0, import_client9.useMutation)(DELETE_DISCOUNT), [delete_discount_by_x_get_y] = (0, import_client9.useMutation)(DELETE_DISCOUNT_BY_X_GET_Y), [updateDiscount] = (0, import_client9.useMutation)(UPDATE_DISCOUNT_STATUS_AND_COUNT), [updateDiscountByXGetY] = (0, import_client9.useMutation)(UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y), [activeMessage, setActiveMessage] = (0, import_react11.useState)(!1), toggleActive = (0, import_react11.useCallback)(() => setActiveMessage((active2) => !active2), []), [message, setMessage] = (0, import_react11.useState)(""), { loading: DiscountLoading, data: DiscountsData } = (0, import_client9.useQuery)(GET_ALL_DISCOUNT), { loading: byXGetYLoading, data: byXGetYDiscountsData } = (0, import_client9.useQuery)(GET_ALL_DISCOUNT_BY_X_GET_Y);
  (0, import_react11.useEffect)(() => {
    if (discountList && shop) {
      let updatePromises = discountList.map(
        (node) => setTimeout(() => discountUpdate(node.discountId, node.discount.status, node.discount.asyncUsageCount), 1500)
      );
      Promise.all(updatePromises).then(() => {
        if (!DiscountLoading)
          if (DiscountsData) {
            let updatedDiscountsData = DiscountsData.getAllDiscount.map((discount2) => {
              let matchingNode = discountList.find((node) => node.discountId === discount2.discountId);
              return matchingNode ? {
                ...discount2,
                status: matchingNode.discount.status,
                asyncUsageCount: matchingNode.discount.asyncUsageCount.toString()
              } : discount2;
            });
            console.log(updatedDiscountsData), setDiscountData(updatedDiscountsData), setDiscountDataBefore(updatedDiscountsData);
          } else
            setDiscountData([]);
      }).catch((error) => {
        console.error("Error updating discounts:", error);
      });
    }
    if (!byXGetYLoading && filteredNodesByXGetY && shop) {
      let updatePromises = filteredNodesByXGetY.map(
        (node) => setTimeout(() => discountUpdateByXGetY(node.id, node.discount.status, node.discount.asyncUsageCount), 1500)
      );
      Promise.all(updatePromises).then(() => {
        if (!DiscountLoading)
          if (byXGetYDiscountsData) {
            let updatedDiscountsData = byXGetYDiscountsData.getAllDiscountByXGetY.map((discount2) => {
              let matchingNode = filteredNodesByXGetY.find((node) => node.id === discount2.discountId);
              return matchingNode ? {
                ...discount2,
                status: matchingNode.discount.status,
                asyncUsageCount: matchingNode.discount.asyncUsageCount.toString()
              } : discount2;
            });
            console.log(updatedDiscountsData), setDiscountDataByXGetY(updatedDiscountsData), setDiscountDataByXGetYBefore(updatedDiscountsData);
          } else
            setDiscountDataByXGetY([]);
      }).catch((error) => {
        console.error("Error updating discounts:", error);
      });
    }
  }, [DiscountLoading, byXGetYLoading]), (0, import_react11.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.errors.length) === 0) {
      let discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.discountId);
      setDiscountData(discountDataUpdate);
    }
  }, [actionData, count]);
  let discountDelete = async (discount2) => {
    try {
      if (discount2) {
        let createPromise = await delete_discount({
          variables: {
            input: {
              discountId: discount2.discountId,
              storeId: shop.id
            }
          }
        }), timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Update program timed out"));
          }, 1e4);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, discountDeleteByXGetY = async (discount2) => {
    try {
      if (discount2) {
        let createPromise = await delete_discount_by_x_get_y({
          variables: {
            input: {
              discountId: discount2.id,
              storeId: shop.id
            }
          }
        }), timeoutPromise = new Promise((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Update program timed out"));
          }, 1e4);
        });
        await Promise.race([createPromise, timeoutPromise]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, discountUpdate = async (discountId, status, asyncUsageCount) => {
    try {
      let createPromise = await updateDiscount({
        variables: {
          input: {
            storeId: shop.id,
            discountId,
            status,
            asyncUsageCount: asyncUsageCount.toString()
          }
        }
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  }, discountUpdateByXGetY = async (discountId, status, asyncUsageCount) => {
    try {
      let createPromise = await updateDiscountByXGetY({
        variables: {
          input: {
            storeId: shop.id,
            discountId,
            status,
            asyncUsageCount: asyncUsageCount.toString()
          }
        }
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  }, showDiscount = (discountId) => {
    console.log("Showing discount with ID:", discountId), navigate(`../../app/volume-discount/${functionId}/${discountId}`);
  }, showDiscountByXgetY = (id) => {
    console.log("Showing discount with ID:", id), navigate(`../../app/byXgetYdiscount/${id}`);
  }, openRemoveDiscountModal = (discount2) => {
    setActive(!0);
    let findDiscount = discountList.find((node) => node.discountId === discount2.discountId);
    setDiscount(findDiscount), console.log("Removing discount with ID:", findDiscount);
  }, openRemoveDiscountByXgetYModal = (discount2) => {
    setActiveByXgetYModal(!0);
    let findDiscount = filteredNodesByXGetY.find((node) => node.id === discount2.discountId);
    setDiscount(findDiscount), console.log("Removing discount with ID:", findDiscount);
  }, deleteDiscount = () => {
    if (setActive(!1), console.log(discount), discount !== void 0) {
      let discountToDelete = {
        // @ts-ignore
        method: (discount == null ? void 0 : discount.discount.__typename) !== "DiscountCodeApp" ? import_discount_app_components5.DiscountMethod.Automatic : import_discount_app_components5.DiscountMethod.Code,
        // @ts-ignore
        discountId: discount == null ? void 0 : discount.discountId
      };
      submitForm({ discountDelete: JSON.stringify(discountToDelete) }, { method: "post" }), setCount(1), discountDelete(discount).then(), setActiveToast(!0);
    }
  }, deleteDiscountByXGetY = () => {
    if (setActiveByXgetYModal(!1), console.log(discount), discount !== void 0) {
      let discountToDelete = {
        // @ts-ignore
        method: (discount == null ? void 0 : discount.discount.__typename) === "DiscountCodeBxgy" ? import_discount_app_components5.DiscountMethod.Code : import_discount_app_components5.DiscountMethod.Automatic,
        // @ts-ignore
        discountId: discount == null ? void 0 : discount.id
      };
      submitForm({ discountDelete: JSON.stringify(discountToDelete) }, { method: "post" }), setCount(1), discountDeleteByXGetY(discount).then();
      let discountDataUpdate = discountListData.filter((node) => node.discountId !== discount.id);
      setDiscountDataByXGetY(discountDataUpdate), setActiveToast(!0);
    }
  }, [popoverActiveDiscount, setPopoverActiveDiscount] = (0, import_react11.useState)(!1), [popoverActiveStatus, setPopoverActiveStatus] = (0, import_react11.useState)(!1), [popoverActiveMethod, setPopoverActiveMethod] = (0, import_react11.useState)(!1), [popoverActiveStatusByXGetY, setPopoverActiveStatusByXGetY] = (0, import_react11.useState)(!1), [popoverActiveMethodByXGetY, setPopoverActiveMethodByXGetY] = (0, import_react11.useState)(!1), togglePopoverDiscount = (0, import_react11.useCallback)(
    () => setPopoverActiveDiscount((popoverActive) => !popoverActive),
    []
  ), togglePopoverActiveStatus = (0, import_react11.useCallback)(
    () => setPopoverActiveStatus((popoverActive) => !popoverActive),
    []
  ), togglePopoverActiveMethod = (0, import_react11.useCallback)(
    () => setPopoverActiveMethod((popoverActive) => !popoverActive),
    []
  ), togglePopoverActiveStatusByXGetY = (0, import_react11.useCallback)(
    () => setPopoverActiveStatusByXGetY((popoverActive) => !popoverActive),
    []
  ), togglePopoverActiveMethodByXGetY = (0, import_react11.useCallback)(
    () => setPopoverActiveMethodByXGetY((popoverActive) => !popoverActive),
    []
  ), newDiscount = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: togglePopoverDiscount, variant: "primary", children: "New Discount" }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 598,
    columnNumber: 5
  }, this), activator = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: togglePopoverActiveStatus, disclosure: !0, children: "Status" }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 603,
    columnNumber: 5
  }, this), activator2 = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: togglePopoverActiveMethod, disclosure: !0, children: "Method" }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 608,
    columnNumber: 5
  }, this), activator3 = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: togglePopoverActiveStatusByXGetY, disclosure: !0, children: "Status" }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 613,
    columnNumber: 5
  }, this), activator4 = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: togglePopoverActiveMethodByXGetY, disclosure: !0, children: "Method" }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 618,
    columnNumber: 5
  }, this), handleAllDiscountApp = () => {
    setDiscountData(discountListDataBefore);
  }, handleAllDiscountAppByXGetY = () => {
    setDiscountDataByXGetY(discountListDataByXGetYBefore);
  }, handleDiscountAppActive = () => {
    let activeDiscounts = discountListDataBefore.filter(
      (discount2) => discount2.status === "ACTIVE"
    );
    activeDiscounts.length === 0 ? (setMessage("Discount not found"), setActiveMessage(!0)) : setDiscountData(activeDiscounts);
  }, handleDiscountAppActiveByXGetY = () => {
    let activeDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      (discount2) => discount2.status === "ACTIVE"
    );
    activeDiscountsByXGetY.length === 0 ? (setMessage("Discount not found"), setActiveMessage(!0)) : setDiscountDataByXGetY(activeDiscountsByXGetY);
  }, handleDiscountAppExpired = () => {
    let expiredDiscounts = discountListDataBefore.filter(
      (discount2) => discount2.status === "EXPIRED"
    );
    expiredDiscounts.length === 0 ? (setMessage("Discount not found"), setActiveMessage(!0)) : setDiscountData(expiredDiscounts);
  }, handleDiscountAppExpiredByXGetY = () => {
    let expiredDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      (discount2) => discount2.status === "EXPIRED"
    );
    expiredDiscountsByXGetY.length === 0 ? (setMessage("Discount not found"), setActiveMessage(!0)) : setDiscountDataByXGetY(expiredDiscountsByXGetY);
  }, handleDiscountAppCode = () => {
    let codeDiscounts = discountListDataBefore.filter(
      (discount2) => discount2.method === "Code"
    );
    setDiscountData(codeDiscounts);
  }, handleDiscountAppCodeByXGetY = () => {
    let codeDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      (discount2) => discount2.method === "Code"
    );
    setDiscountDataByXGetY(codeDiscountsByXGetY);
  }, handleDiscountAppAutomatic = () => {
    let automaticDiscounts = discountListDataBefore.filter(
      (discount2) => discount2.method === "Automatic"
    );
    setDiscountData(automaticDiscounts);
  }, handleDiscountAppAutomaticByXGetY = () => {
    let automaticDiscountsByXGetY = discountListDataByXGetYBefore.filter(
      (discount2) => discount2.method === "Automatic"
    );
    setDiscountDataByXGetY(automaticDiscountsByXGetY);
  }, toastMarkup = activeMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Toast, { content: message, onDismiss: toggleActive, error: !0 }, void 0, !1, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 701,
    columnNumber: 5
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-title-bar", { title: "Discount List" }, void 0, !1, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 705,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { position: "absolute", top: "20px", right: "20px", marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris6.Popover,
      {
        active: popoverActiveDiscount,
        activator: newDiscount,
        autofocusTarget: "first-node",
        onClose: togglePopoverDiscount,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris6.ActionList,
          {
            actionRole: "menuitem",
            items: [
              {
                content: "Code or Automatic",
                onAction: () => navigate(`../../app/volume-discount/${functionId}/new`)
              },
              {
                content: "By x Get y",
                onAction: () => navigate("../../app/byXgetYdiscount/new")
              }
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 714,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 708,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 707,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Page, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginBottom: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { fontWeight: "bold", fontSize: "20px" }, children: "Discount Code And Discount Automatic List" }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 732,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 731,
          columnNumber: 13
        }, this),
        DiscountLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Spinner, { accessibilityLabel: "Spinner example", size: "large" }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 737,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: discountListData.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(EmptyDiscountState, { onAction: () => navigate(`../../app/volume-discount/${functionId}/new`) }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 740,
          columnNumber: 19
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Card, { padding: "0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { display: "flex", marginBottom: "5px" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: handleAllDiscountApp, size: "medium", children: "All discount" }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 746,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 745,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Popover,
              {
                active: popoverActiveStatus,
                activator,
                autofocusTarget: "first-node",
                onClose: togglePopoverActiveStatus,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_polaris6.ActionList,
                  {
                    actionRole: "menuitem",
                    items: [
                      {
                        content: "Active",
                        onAction: handleDiscountAppActive
                      },
                      {
                        content: "EXPIRED",
                        onAction: handleDiscountAppExpired
                      }
                    ]
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.discountList.jsx",
                    lineNumber: 757,
                    columnNumber: 27
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 751,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 750,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Popover,
              {
                active: popoverActiveMethod,
                activator: activator2,
                autofocusTarget: "first-node",
                onClose: togglePopoverActiveMethod,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_polaris6.ActionList,
                  {
                    actionRole: "menuitem",
                    items: [{
                      content: "Code",
                      onAction: handleDiscountAppCode
                    }, {
                      content: "Automatic",
                      onAction: handleDiscountAppAutomatic
                    }]
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.discountList.jsx",
                    lineNumber: 778,
                    columnNumber: 27
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 772,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 771,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 744,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_polaris6.IndexTable,
            {
              resourceName: {
                singular: "Discount List",
                plural: "Discount List"
              },
              itemCount: discountListData.length,
              headings: [
                { title: "Id" },
                { title: "Title" },
                { title: "Method" },
                { title: "Start Date" },
                { title: "Start Time" },
                { title: "End Date" },
                { title: "End Time" },
                { title: "Status" },
                { title: "Used" },
                { title: "Action", hidden: !0 },
                { title: "Action2", hidden: !0 }
              ],
              selectable: !1,
              children: discountListData.map((discount2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Row, { id: discount2.discountId, position: discount2.discountId, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: getId3(discount2.discountId) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 820,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.code !== "" ? discount2.code : discount2.title }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 823,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.method }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 826,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleDateString() }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 829,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleTimeString() }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 832,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleDateString() : "Not set" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 835,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleTimeString() : "Not set" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 838,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { color: setColorStatus(discount2.status) }, children: discount2.status }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 842,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 841,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.asyncUsageCount }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 846,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { variant: "plain", onClick: () => showDiscount(getId3(discount2.discountId)), children: "View discount" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 850,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 849,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { variant: "plain", onClick: () => openRemoveDiscountModal(discount2), children: "Remove" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 854,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 853,
                  columnNumber: 29
                }, this)
              ] }, index, !0, {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 819,
                columnNumber: 27
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 796,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 795,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 743,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 738,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 730,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 729,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginBottom: "20px", marginTop: "30px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { fontWeight: "bold", fontSize: "20px" }, children: "Discount By X get Y List" }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 873,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 872,
          columnNumber: 13
        }, this),
        byXGetYLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Spinner, { accessibilityLabel: "Spinner example", size: "large" }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 878,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: discountListDataByXGetY.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(EmptyDiscountState, { onAction: () => navigate("../../app/byXgetYdiscount/new") }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 881,
          columnNumber: 19
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Card, { padding: "0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { display: "flex", marginBottom: "5px" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { onClick: handleAllDiscountAppByXGetY, size: "medium", children: "All discount" }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 886,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 885,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Popover,
              {
                active: popoverActiveStatusByXGetY,
                activator: activator3,
                autofocusTarget: "first-node",
                onClose: togglePopoverActiveStatusByXGetY,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_polaris6.ActionList,
                  {
                    actionRole: "menuitem",
                    items: [
                      {
                        content: "Active",
                        onAction: handleDiscountAppActiveByXGetY
                      },
                      {
                        content: "EXPIRED",
                        onAction: handleDiscountAppExpiredByXGetY
                      }
                    ]
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.discountList.jsx",
                    lineNumber: 897,
                    columnNumber: 27
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 891,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 890,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { marginRight: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Popover,
              {
                active: popoverActiveMethodByXGetY,
                activator: activator4,
                autofocusTarget: "first-node",
                onClose: togglePopoverActiveMethodByXGetY,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_polaris6.ActionList,
                  {
                    actionRole: "menuitem",
                    items: [{
                      content: "Code",
                      onAction: handleDiscountAppCodeByXGetY
                    }, {
                      content: "Automatic",
                      onAction: handleDiscountAppAutomaticByXGetY
                    }]
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.discountList.jsx",
                    lineNumber: 918,
                    columnNumber: 27
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 912,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 911,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 884,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_polaris6.IndexTable,
            {
              resourceName: {
                singular: "Discount List By X Get Y",
                plural: "Discount List"
              },
              itemCount: discountListDataByXGetY.length,
              headings: [
                { title: "Id" },
                { title: "Title" },
                { title: "Method" },
                { title: "Start Date" },
                { title: "Start Time" },
                { title: "End Date" },
                { title: "End Time" },
                { title: "Status" },
                { title: "Used" },
                { title: "Action", hidden: !0 },
                { title: "Action2", hidden: !0 }
              ],
              selectable: !1,
              children: discountListDataByXGetY.map((discount2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Row, { id: discount2.discountId, position: discount2.discountId, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: getId3(discount2.discountId) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 960,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.code !== "" ? discount2.code : discount2.title }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 963,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.method }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 966,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleDateString() }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 969,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: new Date(discount2.startsAt).toLocaleTimeString() }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 972,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleDateString() : "Not set" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 975,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.endsAt !== "" ? new Date(discount2.endsAt).toLocaleTimeString() : "Not set" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 978,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { color: setColorStatus(discount2.status) }, children: discount2.status }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 982,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 981,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: discount2.asyncUsageCount }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 986,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { variant: "plain", onClick: () => showDiscountByXgetY(discount2.id), children: "View discount" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 990,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 989,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { variant: "plain", onClick: () => openRemoveDiscountByXgetYModal(discount2), children: "Remove" }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 994,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.discountList.jsx",
                  lineNumber: 993,
                  columnNumber: 29
                }, this)
              ] }, index, !0, {
                fileName: "app/routes/app.discountList.jsx",
                lineNumber: 959,
                columnNumber: 27
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.discountList.jsx",
              lineNumber: 935,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.discountList.jsx",
            lineNumber: 934,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 883,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 879,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 871,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 870,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 728,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { height: "500px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Frame, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_polaris6.Modal,
        {
          open: active,
          onClose: () => setActive(!1),
          title: "Are you sure to delete this discount ?",
          primaryAction: {
            content: "Delete",
            onAction: deleteDiscount
          },
          secondaryActions: [
            {
              content: "Cancel",
              onAction: () => setActive(!1)
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 1011,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_polaris6.Modal,
        {
          open: activeByXgetYModal,
          onClose: () => setActiveByXgetYModal(!1),
          title: "Are you sure to delete this discount _222 ?",
          primaryAction: {
            content: "Delete",
            onAction: deleteDiscountByXGetY
          },
          secondaryActions: [
            {
              content: "Cancel",
              onAction: () => setActiveByXgetYModal(!1)
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.discountList.jsx",
          lineNumber: 1027,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 1010,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 1009,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { height: "250px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Frame, { children: [
      activeToast ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Toast, { content: "Discount Delete", onDismiss: () => setActiveToast(!1) }, void 0, !1, {
        fileName: "app/routes/app.discountList.jsx",
        lineNumber: 1048,
        columnNumber: 13
      }, this) : null,
      toastMarkup
    ] }, void 0, !0, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 1046,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.discountList.jsx",
      lineNumber: 1045,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.discountList.jsx",
    lineNumber: 704,
    columnNumber: 5
  }, this);
}, app_discountList_default = DiscountList;

// server-entry-module:@remix-run/dev/server-build
var route6 = __toESM(require_app_labe_create());

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  action: () => action6,
  default: () => AdditionalPage
});
var import_client10 = require("@apollo/client"), import_react13 = require("react"), import_polaris7 = require("@shopify/polaris");
var import_node8 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function action6({ request }) {
  let { admin } = await authenticate.admin(request), responseJson = await (await admin.graphql(
    `#graphql
      query {
  shopifyFunctions(first: 25) {
    nodes {
      app {
        title
      }
      apiType
      title
      id
    }
  }
}`
  )).json();
  return (0, import_node8.json)({
    product: responseJson
  });
}
function AdditionalPage() {
  let actionData = (0, import_react14.useActionData)();
  return (0, import_react13.useEffect)(() => {
    console.log(actionData);
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.BlockStack, { gap: "300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_polaris7.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.additional.jsx",
              lineNumber: 61,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 71,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 72,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 73,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.List, { gap: "extraTight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_polaris7.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 86,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_polaris7.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "100",
      paddingInlineEnd: "100",
      background: "bg-surface-active",
      borderWidth: "100",
      borderColor: "border",
      borderRadius: "100",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 114,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 104,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.shopInfo.jsx
var app_shopInfo_exports = {};
__export(app_shopInfo_exports, {
  default: () => Index,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_axios6 = __toESM(require("axios")), import_polaris8 = require("@shopify/polaris"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios6.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  );
  return (0, import_node9.json)({ shop: shopData });
};
function Index() {
  let { shop } = (0, import_react15.useLoaderData)();
  return console.log(shop), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris8.Box, { paddingBlockEnd: "300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris8.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris8.BlockStack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Name",
        autoComplete: "on",
        value: shop.name
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 44,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Email",
        autoComplete: "on",
        value: shop.email
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 49,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Access Token",
        autoComplete: "on",
        value: shop.accessToken
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 54,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Shop",
        autoComplete: "on",
        value: shop.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 59,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Domain",
        autoComplete: "on",
        value: shop.domain
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 64,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Scope",
        autoComplete: "on",
        value: shop.scope
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 69,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "My shop domain",
        autoComplete: "on",
        value: shop.myshopify_domain
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 74,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Country",
        autoComplete: "on",
        value: shop.country_name
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 79,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.TextField,
      {
        label: "Phone",
        autoComplete: "on",
        value: shop.phone
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.shopInfo.jsx",
        lineNumber: 84,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 43,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.shopInfo.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action7,
  default: () => Index2,
  loader: () => loader7
});
var import_react16 = require("react"), import_node10 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_polaris9 = require("@shopify/polaris");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let { session } = await authenticate.admin(request);
  return (0, import_node10.json)({ shop: session.shop.replace(".myshopify.com", "") });
};
async function action7({ request }) {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }]
        }
      }
    }
  )).json();
  return (0, import_node10.json)({
    product: responseJson.data.productCreate.product
  });
}
function Index2() {
  var _a2;
  let nav = (0, import_react17.useNavigation)(), { shop } = (0, import_react17.useLoaderData)(), actionData = (0, import_react17.useActionData)(), submit = (0, import_react17.useSubmit)(), isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST", productId = (_a2 = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a2.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react16.useEffect)(() => {
    productId && shopify.toast.show("Product created");
  }, [productId]);
  let generateProduct = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ui-title-bar", { title: "Remix app template", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389}" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 110,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_polaris9.Link,
              {
                url: "https://shopify.dev/docs/apps/tools/app-bridge",
                target: "_blank",
                children: "App Bridge"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 115,
                columnNumber: 21
              },
              this
            ),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Link, { url: "/app/additional", children: "additional page in the app nav" }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 122,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_polaris9.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql",
                target: "_blank",
                children: "Admin GraphQL"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 126,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 113,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_polaris9.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate",
                target: "_blank",
                children: "productCreate"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 143,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation in our API references."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 140,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.InlineStack, { gap: "300", align: "end", children: [
          (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_polaris9.Button,
            {
              url: `https://admin.shopify.com/store/${shop}/admin/products/${productId}`,
              target: "_blank",
              children: "View product"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 154,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_polaris9.Button,
            {
              loading: isLoading,
              variant: "primary",
              onClick: generateProduct,
              children: "Generate a product"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 161,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 152,
          columnNumber: 17
        }, this),
        (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_polaris9.Box,
          {
            padding: "400",
            background: "bg-surface-active",
            borderColor: "border",
            borderWidth: "100",
            borderRadius: "200",
            overflowX: "scroll",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("pre", { style: { margin: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 179,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 178,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 170,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 108,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 194,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Link, { url: "https://remix.run", target: "_blank", children: "Remix" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 199,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 195,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 203,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 205,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Link, { url: "https://www.prisma.io/", target: "_blank", children: "Prisma" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 208,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 204,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 212,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 214,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Link, { url: "https://polaris.shopify.com", target: "_blank", children: "Polaris" }, void 0, !1, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 218,
                  columnNumber: 25
                }, this),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  import_polaris9.Link,
                  {
                    url: "https://shopify.dev/docs/apps/tools/app-bridge",
                    target: "_blank",
                    children: "App Bridge"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app._index.jsx",
                    lineNumber: 222,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 217,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 213,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 230,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 232,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                import_polaris9.Link,
                {
                  url: "https://shopify.dev/docs/api/admin-graphql",
                  target: "_blank",
                  children: "GraphQL API"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 235,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 231,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 193,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 189,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 247,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.List, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                import_polaris9.Link,
                {
                  url: "https://shopify.dev/docs/apps/getting-started/build-app-example",
                  target: "_blank",
                  children: [
                    " ",
                    "example app"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 253,
                  columnNumber: 23
                },
                this
              ),
              " ",
              "to get started"
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 251,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                import_polaris9.Link,
                {
                  url: "https://shopify.dev/docs/apps/tools/graphiql-admin-api",
                  target: "_blank",
                  children: "GraphiQL"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 264,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 262,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 250,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 246,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 245,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 186,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action8,
  default: () => Auth,
  links: () => links,
  loader: () => loader8
});
var import_react18 = require("react"), import_node11 = require("@remix-run/node"), import_polaris10 = require("@shopify/polaris"), import_react19 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-U2YDFDMP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
async function loader8({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node11.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}
async function action8({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node11.json)({
    errors
  });
}
function Auth() {
  let { polarisTranslations } = (0, import_react19.useLoaderData)(), loaderData = (0, import_react19.useLoaderData)(), actionData = (0, import_react19.useActionData)(), [shop, setShop] = (0, import_react18.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_polaris10.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 54,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris10.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/app.label.jsx
var app_label_exports = {};
__export(app_label_exports, {
  default: () => app_label_default
});
var import_polaris11 = require("@shopify/polaris"), import_react20 = require("react"), import_react21 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), EmptyDiscountState2 = ({ onAction }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_polaris11.EmptyState,
  {
    heading: "Create your first label",
    action: {
      content: "Create label",
      onAction
    },
    secondaryAction: {
      content: "Learn more",
      url: "https://help.shopify.com"
    },
    image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Create labels by adding text or images to your product images to highlight key features" }, void 0, !1, {
      fileName: "app/routes/app.label.jsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), LabelList = () => {
  let ListLabel = [123, 23], navigate = (0, import_react21.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: ListLabel.length === 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(EmptyDiscountState2, { onAction: () => navigate("../../app/label/create") }, void 0, !1, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: "123" }, void 0, !1, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.label.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, app_label_default = LabelList;

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action9
});
var action9 = async ({ request }) => {
  let { topic, shop, session } = await authenticate.webhook(request);
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader9
});
var import_node12 = require("@remix-run/node"), import_react22 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }];
async function loader9({ request }) {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node12.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node12.json)({ showForm: Boolean(login) });
}
function App2() {
  let { showForm } = (0, import_react22.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react22.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader10
});
async function loader10({ request }) {
  return await authenticate.admin(request), null;
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader11
});
var import_react23 = require("react"), import_node13 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_app_bridge_react = require("@shopify/app-bridge-react");

// app/components/providers/DiscountProvider.jsx
var import_discount_app_components6 = require("@shopify/discount-app-components");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function DiscountProvider({ children, timezone }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_discount_app_components6.AppProvider, { locale: "en-US", ianaTimezone: timezone, children }, void 0, !1, {
    fileName: "app/components/providers/DiscountProvider.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/app.jsx
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react25 = require("@shopify/shopify-app-remix/react");
var import_axios7 = __toESM(require("axios"));
var import_client11 = require("@apollo/client");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function loader11({ request }) {
  await authenticate.admin(request);
  let url = new URL(request.url), { session } = await authenticate.admin(request), shop, config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json"
    }
  };
  shop = await import_axios7.default.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  ), shop = shop.data.shop;
  let shopData = await store_model_default.findOne(
    {
      id: shop.id
    }
  );
  return (0, import_node13.json)({
    apiKey: process.env.SHOPIFY_API_KEY,
    host: url.searchParams.get("host"),
    shop: shopData,
    session,
    shopInfo: shop
  });
}
function App3() {
  let { apiKey, host, shop, shopInfo, session } = (0, import_react24.useLoaderData)(), [timeZone, setTimeZone] = (0, import_react23.useState)(shopInfo.iana_timezone), [createStore] = (0, import_client11.useMutation)(CREATE_STORE), [storeCreated, setStoreCreated] = (0, import_react23.useState)(!1), storeCreate = async () => {
    try {
      let createPromise = await createStore({
        variables: {
          input: {
            id: shopInfo.id.toString(),
            name: shopInfo.name,
            email: shopInfo.email,
            shop: shopInfo.name,
            domain: shopInfo.domain,
            scope: session.scope,
            country: shopInfo.country_name,
            customer_email: shopInfo.customer_email,
            myshopify_domain: shopInfo.myshopify_domain,
            plan_name: shopInfo.plan_name,
            plan_display_name: shopInfo.plan_display_name,
            shop_owner: shopInfo.shop_owner,
            iana_timezone: shopInfo.iana_timezone,
            currency: shopInfo.currency,
            address1: shopInfo.address1 || "NULL",
            address2: shopInfo.address2 || "NULL",
            phone: shopInfo.phone || "NULL",
            created_at: shopInfo.created_at,
            accessToken: session.accessToken
          }
        }
      }), timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Update program timed out"));
        }, 1e4);
      });
      await Promise.race([createPromise, timeoutPromise]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  (0, import_react23.useEffect)(() => {
    shop ? setTimeZone(shop.iana_timezone) : (setTimeZone(shopInfo.iana_timezone), setStoreCreated(!0));
  }, []), (0, import_react23.useEffect)(() => {
    storeCreated && storeCreate().then();
  }, [storeCreated]);
  let [config] = (0, import_react23.useState)({ host, apiKey });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react25.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_app_bridge_react.Provider, { config, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DiscountProvider, { timezone: timeZone, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/app/discountList", children: "Discounts List" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 127,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/app/shopInfo", children: "Shop Infomation" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/app/label", children: "Label" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 122,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 131,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 121,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 120,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react24.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RL4CBNRS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-OOXE47GJ.js", "/build/_shared/chunk-TFSQ7PF6.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WPCLGD5A.js", imports: ["/build/_shared/chunk-VJGS4LNA.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-TFHNH54L.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-WL2TFRVJ.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-QDXPZB3I.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-HN52GLY7.js", "/build/_shared/chunk-CB7CFRQ5.js", "/build/_shared/chunk-X4VQBRVX.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-VFZNXVA4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-WITVK3RH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.byXgetYdiscount.$id": { id: "routes/app.byXgetYdiscount.$id", parentId: "routes/app", path: "byXgetYdiscount/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.byXgetYdiscount.$id-IXMNYZXS.js", imports: ["/build/_shared/chunk-E2CTCRX3.js", "/build/_shared/chunk-OWNOZYKR.js", "/build/_shared/chunk-VJGS4LNA.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.byXgetYdiscount.new": { id: "routes/app.byXgetYdiscount.new", parentId: "routes/app", path: "byXgetYdiscount/new", index: void 0, caseSensitive: void 0, module: "/build/routes/app.byXgetYdiscount.new-JSKODKFO.js", imports: ["/build/_shared/chunk-E2CTCRX3.js", "/build/_shared/chunk-OWNOZYKR.js", "/build/_shared/chunk-VJGS4LNA.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.discountList": { id: "routes/app.discountList", parentId: "routes/app", path: "discountList", index: void 0, caseSensitive: void 0, module: "/build/routes/app.discountList-BQS3OBPR.js", imports: ["/build/_shared/chunk-OWNOZYKR.js", "/build/_shared/chunk-VJGS4LNA.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.labe.create": { id: "routes/app.labe.create", parentId: "routes/app", path: "labe/create", index: void 0, caseSensitive: void 0, module: "/build/routes/app.labe.create-YBL3X6Q7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.label": { id: "routes/app.label", parentId: "routes/app", path: "label", index: void 0, caseSensitive: void 0, module: "/build/routes/app.label-RED56K5W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.shopInfo": { id: "routes/app.shopInfo", parentId: "routes/app", path: "shopInfo", index: void 0, caseSensitive: void 0, module: "/build/routes/app.shopInfo-TO4UVCHK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.volume-discount.$functionId.$id": { id: "routes/app.volume-discount.$functionId.$id", parentId: "routes/app", path: "volume-discount/:functionId/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.volume-discount.$functionId.$id-OANKJE35.js", imports: ["/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-E2CTCRX3.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.volume-discount.$functionId.new": { id: "routes/app.volume-discount.$functionId.new", parentId: "routes/app", path: "volume-discount/:functionId/new", index: void 0, caseSensitive: void 0, module: "/build/routes/app.volume-discount.$functionId.new-GANO6EAF.js", imports: ["/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-E2CTCRX3.js", "/build/_shared/chunk-OWNOZYKR.js", "/build/_shared/chunk-VJGS4LNA.js", "/build/_shared/chunk-UCOQG5ZQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-G6C6ZVMV.js", imports: ["/build/_shared/chunk-QDXPZB3I.js", "/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-X4VQBRVX.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5f6f4e76", hmr: { runtime: "/build/_shared/chunk-TFSQ7PF6.js", timestamp: 1714898973758 }, url: "/build/manifest-5F6F4E76.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: { port: "36743" }, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.volume-discount.$functionId.$id": {
    id: "routes/app.volume-discount.$functionId.$id",
    parentId: "routes/app",
    path: "volume-discount/:functionId/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_volume_discount_functionId_id_exports
  },
  "routes/app.volume-discount.$functionId.new": {
    id: "routes/app.volume-discount.$functionId.new",
    parentId: "routes/app",
    path: "volume-discount/:functionId/new",
    index: void 0,
    caseSensitive: void 0,
    module: app_volume_discount_functionId_new_exports
  },
  "routes/app.byXgetYdiscount.$id": {
    id: "routes/app.byXgetYdiscount.$id",
    parentId: "routes/app",
    path: "byXgetYdiscount/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_byXgetYdiscount_id_exports
  },
  "routes/app.byXgetYdiscount.new": {
    id: "routes/app.byXgetYdiscount.new",
    parentId: "routes/app",
    path: "byXgetYdiscount/new",
    index: void 0,
    caseSensitive: void 0,
    module: app_byXgetYdiscount_new_exports
  },
  "routes/app.discountList": {
    id: "routes/app.discountList",
    parentId: "routes/app",
    path: "discountList",
    index: void 0,
    caseSensitive: void 0,
    module: app_discountList_exports
  },
  "routes/app.labe.create": {
    id: "routes/app.labe.create",
    parentId: "routes/app",
    path: "labe/create",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app.shopInfo": {
    id: "routes/app.shopInfo",
    parentId: "routes/app",
    path: "shopInfo",
    index: void 0,
    caseSensitive: void 0,
    module: app_shopInfo_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/app.label": {
    id: "routes/app.label",
    parentId: "routes/app",
    path: "label",
    index: void 0,
    caseSensitive: void 0,
    module: app_label_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
