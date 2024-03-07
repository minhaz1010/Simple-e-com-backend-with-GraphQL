//@ 1) without using concept of "Context"

import { productsData } from "../db.js";

export const CATEGORY = {
  getProductsByCategory: (parent, args, context) => {
    return productsData.filter(
      (singleItem) => singleItem.categoryId === parent.id
    );
  },
};
