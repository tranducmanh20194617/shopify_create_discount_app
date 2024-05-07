import {
  gql
} from "/build/_shared/chunk-UCOQG5ZQ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TFSQ7PF6.js";

// app/graphql/query.js
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/query.js"
  );
  import.meta.hot.lastModified = "1714728065098.3384";
}
var HELLO_QUERY = gql`
    query hello {
        hello
    }
`;
var GET_ALL_DISCOUNT = gql`
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
`;
var GET_ALL_DISCOUNT_BY_X_GET_Y = gql`
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
`;
var GET_ONB_DISCOUNT_BY_X_GET_Y = gql`
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

export {
  GET_ALL_DISCOUNT,
  GET_ALL_DISCOUNT_BY_X_GET_Y,
  GET_ONB_DISCOUNT_BY_X_GET_Y
};
//# sourceMappingURL=/build/_shared/chunk-OWNOZYKR.js.map
