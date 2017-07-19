// Index.android.js - place code in here for Android!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a components
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albumsssss'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
