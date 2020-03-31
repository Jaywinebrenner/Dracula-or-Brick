import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import dracula from '../assets/discount-dracula.png'

const Dracula = (props) => {
  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/discount-dracula.png')}
       style={styles.dracula}
       />
     <Text>Dracula</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  dracula: {
    width: 100,
    height: 180
  }


});

export default Dracula
