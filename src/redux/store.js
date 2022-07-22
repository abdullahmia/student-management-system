import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";
import { departmentApi } from "./services/deapartmentService";
import { profileApi } from "./services/profileService";
import { subjectApi } from "./services/subjectService";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [subjectApi.reducerPath]: subjectApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(departmentApi.middleware)
      .concat(subjectApi.middleware)
      .concat(profileApi.middleware),
});
