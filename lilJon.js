import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class LilJon extends React.Component {

    render() {
        return (
            <View>
              {/* <Image source='./liljon3.png'/> */}
              <Image source={require('./liljon3.png')} />
              </View>
              
        );
      }
}