import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath:"baseApi",
  baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
        query: ({category}) => `products/category/${category}`
    }),
    getAllProducts: builder.query({
      query: () => "products"
    })
  })
})

export const {useGetProductsByCategoryQuery,useGetAllProductsQuery} = baseApi;
