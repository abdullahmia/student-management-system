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
        {adminRoutes?.map((route, key) => (
          <Route
            key={key.toString()}
            path={route.path}
            element={<route.element />}
          >
            {route.routes &&
              route.routes.map((subRoute, i) => (
                <Route
                  key={i}
                  path={subRoute.path}
                  element={<subRoute.element />}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export default Main;
