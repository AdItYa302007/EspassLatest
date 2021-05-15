import React from 'react';import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const Navigator =createSwitchNavigator({
    Login:{screen:LoginScreen},
    SignUp:{screen:SignUpScreen},
    HomeScreen:{screen:HomeScreen},
    AppTabNavigator:{screen:AppTabNavigator}
})

const AppContainer=createAppContainer(Navigator)