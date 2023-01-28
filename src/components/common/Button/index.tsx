import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useButtonVariantBasedStyles } from '../../../hooks/useButtonVariantBasedStyles';
import { IButton } from '../../../types/button';

const Button: React.FC<IButton> = props => {
  const {
    children,
    onPress,
    startIcon,
    label,
    endIcon,
    loading,
    variant = 'contained',
    color = 'primary',
  } = props;
  const { buttonStyles, textStyles } = useButtonVariantBasedStyles(
    variant,
    color,
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...buttonStyles,
      }}>
      {(startIcon || loading) && <View>{startIcon}</View>}
      <Text
        style={{
          ...textStyles,
        }}>
        {label || children}
      </Text>
      {endIcon && <View>{endIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
