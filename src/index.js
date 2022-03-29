import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export const StoreContext = React.createContext(store);

ReactDOM.render(
    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreContext.Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
