import React from 'react';
import Button from './src/components/Screen/common/button/Button';
import {Screen} from './src/components/Screen/Screen';
import {colors, metrics} from './src/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <Screen>
      <Button
        label="Login to your account"
        onPress={() => {}}
        variant="contained"
        color={colors.primary}
        startIcon={
          <MaterialCommunityIcons
            name="account"
            size={metrics.moderateScale(20)}
            color={colors.light}
          />
        }
      />
    </Screen>
  );
};

export default App;
