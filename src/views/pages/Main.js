import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { routes } from "../../routes/routes";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

TopBarProgress.config({
  barColors: {
    0: "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
});

const Main = () => {
  const adminRoutes = routes.filter((route) => route.role.includes("admin"));
  const publicRoutes = routes.filter((route) => route.role.includes("*"));
  const authUserRoutes = routes.filter((route) => route.role.includes("user"));

  return (
    <div>
      <Header />
      <Sidebar />
      <Suspense fallback={<TopBarProgress />}>
        <Routes>
          {publicRoutes?.map((route, key) => (
            <Route
              key={key.toString()}
              path={route?.path}
              element={<route.element />}
            />
          ))}
          {authUserRoutes.map((route, key) => (
            <Route key={key} path={route.path} element={<route.element />} />
          ))}
          {adminRoutes?.map((route, key) =>
            route.children ? (
              <Route key={key.toString()} path={route.path}>
                {route.children &&
                  route.children.map((subRoute, i) =>
                    subRoute.path === "/" ? (
                      <Route
                        key={i}
                        index={true}
                        element={<subRoute.element />}
                      />
                    ) : (
                      <Route
                        key={i}
                        index={false}
                        path={subRoute.path}
                        element={<subRoute.element />}
                      />
                    )
                  )}
              </Route>
            ) : (
              ""
            )
          )}
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;
