import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (header) => {
      header.set("Authorization", localStorage.getItem("token") || null);
      return header;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: content,
        };
      },
    }),
    // create a user by admin
    createUser: builder.mutation({
      query: (content) => {
        return {
          url: `auth/create-user`,
          method: "POST",
          body: content,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useCreateUserMutation } = authApi;
