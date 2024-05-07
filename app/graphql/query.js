// @ts-ignore
import { gql } from "@apollo/client";
export const HELLO_QUERY = gql`
    query hello {
        hello
    }
`;

export const GET_ALL_DISCOUNT = gql`
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
export const GET_ALL_DISCOUNT_BY_X_GET_Y = gql`
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
export const GET_ONB_DISCOUNT_BY_X_GET_Y = gql`
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



