import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {},
    },
    components: {
      Button: {
        root: {},
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
