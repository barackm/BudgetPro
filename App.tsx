import React from 'react';
import {Screen} from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {Text} from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <Screen>
        <Button onPress={() => console.log('Pressed')}>
          <Text>Content</Text>
        </Button>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
