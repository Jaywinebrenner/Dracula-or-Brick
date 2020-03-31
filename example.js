import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';

const RootStack = createStackNavigator( {
  Home: Home,
  Dracula: Dracula,
  Feed: Feed,
})
