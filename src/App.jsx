import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import reducer from './reducers'

import Component from "./Component";

const store = createStore(reducer, applyMiddleware(thunk))

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <Component />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
