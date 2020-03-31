import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

const Brick = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bricks.jpg')}
        />
      <Text>Brick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  middle: {
    flex: 2,
    backgroundColor: '#FAA030'
  },
  bottom: {
    flex: 3,
    backgroundColor: '#32B76C',
    alignItems: 'center'
  },
  textOne: {
    fontSize: 36,
textAlign: 'center',
fontWeight: '100',
marginBottom: 24
},
btn: {
  backgroundColor: 'firebrick',
  padding: 9,
  margin: 5,
  width: 200,

},
btnText: {
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
},
});


export default Brick
