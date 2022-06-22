// public routes
import Home from "../views/pages/home/Home";
import Login from "../views/pages/login/Login";
import Signup from "../views/pages/signup/Signup";

// admin routes
import AdminDashboard from "../views/pages/admin/dashboard/AdminDashboard";
import Teachers from "../views/pages/admin/teacher/Teachers";

// auth routes
import Profile from "../views/pages/profile/Profile";

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
