import React from "react";

// public routes
const Home = React.lazy(() => import("../views/pages/home/Home"));
const Login = React.lazy(() => import("../views/pages/login/Login"));
const Signup = React.lazy(() => import("../views/pages/signup/Signup"));

// admin routes
const AdminDashboard = React.lazy(() =>
  import("../views/pages/admin/dashboard/AdminDashboard")
);
const Teachers = React.lazy(() =>
  import("../views/pages/admin/teacher/Teachers")
);

// auth routes
const Profile = React.lazy(() => import("../views/pages/profile/Profile"));

export const routes = [
  {
    path: "/",
    element: Home,
    role: ["*"],
  },
  {
    path: "/login",
    element: Login,
    role: ["*"],
  },
  {
    path: "/signup",
    element: Signup,
    role: ["*"],
  },
  {
    path: "/admin",
    role: ["admin"],
    children: [
      {
        path: "/",
        element: AdminDashboard,
      },
      {
        path: "teachers",
        element: Teachers,
      },
    ],
  },
  {
    path: "/profile",
    element: Profile,
    role: ["user"],
  },
];
