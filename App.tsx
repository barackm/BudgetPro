import React from 'react';
import { Screen } from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {},
    },
    components: {
      Button: {
        root: {
          // height: 60,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <Button
          startIcon={({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          )}
          variant="contained"
          // disabled
          // loading
          onPress={() => console.log('Pressed')}>
          Content
        </Button>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
