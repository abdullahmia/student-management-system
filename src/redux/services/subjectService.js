import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subjectApi = createApi({
  reducerPath: "subjectapi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (header) => {
      header.set("Authorization", localStorage.getItem("token") || null);
      return header;
    },
  }),
  tagTypes: ["Subject"],
  endpoints: (builder) => ({
    getSubjects: builder.query({
      query: () => `/academic/subject`,
      // which query will be invalidate
      providesTags: ["Subject"],
    }),
    addSubject: builder.mutation({
      query: (body) => {
        return {
          url: "/academic/subject",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Subject"],
    }),
    deleteSubject: builder.mutation({
      query: (id) => {
        return {
          url: `/academic/subject/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Subject"],
    }),
  }),
});

export const {
  useAddSubjectMutation,
  useGetSubjectsQuery,
  useDeleteSubjectMutation,
} = subjectApi;
