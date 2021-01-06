import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as HttpClientProvider } from 'use-http';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/navigation/MainNavigator';
import { store } from './src/store';

MaterialCommunityIcons.loadFont();
FAIcons.loadFont();

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const App = () => (
  <StoreProvider store={store}>
    <HttpClientProvider url={API_URL}>
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </HttpClientProvider>
  </StoreProvider>
);

export default App;
