import React from "react";
import Main from "./components/main";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store"

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
      <Main />
      </Provider>
    </React.Fragment>
  );
};

export default App;
