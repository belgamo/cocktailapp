/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';

if (__DEV__) {
  import('./src/utils/ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

export default function Main() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => Main);
