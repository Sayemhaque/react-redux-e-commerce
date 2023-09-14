import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath:"baseApi",
  baseQuery: fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: () => "/products"
    }),
  })
})

export const {useGetProductsQuery} = baseApi;
