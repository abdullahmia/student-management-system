import Teachers from "../views/pages/admin/teacher/Teachers";
import Home from "../views/pages/home/Home";
import Login from "../views/pages/login/Login";
import Signup from "../views/pages/signup/Signup";

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
    element: Teachers,
    role: ["admin"],
    routes: [
      {
        path: "teachers",
        element: Teachers,
      },
    ],
  },
];
