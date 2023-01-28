import React from 'react';
import { Screen } from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';

const App = () => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <Button variant="outlined" onPress={() => console.log('Pressed')}>
          Content
        </Button>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
