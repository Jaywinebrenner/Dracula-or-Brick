import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native';


const Header = (props) => {


  return (

    <View style={styles.header}>
        <Text style={styles.textOne}>Dracula or Brick?</Text>
        <Text style={styles.textTwo}>A place where you can visit Dracula or a Brick</Text>


    <View style={styles.container}>
    <Text style={styles.btnText}>
    </Text>
          <TouchableOpacity
          style={styles.btn}
          onPress={props.toggleDracula}
          >
            <Text style={styles.btnText}>
            Visit Dracula
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.btn}
          onPress={props.toggleBrick}
          >
            <Text style={styles.btnText}>
            Visit A Brick
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({

  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#084177',
    marginTop: 60
  },

  container: {
    flex: 1,
      alignItems: 'center',
      height: 1
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
  },
  btnText: {
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  height: 50
  },
  btn: {
    backgroundColor: 'firebrick',
    padding: 9,
    margin: 5,
    width: 200,
    borderRadius: 10
  },

});






export default Header
