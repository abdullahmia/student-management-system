import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";

const Main = () => {
  return (
    <div>
      <Routes>
        {routes?.map((route, key) => (
          <Route key={key} path={route?.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
