import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ---- Import Material UI

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./1. Demo_Material _UI/Common/Theme";

/**
 *  ---------------- SETUP REDUX
 */

import { Provider } from "react-redux"; // Kết nối Redux với các Component React

import { createStore } from "redux"; // Add thư viện Redux vào cho

import RootReducer from "./Redux/rootReducer";

/**
 *  --------- TẠO RA STORE tổng của ứng dụng
 */

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
