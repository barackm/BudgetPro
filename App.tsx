import React from 'react';
import { Screen } from './src/components/Screen/Screen';
import Button from './src/components/common/Button';
import { createTheme, ThemeProvider } from './src/theme/ThemeProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInput from './src/components/common/TextInput';
import { View } from 'react-native';
import Switch from './src/components/common/Switch';
// import { View } from 'react-native';

const App = () => {
  // const [loginData, setLoginData] = React.useState({
  //   email: '',
  //   password: '',
  // });
  const [search, setSearch] = React.useState('');
  const [swiched, setSwitched] = React.useState(false);
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
          onChangeText={(text: string) => console.log(text)}
          name="email"
        />
        <TextInput
          placeholder="Search..."
          onChangeText={setSearch}
          isSearch
          value={search}
          name="search"
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          label="Password"
          name="password"
          // error="Invalid password"
          // disabled
          onChangeText={(text: string) => console.log(text)}
          startIcon={({ color, size }) => (
            <AntDesign name="lock" size={size} color={color} />
          )}
        />
        <TextInput
          placeholder="Enter message"
          label="Message"
          numberOfLines={10}
          multiline
          name="message"
          onChangeText={(text: string) => console.log(text)}
          // error="Invalid password"
        />
        <Button variant="contained" onPress={() => console.log('Pressed')}>
          LOGIN
        </Button>
        <Button variant="outlined" onPress={() => console.log('Pressed')}>
          SIGN UP
        </Button>
        <View>
          <Button
            renderIconBtn={({ color, size }) => (
              <AntDesign name="google" size={size} color={color} />
            )}
            variant="outlined"
            onPress={() => console.log('Pressed')}
          />
          <Button
            renderIconBtn={({ color, size }) => (
              <AntDesign name="twitter" size={size} color={color} />
            )}
            variant="outlined"
            onPress={() => console.log('Pressed')}
            // loading
          />
        </View>
        <Switch value={swiched} onValueChange={setSwitched} />
      </Screen>
    </ThemeProvider>
  );
};

export default App;
