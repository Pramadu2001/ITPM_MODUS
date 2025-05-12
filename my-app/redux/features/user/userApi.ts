import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (data) => ({
        url: 'update-user-avatar',
        method: 'PUT',
        body: data, // data should be { avatar: "base64string" }
        headers: {
          'Content-Type': 'application/json', // This is needed for base64
        },
        credentials: 'include' as const,
      }),
  
    
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: "update-user-info",
        method: "PUT",
        body: { name, },
        credentials: "include" as const,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword,newPassword }) => ({
        url: "update-user-password",
        method: "PUT",
        body: { oldPassword,newPassword, },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation ,useEditProfileMutation, useUpdatePasswordMutation} = userApi;