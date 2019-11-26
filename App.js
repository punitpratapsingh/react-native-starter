import React, { Component } from 'react';
import  { View, Text } from 'react-native';
import Navigation from './Components/navigation';
import { Provider } from 'react-redux';

import InitStore from '././Redux/store';

class App extends Component {

  render(){

    return(
      <Provider store={InitStore()}>
      <Navigation />
      </Provider>
    );
  }
}

export default App;
