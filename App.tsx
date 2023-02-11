import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const theme = createTheme(
    {
      palette: {
        primary: {},
      },
      components: {
        Button: {
          root: {},
        },
      },
    },
    'dark',
  );

  return (
    <ThemeProvider theme={theme} colorTheme="dark">
      <NavigationContainer>
        <AuthNavigator />
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
