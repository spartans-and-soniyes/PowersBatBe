
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from "react-native-camera";

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component {
  render() {
    return (
      <View >
        <Camera style={{flex: 1}}
            ref={cam => this.camera=cam}
            aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    );
  }
  /*takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }*/
}


