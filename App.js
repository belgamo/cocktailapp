import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => (
  <SafeAreaView>
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}
    >
      Press me
    </Button>
  </SafeAreaView>
);

export default App;
