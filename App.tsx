import React from 'react';
import { Screen } from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInput from './src/components/common/TextInput';
// import { View } from 'react-native';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // main: '#2cb9b0',
      },
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
        <TextInput
          startIcon={({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          )}
          placeholder="Enter Email"
          label="Email"
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          label="Password"
          // error="Invalid password"
          // disabled
          startIcon={({ color, size }) => (
            <AntDesign name="lock" size={size} color={color} />
          )}
        />
        <TextInput
          placeholder="Enter message"
          label="Message"
          numberOfLines={10}
          multiline
          // error="Invalid password"
        />
        <Button variant="contained" onPress={() => console.log('Pressed')}>
          LOGIN
        </Button>
        <Button variant="outlined" onPress={() => console.log('Pressed')}>
          SIGN UP
        </Button>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
