import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (header) => {
      header.set("Authorization", localStorage.getItem("token") || null);
      return header;
    },
  }),
  tagTypes: ["profile"],
  endpoints: (builder) => ({
    getTeacherProfile: builder.query({
      query: (id) => `/user/teacher/${id}`,
    }),
  }),
});

export const { useGetTeacherProfileQuery } = profileApi;
