import mongoose from "mongoose";
const Schema = mongoose.Schema;

const discountSchema = new Schema({
  storeId: {
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
  type:{
    type:String,
  },
  quantity_1:{
    type:String,
  },
  quantity_2:{
    type:String,
  },
  quantity_3:{
    type:String,
  },
  amount_1:{
    type:String,
  },
  amount_2:{
    type:String,
  },
  amount_3:{
    type:String,
  },
  appliesToEachItem_1:{
    type:Boolean,
  },
  appliesToEachItem_2:{
    type:Boolean,
  },
  appliesToEachItem_3:{
    type:Boolean,
  },
  percentage_1:{
    type:String,
  },
  percentage_2:{
    type:String,
  },
  percentage_3:{
    type:String,
  },
  product_1:{
    type:String,
  },
  product_2:{
    type:String,
  },
  product_3:{
    type:String,
  }


});

export default mongoose.model('Discount', discountSchema);
