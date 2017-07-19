import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyChGTPjeQoeOxrHs7ETsZQLo4jhZ-RtQJ4',
      authDomain: 'react-manager-fa0bc.firebaseapp.com',
      databaseURL: 'https://react-manager-fa0bc.firebaseio.com',
      projectId: 'react-manager-fa0bc',
      storageBucket: 'react-manager-fa0bc.appspot.com',
      messagingSenderId: '273721491718'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
