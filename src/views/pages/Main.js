import { Route, Routes } from "react-router-dom";
import AdminRoutes from "../../routes/AdminRoutes";
import { routes } from "../../routes/routes";

const Main = () => {
  const adminRoutes = routes.filter((route) => route.role.includes("admin"));
  const publicRoutes = routes.filter((route) => route.role.includes("*"));
  const authUserRoutes = routes.filter((route) => route.role.includes("user"));

  return (
    <div>
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
                      element={
                        <AdminRoutes>
                          <subRoute.element />
                        </AdminRoutes>
                      }
                    />
                  ) : (
                    <Route
                      key={i}
                      index={false}
                      path={subRoute.path}
                      element={
                        <AdminRoutes>
                          <subRoute.element />
                        </AdminRoutes>
                      }
                    />
                  )
                )}
            </Route>
          ) : (
            ""
          )
        )}
      </Routes>
    </div>
  );
};

export default Main;
