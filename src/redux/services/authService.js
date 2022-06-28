import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: content,
          headers: {
            // header will be go here...
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
