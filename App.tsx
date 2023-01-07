import React from 'react';
import {Text} from 'react-native';
import {Screen} from './src/components/Screen/Screen';
import {fonts} from './src/theme';

const App = () => {
  return (
    <Screen>
      <Text style={fonts.body}>Hello World</Text>
    </Screen>
  );
};

export default App;
