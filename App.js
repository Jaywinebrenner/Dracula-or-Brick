import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Header from './components/Header'
import Dracula from './components/Dracula';
import Brick from './components/Brick';
import Landing from './components/Landing'




const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      draculaActive: false,
      brickActive: false,
      toggleView: null
    };
  }


    toggleDracula= () => {
      console.log("LICK");
      this.setState(prevState => ({
        toggleView: !prevState.toggleView
      }));
      console.log(this.state.toggleView);
    }

    toggleBrick= () => {
      console.log("LICK");
      this.setState(prevState => ({
        toggleView: !prevState.toggleView
      }));
      console.log(this.state.toggleView);
    }

  render() {

    let draculaVisible = null
    let brickVisible = null
    let currentVisibleState = null


    if(this.state.toggleView) {
      currentVisibleState = <Dracula/>
    } else if (this.state.toggleView === false){
      currentVisibleState = <Brick/>
    } else {
      currentVisibleState= null
    }



  return (
    <View style={styles.container}>


      <View style={[{flex: 1}, styles.elementsContainer]}>
          <Header
           toggleDracula={this.toggleDracula}
           toggleBrick={this.toggleBrick}

            />



        <View style={styles.middle}>
          {currentVisibleState}
        </View>

      </View>

    </View>
  );
}
}

console.log(this.state);
const styles = StyleSheet.create({

  textOne: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
},
btnText: {
  fontSize: 39,
  color: 'black'
},
btn: {
  backgroundColor: 'firebrick',
  padding: 9,
  margin: 5,
  width: 200,
  borderRadius: 10
},
});

export default App;
