import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath:"baseApi",
  baseQuery: fetchBaseQuery({baseUrl:"featured.json"}),
  endpoints: (builder) => ({
    getFeatureProducts: builder.query({
        query: () => ""
    }),
  })
})

export const {useGetFeatureProductsQuery} = baseApi;
