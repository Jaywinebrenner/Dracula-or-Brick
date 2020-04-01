import React from 'react';
import { ImageBackground, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import dracula from '../assets/discount-dracula.png';
import moon from '../assets/moon.jpg';

const Dracula = (props) => {
  return (
    <ImageBackground
      source={require('../assets/moon.jpg')}
      style={styles.bottom}>
      <Image
       source={require('../assets/discount-dracula.png')}
       style={styles.dracula}
       />



   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,

    marginTop: 200,
    height: 350,
    backgroundColor: '#084177',
    alignItems: 'center',
  },
  dracula: {
    width: 150,
    height: 260,
    marginTop: 30
  },



});

export default Dracula
