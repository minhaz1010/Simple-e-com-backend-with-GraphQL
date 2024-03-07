import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { categoriesData, productsData } from "./db.js";
import { typeDefs } from "./schema.js";
import { Query } from "./resolver/QueryOfResolver.js";
import { PRODUCT } from "./resolver/ProductOfResolver.js";
import { CATEGORY } from "./resolver/CategoryOfResolver.js";

// // ! typeDefs are basically Schema
// // ! thik jei naame schema set korte hbe sei naamei amader ke resolver e function create korte hbe
// const typeDefs = `
//  type Query{
//    allProducts:[PRODUCT!]!                # //@ array hobe karon onk gula jinish pabo ejnne
//    singleProduct(id:ID!):PRODUCT          # // @ array hobe na karon ekta matro jinish pabo ejonne
//    allCategories:[CATEGORY!]!,
//    singleCategory(id:ID!):CATEGORY,
//  }

//  type PRODUCT {
//   id:ID!
//   name:String!,
//   description:String!,
//   quantity:Int!,
//   price:Float!,
//   image:String!,
//   onSale:Boolean!,
//   categoryId: ID!,
//   categoryName: CATEGORY!
//  }

//  type CATEGORY {
//   id:ID!,
//   name:String!,
//   getProductsByCategory:[PRODUCT!]!
//  }

// `;
// ! resolvers are basically how to fetch the data [logical ]
// const resolvers = {
//   Query: {
//     allProducts: () => productsData,
//     singleProduct: (parent, args, context) => {
//       return productsData.find((singleItem) => singleItem.id === args.id);
//     },
//     allCategories: () => {
//       return categoriesData;
//     },
//     singleCategory: (parent, args, context) => {
//       return categoriesData.find((singleItem) => singleItem.id === args.id);
//     },
//   },
//   CATEGORY: {
//     getProductsByCategory: (parent, args, context) => {
//       return productsData.filter(
//         (singleItem) => singleItem.categoryId === parent.id
//       );
//     },
//   },
//   PRODUCT: {
//     categoryName: (parent, args, context) => {
//       return categoriesData.find((item) => item.id === parent.categoryId);
//     },
//   },
// };

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    PRODUCT,
    CATEGORY,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀  Server ready at: ${url}`);
