import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout title={"Educhamp online management"}>
      <div>
        <h2 className="text-4xl">Educhamp online management system</h2>
        <div className="flex gap-4 mt-5">
          <Link
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black transition duration-200"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-black transition duration-200"
            to={"/signup"}
          >
            Signup
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
