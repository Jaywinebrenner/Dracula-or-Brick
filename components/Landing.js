import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';




const Landing = (props) => {

  return (

    <View style={styles.bottom}>
      <Text style={styles.bottomText}>Press a button if you want to visit either Dracula or a Brick</Text>

    </View>
  )
}


const styles = StyleSheet.create({

  bottom: {
    height: 700,
    backgroundColor: '#084177',
    alignItems: 'center',
  },
  bottomText: {
    color: 'white',
    fontSize: 17,
    marginTop: 150,
    width: 300,
    textAlign: 'center'


  }


});


export default Landing
