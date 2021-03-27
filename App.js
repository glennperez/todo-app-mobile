import React from 'react';
import { Provider } from "react-redux";
import App from './src'
import store from './src/store'

export default function () {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
