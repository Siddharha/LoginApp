import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Login from "./src/pages/Login";
import MainPage from "./src/pages/MainPage";
import ListDetails from "./src/pages/ListDetails";

const MainNavigator = createStackNavigator(
  {
    Login: { screen: Login,
    },
    MainPage: {screen: MainPage,
      navigationOptions: {
        headerTitle: 'Main Page'
      }
    },
    ListDetails: {screen: ListDetails,
     
    }
  }
);
const App = createAppContainer(MainNavigator);
export default App;