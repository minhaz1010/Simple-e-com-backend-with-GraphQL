import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// ! typeDefs are basically Schema
// ! thik jei naame schema set korte hbe sei naamei amader ke resolver e function create korte hbe
export const typeDefs = `
 type Query{
   allProducts(filter:filteredProducts):[PRODUCT!]!                # //@ array hobe karon onk gula jinish pabo ejnne
   singleProduct(id:ID!):PRODUCT          # // @ array hobe na karon ekta matro jinish pabo ejonne
   allCategories:[CATEGORY!]!,
   singleCategory(id:ID!):CATEGORY,
 }

 type PRODUCT {
  id:ID!
  name:String!,
  description:String!,
  quantity:Int!,
  price:Float!,
  image:String!,
  onSale:Boolean!,
  categoryId: ID!,
  categoryName: CATEGORY!
  reviewsOfEachProduct:[REVIEW]
 }

 type CATEGORY {
  id:ID!,
  name:String!,
  getProductsByCategory:[PRODUCT!]!
 }

  type REVIEW {
    id:ID!,
    date:String!,
    title:String!,
    comment:String!,
    rating:Int,
    productId:ID!
  }

  input filteredProducts{
    onSale:Boolean!
  }

`;
