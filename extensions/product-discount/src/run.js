// @ts-nocheck
import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").Target} Target
 * @typedef {import("../generated/api").ProductVariant} ProductVariant
 */

/**
 * @type {FunctionRunResult}
//  */
// const EMPTY_DISCOUNT = {
//   discountApplicationStrategy: DiscountApplicationStrategy.First,
//   discounts: [],
// };

/**
 * @param {RunInput} input
 */
export function run(input) {
  const configuration = JSON.parse(
    input?.discountNode?.metafield?.value ?? "{}"
  );

  const targets1 = input.cart.lines
    .filter(line => line.quantity >= configuration.quantity &&
      line.merchandise.__typename === "ProductVariant")
    .map(line => {
      const variant = /** @type {ProductVariant} */ (line.merchandise);
      if (configuration.products1.length > 0) {
        const matchedProduct = configuration.products1.find(product => product.productVariantId === variant.id);
        if (matchedProduct) {
          return /** @type {Target} */ ({
            productVariant: {
              id: variant.id,
              quantity: line.quantity
            }
          });
        } else {
          return null;
        }
      } else {
        return [];
      }
    }).filter(Boolean);

  const targets2 = input.cart.lines
    .filter(line => line.quantity >= configuration.quantity2 &&
      line.merchandise.__typename === "ProductVariant")
    .map(line => {
      const variant = /** @type {ProductVariant} */ (line.merchandise);
      if (configuration.products2.length > 0) {
        const matchedProduct = configuration.products2.find(product => product.productVariantId === variant.id);
        if (matchedProduct) {
          return /** @type {Target} */ ({
            productVariant: {
              id: variant.id,
              quantity: line.quantity
            }
          });
        } else {
          return null;
        }
      } else {
        return [];
      }
    }).filter(Boolean);

  const targets3 = input.cart.lines
    .filter(line => line.quantity >= configuration.quantity3 &&
      line.merchandise.__typename === "ProductVariant")
    .map(line => {
      const variant = /** @type {ProductVariant} */ (line.merchandise);
      if (configuration.products3.length > 0) {
        const matchedProduct = configuration.products3.find(product => product.productVariantId === variant.id);
        if (matchedProduct) {
          return /** @type {Target} */ ({
            productVariant: {
              id: variant.id,
              quantity: line.quantity
            }
          });
        } else {
          return null;
        }
      } else {
        return [];
      }
    }).filter(Boolean);

  let discountTarget1;
  let discountTarget2;
  let discountTarget3;
  let chooseTarget;
  if (configuration.products1.length > 0) {
    if (configuration.fixedAmount > 0) {
      discountTarget1 = {
        targets: targets1,
        message: "Discount applied to targets",
        value: {
          fixedAmount: {
            amount: configuration.fixedAmount.toString(),
            appliesToEachItem: configuration.appliesForEachProduct
          }
        }
      };
    } else {
      discountTarget1 = {
        targets: targets1,
        message: "Discount applied to targets",
        value: {
          percentage: {
            value: configuration.percentage.toString()
          }
        }
      };
    }
  } else {
    discountTarget1 = {
      targets:[],
      value: {}
    }
  }

  if (configuration.products2.length > 0) {
    if (configuration.fixedAmount2 > 0) {
      discountTarget2 = {
        targets: targets2,
        message: "Discount applied to targets",
        value: {
          fixedAmount: {
            amount: configuration.fixedAmount2.toString(),
            appliesToEachItem: configuration.appliesForEachProduct2
          }
        }
      };
    } else {
      discountTarget2 = {
        targets: targets2,
        message: "Discount applied to targets",
        value: {
          percentage: {
            value: configuration.percentage2.toString()
          }
        }
      };
    }
  } else {
    discountTarget2 = {
      targets:[],
      value: {}
    };
  }

  if (configuration.products3.length > 0) {
    if (configuration.fixedAmount3 > 0) {
      discountTarget3 = {
        targets: targets3,
        message: "Discount applied to targets",
        value: {
          fixedAmount: {
            amount: configuration.fixedAmount3.toString(),
            appliesToEachItem: configuration.appliesForEachProduct3
          }
        }
      };
    } else {
      discountTarget3 = {
        targets: targets3,
        message: "Discount applied to targets",
        value: {
          percentage: {
            value: configuration.percentage3.toString()
          }
        }
      };
    }
  } else {
    discountTarget3 = {
      targets:[],
      value: {}
    };
  }
  if (targets1.length > 0 || targets2.length > 0 || targets3.length > 0) {
    if (discountTarget1.targets.length > 0 && discountTarget2.targets.length <= 0 && discountTarget3.targets.length <= 0) {
      chooseTarget = [discountTarget1];
    } else if (discountTarget1.targets.length > 0 && discountTarget2.targets.length > 0 && discountTarget3.targets.length <= 0) {
      chooseTarget = [discountTarget1, discountTarget2];
    } else if (discountTarget1.targets.length > 0 && discountTarget2.targets.length > 0 && discountTarget3.targets.length > 0) {
      chooseTarget = [discountTarget1, discountTarget2, discountTarget3];
    }
  }
  else {
   chooseTarget = []
 }

 const AllTargets = input.cart.lines
    .filter(line => line.quantity >= configuration.quantity &&
      line.merchandise.__typename === "ProductVariant")
    .map(line => {
      const variant = /** @type {ProductVariant} */ (line.merchandise);
      return /** @type {Target} */ ({
        productVariant: {
          id: variant.id,
          quantity: line.quantity
        }
      });
    });




  if (configuration.applyTo === "all") {
    if (configuration.fixedAmount > 0) {
      return {
        discounts: [
          {
            targets:AllTargets,
            message: `${configuration.fixedAmount} for discount `,
            value: {
              fixedAmount: {
                amount: configuration.fixedAmount.toString(),
                appliesToEachItem: configuration.appliesForEachProduct
              }
            }
          }
        ],
        discountApplicationStrategy: DiscountApplicationStrategy.First
      };
    } else {
      return {
        discounts: [
          {
            targets:AllTargets,
            value: {
              percentage: {
                value: configuration.percentage.toString()
              }
            }
          }
        ],
        discountApplicationStrategy: DiscountApplicationStrategy.First
      };
    }
  } else {
    return {
      discounts: chooseTarget,
      discountApplicationStrategy: DiscountApplicationStrategy.All
    };
  }
}
