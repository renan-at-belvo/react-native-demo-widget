/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  useColorScheme,
} from 'react-native';

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
  const isDarkMode = useColorScheme() === 'dark';

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
