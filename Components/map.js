import React , { Component} from 'react';
import { StyleSheet, View, Dimensions , Text} from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.mapStyle}>
       <Text> {/* <MapView style={styles.mapStyle} /> */}ho</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#ddd',

  },
});