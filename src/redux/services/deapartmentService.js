import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (header) => {
      header.set("Authorization", localStorage.getItem("token") || null);
      return header;
    },
  }),
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => `/academic/department`,
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentApi;
