import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";
import { departmentApi } from "./services/deapartmentService";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(departmentApi.middleware),
});
