import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';




const Header = (props) => {

  return (

    <View style={styles.header}>


        <Text style={styles.textOne}>The Place Visitor</Text>
        <Text style={styles.textTwo}>A place where you can visit Dracula or a Brick</Text>

    </View>
  )
}


const styles = StyleSheet.create({

  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#084177',
    marginTop: 30

  },
  textOne: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  },
  textTwo: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  }


});


export default Header
