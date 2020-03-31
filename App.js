import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Header from './components/Header'
import Dracula from './components/Dracula';
import Brick from './components/Brick';
import Landing from './components/Landing'

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>

      <View style={[{flex: 1}, styles.elementsContainer]}>
          <Header/>
        <View style={styles.middle}>
          <Home/>
        </View>



          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Landing" component={Landing}
                />
              <Stack.Screen name="Brick" component={Brick} />
            </Stack.Navigator>
            </NavigationContainer>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  middle: {
    flex: .2,
    backgroundColor: '#FAA030'
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
