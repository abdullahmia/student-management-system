import { useEffect } from "react";

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return children;
};

export default Layout;
