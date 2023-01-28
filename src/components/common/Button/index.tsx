import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useButtonVariantBasedStyles } from '../../../hooks/useButtonVariantBasedStyles';
import { colors } from '../../../theme';
import { IButton } from '../../../types/button';

import styles from './styles';

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
    disabled = false,
  } = props;
  const { buttonStyles, textStyles, iconStyles } = useButtonVariantBasedStyles({
    variant,
    color: disabled ? 'disabled' : color,
    disabled,
    loading: loading || false,
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (!disabled || loading) {
          onPress();
        }
      }}
      disabled={disabled || loading}
      style={{
        ...buttonStyles,
      }}>
      {(startIcon || loading) && (
        <View style={styles.iconContainer}>
          {loading ? (
            <ActivityIndicator
              size={iconStyles.size}
              color={iconStyles.color}
            />
          ) : typeof startIcon === 'function' ? (
            startIcon({
              color: iconStyles.color || colors.white,
              size: iconStyles.size,
            })
          ) : (
            startIcon
          )}
        </View>
      )}
      <Text
        style={{
          ...textStyles,
        }}
        numberOfLines={1}>
        {label || children}
      </Text>
      {endIcon && (
        <View>
          {typeof endIcon === 'function'
            ? endIcon({
                color: iconStyles.color || colors.white,
                size: iconStyles.size,
              })
            : endIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
