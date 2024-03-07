// @  1) without using concept of "Context"

import { categoriesData, productsData, reviewsData } from "../db.js";

export const PRODUCT = {
  categoryName: (parent, args, context) => {
    return categoriesData.find((item) => item.id === parent.categoryId);
  },
  reviewsOfEachProduct: (parent, args, context) => {
    console.log(parent.id);
    return reviewsData.filter((item) => item.productId === parent.id);
  },
};
