import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[{flex: 1}, styles.elementsContainer]}>
        <View style={styles.top}>
          <Header/>
        </View>
        <View style={styles.middle}>

          </View>

        <View style={styles.bottom}>
          <TouchableOpacity
          style={styles.btn}
          >
            <Text style={styles.btnText}>
            Visit Dracula
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.btn}
          >
            <Text style={styles.btnText}>
            Visit A Brick
            </Text>
          </TouchableOpacity>



        </View>
      </View>
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
