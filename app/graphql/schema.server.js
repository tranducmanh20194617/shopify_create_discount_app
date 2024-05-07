const { buildSchema } = require("graphql")
export const schema = buildSchema(`
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
`)
