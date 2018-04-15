import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import config from '../config';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));


class App extends Component {
  state = { loggedIn: false };
  
  componentWillMount()  {
      firebase.initializeApp({
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        databaseURL: config.databaseURL,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId
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