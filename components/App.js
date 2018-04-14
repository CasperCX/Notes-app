import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));


class App extends Component {
  state = { loggedIn: false };
  
  componentWillMount()  {
      firebase.initializeApp({
        apiKey: "AIzaSyB39Il_dfeEwULqVHVFYNq2yd-Xy5ApQ40",
        authDomain: "notes-app-a7ba0.firebaseapp.com",
        databaseURL: "https://notes-app-a7ba0.firebaseio.com",
        projectId: "notes-app-a7ba0",
        storageBucket: "notes-app-a7ba0.appspot.com",
        messagingSenderId: "470044865184"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true });
      } else {
        this.setState({loggedIn: false });
      }
    });
  };


  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  };
};

export default App;