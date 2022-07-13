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
  tagTypes: ["User"],
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
      invalidatesTags: ["User"],
    }),
    // get users by role
    getUserByRole: builder.query({
      query: (role) => `/auth/users/${role}`,
      providesTags: ["User"],
    }),

    // delete a user by id and role
    deleteUserByRoleAndId: builder.mutation({
      query: ({ role, id }) => {
        return {
          url: `/auth/user/${role}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),

    // upload profile picture
    uploadProfile: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/upload-profile",
          method: "PATCH",
          body: body,
        };
      },
    }),

    // password change
    changePassword: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/password-change`,
          method: "PATCH",
          body: content,
        };
      },
    }),

    // forgot password
    forgotPassword: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/forgot-password`,
          method: "POST",
          body: content,
        };
      },
    }),

    // reset password
    resetPassword: builder.mutation({
      query: ({ user, token, content }) => {
        return {
          url: `/auth/reset-password/${user}/${token}`,
          method: "PATCH",
          body: content,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useGetUserByRoleQuery,
  useDeleteUserByRoleAndIdMutation,
  useUploadProfileMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
