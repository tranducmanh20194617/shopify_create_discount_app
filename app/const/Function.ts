export const Function = ()=>{
  const validateNumber = (value) => {
    if (isNaN(parseFloat(value)) || parseFloat(value) <=0) {
      return 1;
    }
    return 2;
  };
  const validatePercentage = (value: any)=> {
    if (isNaN(parseFloat(value)) || parseFloat(value) < 0 || parseFloat(value) >= 100) {
      return 1;
    }
    return 2 // không có lỗi, trả về undefined
  };

  return{
    validateNumber,
    validatePercentage
  }
}
