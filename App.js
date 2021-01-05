import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as HttpClientProvider } from 'use-http';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/navigation/MainNavigator';

MaterialCommunityIcons.loadFont();
FAIcons.loadFont();

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const App = () => (
  <HttpClientProvider url={API_URL}>
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  </HttpClientProvider>
);

export default App;
