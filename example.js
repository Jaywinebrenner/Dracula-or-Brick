// NAVIGATIOR APP CODE





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
            <Stack.Navigator initialRouteName='Landing'>
              <Stack.Screen
                name="Brick"
                component={Brick}
                options={{ title: Brick}}
                />
              <Stack.Screen
                name="Landing"
                component={Landing}
                />
                <Stack.Screen
                  name="Dracula"
                  component={Dracula}
                  />
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




----------------------
NAVIGATOR HOME CODE




import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Home ( props ) {

  return (
    <View style={styles.container}>
    <Text style={styles.btnText}>
    </Text>
          <TouchableOpacity
          style={styles.btn}
          onPress={()=> this.props.navigation.navigate('Dracula')}
          >
            <Text style={styles.btnText}>
            Visit Dracula
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.btn}
                    onPress={()=> this.props.navigation.navigate('Brick')}
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
