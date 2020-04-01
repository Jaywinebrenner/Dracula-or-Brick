import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';


const Brick = () => {
  return (
    <View style={styles.bottomBrick}>
      <Image
        source={require('../assets/bricks.jpg')}
        />
      <Text>Brick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBrick: {
    marginTop: 220,
    height: 700,
    backgroundColor: '#084177',
    alignItems: 'center',
  },
});


export default Brick
