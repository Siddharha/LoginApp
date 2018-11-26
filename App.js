import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Login from "./src/pages/Login";
import MainPage from "./src/pages/MainPage";

const MainNavigator = createStackNavigator(
  {
    Login: { screen: Login,
    },
    MainPage: {screen: MainPage,
      navigationOptions: {
        headerTitle: 'Main Page'
      }
    }
  }
);
const App = createAppContainer(MainNavigator);
export default App;