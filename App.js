/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React from 'react';
 import {createBottomTabNavigator,} from 'react-navigation';
 import {createStackNavigator,} from 'react-navigation';

 import {handbookStack,} from './Handbook/HandbookStack';
 import {pokemmStack,} from './Pokemm/PokemmStack';
 import {toolsStack,} from './Tools/ToolsStack'
 import {mineStack,} from './Mine/MineStack'

 export default createBottomTabNavigator (
   {
     Pokemm: pokemmStack,
     Handbook: handbookStack,
     Tools: toolsStack,
     Mine: mineStack,
   }
 );
