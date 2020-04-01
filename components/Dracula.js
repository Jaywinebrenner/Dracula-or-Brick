import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import dracula from '../assets/discount-dracula.png';

const Dracula = (props) => {
  return (
    <View style={styles.bottom}>
      <Image
       source={require('../assets/discount-dracula.png')}
       style={styles.dracula}
       />
     <Image style= { styles.backgroundImage } source={require('../assets/moon.jpg')}>
  </Image>

    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 220,
    height: 700,
    backgroundColor: '#084177',
    alignItems: 'center',
  },
  dracula: {
    width: 100,
    height: 180,
    marginTop: 100
  }


});

export default Dracula
