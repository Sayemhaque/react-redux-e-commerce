import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath:"baseApi",
  baseQuery: fetchBaseQuery({baseUrl:"https://shopzenith.vercel.app/api/"}),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
        query: ({category}) => `category/${category}`
    }),
    getAllProducts: builder.query({
      query: () => "products"
    }),
    getSingleProduct: builder.query({
      query:({id}) => `products/${id}`
    }),
    getCategoryies: builder.query({
      query:() => "categories"
    })
  })
})

export const {useGetProductsByCategoryQuery,useGetAllProductsQuery,useGetSingleProductQuery,useGetCategoryiesQuery} = baseApi;
