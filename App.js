/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet , Text, View} from 'react-native';
import { DrawerNavigator,createDrawerNavigator, createAppContainer} from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

// export default class  App extends React.Component  {
  
//   render() {

//     return (
//      <MyApp/>
//     );
//   }
// }
const DrawerNavi=createDrawerNavigator(
  {
      First:{
         screen: FirstScreen,
      },
      Second:{
        screen: SecondScreen,
      }
  },
  {
    drawerPosition: 'left'
  }
);

export default createAppContainer(DrawerNavi);
