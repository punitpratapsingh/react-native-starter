import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Signup from './signup';
import Home from './home';
import User from './user';
import Map from './map';

const Navigation = createStackNavigator(
    {
      Logins: Login,
      Register: Signup,
      Homes: Home,
      Users: User,
      Maps: Map,
    },
    {
      initialRouteName: 'Logins',
    }
  );

  export default createAppContainer(Navigation);
