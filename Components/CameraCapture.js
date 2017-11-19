import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from "react-native-camera";
import BoxyBoi from './BoxyBoi.'

export default class CameraCapture extends Component{
    constructor(){
        super();
        this.state = {
            sendingImages: false,
            timerId: null
        };
    }
    render(){
        return(
            <Camera
                ref={(cam) => {
                this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                
                <Text className='flex-item sidebar' style={styles.capture} onPress={this.broadcastImages.bind(this)}>[CAPTURE]</Text>
            
            </Camera>
        )
    }

    broadcastImages(){
        this.setState({
            sendingImages: !this.state.sendingImages
        });
        if (this.state.sendingImages){
            this.state.timerId = setInterval(function(){
                this.camera.capture(options)
                .then((data) => {
                    /*var xhr = new XMLHttpRequest();
                    xhr.open('POST', serverURL);
                    xhr.send(data);*/
                    console.log(data);
                })
                .catch(err => console.error(err));
            }, 2000)
        }
        else{
            clearInterval(this.state.timerId);
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
