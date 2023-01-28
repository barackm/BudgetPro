import React from 'react';
import { Screen } from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './src/theme';
import { getIconSize } from './src/utlis/icons';

const App = () => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <Button
          startIcon={
            <Ionicons
              name="ios-add"
              size={getIconSize()}
              color={colors.white}
            />
          }
          variant="contained"
          onPress={() => console.log('Pressed')}>
          Content
        </Button>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
