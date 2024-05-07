// @ts-ignore
import { gql } from "@apollo/client";

export const CREATE_STORE = gql`
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
`;

export const CREATE_DISCOUNT = gql`
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
`;
export const CREATE_DISCOUNT_BY_X_GET_Y = gql`
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
`;


export const UPDATE_DISCOUNT = gql`
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
`;
export const UPDATE_DISCOUNT_BY_X_GET_Y = gql`
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
`;

export const UPDATE_DISCOUNT_STATUS_AND_COUNT = gql`
    mutation UpdateStatusAndUseCount($input : UpdateDiscountStatusAndUseCountInput) {
        updateStatusAndUseCount(input : $input) {
             status,
             asyncUsageCount
        }
    }
`;
export const UPDATE_DISCOUNT_STATUS_AND_COUNT_BY_X_GET_Y = gql`
    mutation UpdateStatusAndUseCountByXGetY($input : UpdateDiscountByXGetYStatusAndUseCountInput) {
        updateStatusAndUseCountByXGetY(input : $input) {
             status,
             asyncUsageCount
        }
    }
`;


export const DELETE_DISCOUNT = gql`
    mutation DeleteDiscount($input : DeleteDiscountInput) {
        deleteDiscount(input : $input) {
            discountId
        }
    }
`;
export const DELETE_DISCOUNT_BY_X_GET_Y = gql`
    mutation DeleteDiscountByXGetY($input : DeleteDiscountByXGetYInput) {
        deleteDiscountByXGetY(input : $input) {
            discountId
        }
    }
`;

