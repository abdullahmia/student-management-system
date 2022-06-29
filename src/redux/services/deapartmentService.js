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
  tagTypes: ["Department"],
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => `/academic/department`,
      // which query will be invalidate
      providesTags: ["Department"],
    }),
    deleteDepartment: builder.mutation({
      query: (id) => {
        return {
          url: `/academic/department/${id}`,
          method: "DELETE",
        };
      },
      // invalidate the query
      invalidatesTags: ["Department"],
    }),
    addDepartment: builder.mutation({
      query: (body) => {
        return {
          url: `/academic/department`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useDeleteDepartmentMutation,
  useAddDepartmentMutation,
} = departmentApi;
