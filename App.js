/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Alert } from 'react-native';

import Config from './config';

import BelvoWidget from './components/BelvoWidget';

const errorMsg = (event) => {
  Alert.alert(
    event.error,
    event.error_message
  )
}

const successMsg = (event) => {
  Alert.alert(
    event.institution,
    event.link
  )
}

const exitMsg = (event) => {
  Alert.alert(
    "Exit",
    JSON.stringify(event)
  )
}

const App = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <BelvoWidget
        payload={{ locale: 'pt' }}
        onError={e => errorMsg(e)}
        onExit={e => exitMsg(e)}
        onSuccess={e => successMsg(e)}
        token={Config.BELVO_TOKEN}
      />
    </SafeAreaView>
  );
};

export default App;
