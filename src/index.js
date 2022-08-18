import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/redux/store'
import {Provider} from "react-redux";

ReactDOM.render(
 <Provider store={store}>
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <App />
    {/*</Provider>*/}
  </React.StrictMode>
 </Provider>,
document.getElementById('root')
);


reportWebVitals();
