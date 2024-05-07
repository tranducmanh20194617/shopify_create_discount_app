import mongoose from "mongoose";
const Schema = mongoose.Schema;

const discountSchema = new Schema({
  storeId: {
    type: String,
  },
  id: {
    type: String,
  },
  discountId: {
    type: String,
  },
  code: {
    type: String,
  },
  title: {
    type: String,
  },
  method: {
    type: String,
    required: true,
  },
  combinesWith: {
    type: String,

  },
  usageLimit: {
    type: String,
  },
  appliesOncePerCustomer: {
    type: Boolean,
  },
  startsAt: {
    type: String,
    required: true,
  },
  endsAt: {
    type: String,
  },
  asyncUsageCount: {
    type: String,
  },
  status:{
    type:String,
  },

  quantityPurchase:{
    type:String,
  },
  amountPurchase:{
    type:String,
  },
  quantityGet:{
    type:String,
  },
  percentageGet:{
    type:String,
  },
  productPurchase:{
    type:String,
  },
  productPurchaseId:{
    type:String,
  },
  productGet:{
    type:String,
  },
  productGetId:{
    type:String,
  }
});

export default mongoose.model('ByXGetYDiscount', discountSchema);
