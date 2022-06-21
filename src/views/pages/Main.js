import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";

const Main = () => {
  const adminRoutes = routes.filter((route) => route.role.includes("admin"));
  const publicRoutes = routes.filter((route) => route.role.includes("*"));

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
    </div>
  );
};

export default Main;
