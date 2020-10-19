import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);