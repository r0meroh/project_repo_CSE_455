// index js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//firebase below
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { BrowserRouter } from 'react-router-dom';


// Google config firebase object project data
//
//DO NOT CHANGE
//
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC27VURdIJfkZ5SYyEr_GKeOHeustmhHDg",
  authDomain: "covid19-predictor-prototype.firebaseapp.com",
  databaseURL: "https://covid19-predictor-prototype.firebaseio.com",
  projectId: "covid19-predictor-prototype",
  storageBucket: "covid19-predictor-prototype.appspot.com",
  messagingSenderId: "661394108954",
  appId: "1:661394108954:web:02b46e6d78a02b270297a3",
  measurementId: "G-64L1D6335D"
};





const firebaseInitialState = {};
//create store for react-redux useage
//rootReducer, initialState,
const store = createStore(allReducer, firebaseInitialState, applyMiddleware(thunk) );

const rrfConfig = {
  userProfile: 'user',
  useFirestoreForProfile: true,
};



// initialize instances to connect to app and firestore
firebase.initializeApp(firebaseConfig);
firebase.firestore();

  




const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};



// <ReactReduxFirebaseProvider{...rrfProps}>
//</ReactReduxFirebaseProvider>

//render all components under redux provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>   
           
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
