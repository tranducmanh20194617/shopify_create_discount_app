import DiscountModel from "~/models/discount.model";
import DiscountByXGetYModel from "~/models/byXGetYDiscount.model";

import jwt from 'jsonwebtoken';
import StoreModel from "~/models/store.model";

export const verifyToken = async (bearerToken) => {
  if (!bearerToken) {
    throw new Error('You have to provide bearer token on the request headers');
  } else {
    const token = bearerToken.split(' ')[1];
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    console.log('DECODED: ', decoded);
    if (!decoded) {
      throw new Error('Invalid access token');
    }
    return true;
  }
}

export const resolver = {
    hello: () => {
        return "Hello World";
    },
  createStore : async ({ input }) => {
    const [store] = await Promise.all([StoreModel.create(input)]);
    return store;
  },
   getAllDiscount: async () => {
     return await DiscountModel.find({});
  },
  getAllDiscountByXGetY : async () => {
    return await DiscountByXGetYModel.find({});
  },
  getOneDiscountByXGetY: async ({input}) => {
    return await DiscountByXGetYModel.findOne({
      id: input.id,
      storeId:input.storeId,
    })
  },

  createDiscount : async ({ input }) => {
    const [discount] = await Promise.all([DiscountModel.create(input)]);
    return discount;
  },

  createDiscountByXGetY : async ({ input }) => {
    const [discount] = await Promise.all([DiscountByXGetYModel.create(input)]);
    return discount;
  },
  updateDiscount : async ({ input }) => {
    return DiscountModel.findOneAndUpdate({
      discountId: input.discountId,
      storeId:input.storeId,
    }, {
      title:input.title,
      code:input.code,
      method:input.method,
      combinesWith:input.combinesWith,
      usageLimit:input.usageLimit,
      status:input.status,
      startsAt:input.startsAt,
      endsAt:input.endsAt,
      asyncUsageCount:input.asyncUsageCount,
      appliesOncePerCustomer:input.appliesOncePerCustomer,
      amount_1:input.amount_1,
      amount_2:input.amount_2,
      amount_3:input.amount_3,
      appliesToEachItem_1:input.appliesToEachItem_1,
      appliesToEachItem_2:input.appliesToEachItem_2,
      appliesToEachItem_3:input.appliesToEachItem_3,
      percentage_1:input.percentage_1,
      percentage_2:input.percentage_2,
      percentage_3:input.percentage_3,
      product_1:input.product_1,
      product_2:input.product_2,
      product_3:input.product_3,
      quantity_1:input.quantity_1,
      quantity_2:input.quantity_2,
      quantity_3:input.quantity_3,
      type: input.type,

    }, {
      returnDocument: "after",
      new: true
    })
    },
  updateDiscountByXGetY : async ({ input }) => {
    return DiscountByXGetYModel.findOneAndUpdate({
      discountId: input.discountId,
      storeId:input.storeId,
    }, {
      title:input.title,
      code:input.code,
      method:input.method,
      combinesWith:input.combinesWith,
      usageLimit:input.usageLimit,
      status:input.status,
      startsAt:input.startsAt,
      endsAt:input.endsAt,
      asyncUsageCount:input.asyncUsageCount,
      appliesOncePerCustomer:input.appliesOncePerCustomer,
      quantityPurchase: input.quantityPurchase,
      amountPurchase: input.amountPurchase,
      quantityGet:input.quantityGet,
      percentageGet: input.percentageGet,
      productPurchase:input.productPurchase,
      productPurchaseId:input.productPurchaseId,
      productGet:input.productGet,
      productGetId:input.productGetId,

    }, {
      returnDocument: "after",
      new: true
    })
  },

  updateStatusAndUseCount : async ({ input }) => {
    return DiscountModel.findOneAndUpdate({
      discountId: input.discountId,
      storeId:input.storeId,
    }, {
      status:input.status,
      asyncUsageCount:input.asyncUsageCount.toString(),
    }, {
      returnDocument: "after",
      new: true
    })
  },
  updateStatusAndUseCountByXGetY : async ({ input }) => {
    return DiscountByXGetYModel.findOneAndUpdate({
      discountId: input.discountId,
      storeId:input.storeId,
    }, {
      status:input.status,
      asyncUsageCount:input.asyncUsageCount.toString(),
    }, {
      returnDocument: "after",
      new: true
    })
  },
  deleteDiscount : async ({ input }) => {
  return DiscountModel.findOneAndDelete({
    discountId:input.discountId,
    storeId:input.storeId,

  },{
    returnDocument: "after",
    new: true
  })
  },
  deleteDiscountByXGetY : async ({ input }) => {
    return DiscountByXGetYModel.findOneAndDelete({
      discountId:input.discountId,
      storeId:input.storeId,

    },{
      returnDocument: "after",
      new: true
    })
  },

}
