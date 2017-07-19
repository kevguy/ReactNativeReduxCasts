import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA4eoLMlWLlJfj77ix801rJb0xPQBI9xhM",
      authDomain: "react-native-auth-20569.firebaseapp.com",
      databaseURL: "https://react-native-auth-20569.firebaseio.com",
      projectId: "react-native-auth-20569",
      storageBucket: "react-native-auth-20569.appspot.com",
      messagingSenderId: "397874877694"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return  (
          <Card>
            <CardSection>
              <Button onPressHandler={() => firebase.auth().signOut() }>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
