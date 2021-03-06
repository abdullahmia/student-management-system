// public routes
import FortgotPassword from "../views/pages/forgotPassword/FortgotPassword";
import ResetPassword from "../views/pages/forgotPassword/ResetPassword";
import Home from "../views/pages/home/Home";
import Login from "../views/pages/login/Login";
import Signup from "../views/pages/signup/Signup";

// admin routes
import AdminDashboard from "../views/pages/admin/dashboard/AdminDashboard";
import Department from "../views/pages/admin/department/Department";
import Students from "../views/pages/admin/student/Students";
import Subjects from "../views/pages/admin/subject/Subjects";
import Teachers from "../views/pages/admin/teacher/Teachers";

// teacher routes
import TeacherProfile from "../views/pages/profile/TeacherProfile";
import TeacherDashboard from "../views/pages/teacher/TeacherDashboard";

// Student Routes
import StudentProfile from "../views/pages/profile/StudentProfile";
import StudentDashboard from "../views/pages/student/StudentDashboard";

// auth routes
import Notice from "../views/pages/notice/Notice";
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
    path: "/forgot-password",
    element: FortgotPassword,
    role: ["*"],
  },
  {
    path: "/password-reset/:user/:token",
    element: ResetPassword,
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
    path: "/teacher",
    role: ["teacher"],
    element: TeacherDashboard,
    children: [
      {
        path: "/",
        element: TeacherDashboard,
      },
      {
        path: "profile",
        element: TeacherProfile,
      },
    ],
  },
  {
    path: "/student",
    role: ["student"],
    element: StudentDashboard,
    children: [
      {
        path: "/",
        element: StudentDashboard,
      },
      {
        path: "profile",
        element: StudentProfile,
      },
    ],
  },
  {
    path: "/profile",
    element: Profile,
    role: ["user"],
  },
  {
    path: "/notice",
    element: Notice,
    role: ["user"],
  },
];
