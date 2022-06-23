// public routes
import Home from "../views/pages/home/Home";
import Login from "../views/pages/login/Login";
import Signup from "../views/pages/signup/Signup";

// admin routes
import AdminDashboard from "../views/pages/admin/dashboard/AdminDashboard";
import Department from "../views/pages/admin/department/Department";
import Students from "../views/pages/admin/student/Students";
import Subjects from "../views/pages/admin/subject/Subjects";
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
      {
        path: "department",
        element: Department,
      },
      {
        path: "subjects",
        element: Subjects,
      },
      {
        path: "students",
        element: Students,
      },
    ],
  },
  {
    path: "/profile",
    element: Profile,
    role: ["user"],
  },
];
