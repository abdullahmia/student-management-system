import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./views/pages/Main";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
};

export default App;
