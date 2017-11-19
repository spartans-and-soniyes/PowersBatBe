import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BoxyBoi extends Component{

    constructor(props){
        super(props);
        this.state = {
            buttonColor: '#3b914f'
        };
    }

    onButtonPress = () => {
        this.setState({ buttonColor: '#932020' }); 
    }
}