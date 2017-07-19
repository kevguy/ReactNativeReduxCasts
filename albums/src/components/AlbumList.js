import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');

    // a local copy is stored in src/components/fakeData/data.json
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => (res.json()))
      .then((data) => { console.log(data); this.setState({ albums: data }); })
      .catch((err) => { console.log(err); });
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.title} record={album} />
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
