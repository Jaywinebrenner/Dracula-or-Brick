import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Home ( props ) {


clickDracula = () => {
  this.props.addPlayer(this.state.inputValue);
this.setState({ inputValue: ''})
}

  return (
    <View style={styles.container}>
    <Text style={styles.btnText}>
    </Text>
          <TouchableOpacity
          style={styles.btn}
          onPress={()=> clickDracula}
          >
            <Text style={styles.btnText}>
            Visit Dracula
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.btn}
          onPress={()=> clickDracula}
          >
            <Text style={styles.btnText}>
            Visit A Brick
            </Text>
          </TouchableOpacity>

        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: 'center'
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
  borderRadius: 10
},
btnText: {
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
},
});
