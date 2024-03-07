// @ 1) without using concept of "Context"

import { categoriesData, productsData } from "../db.js";

export const Query = {
  allProducts: (parent, args, context) => {
    let filter = args.filter;
    let filteredProducts = productsData;
    if (filter) {
      if (filter.onSale === true) {
        return filteredProducts.filter((item) => item.onSale);
      }
    }
    return productsData;
  },
  singleProduct: (parent, args, context) => {
    return productsData.find((singleItem) => singleItem.id === args.id);
  },
  allCategories: () => {
    return categoriesData;
  },
  singleCategory: (parent, args, context) => {
    // const categoriesData = context.categoriesData;
    return categoriesData.find((singleItem) => singleItem.id === args.id);
  },
};
