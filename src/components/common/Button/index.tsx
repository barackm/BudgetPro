import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';
import {IButton} from '../../../types/button';

const Button: React.FC<IButton> = props => {
  const {children, onPress} = props;
  const theme = useTheme();
  const {palette} = theme;
  console.log('palette', palette);
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default Button;
