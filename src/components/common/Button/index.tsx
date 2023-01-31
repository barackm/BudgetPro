import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useButtonVariantBasedStyles } from '../../../hooks/useButtonVariantBasedStyles';
import useTheme from '../../../hooks/useTheme';
import { colors, metrics } from '../../../theme';
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
    autoWidth = false,
    renderIconBtn,
    styles: stylesProp = {},
  } = props;
  const theme = useTheme();
  const { components } = theme;
  const { Button: ButtonStyles } = components;

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
      activeOpacity={0.8}
      style={{
        ...ButtonStyles[variant],
        ...ButtonStyles.root,
        ...buttonStyles,
        ...(autoWidth && {
          alignSelf: 'flex-start',
        }),
        ...((renderIconBtn || (renderIconBtn && loading)) && {
          width: metrics.moderateScale(40),
        }),
        ...stylesProp,
      }}>
      {(startIcon || loading) && !renderIconBtn && (
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
      {loading ? (
        <View style={styles.iconContainer}>
          <ActivityIndicator size={iconStyles.size} color={iconStyles.color} />
        </View>
      ) : (
        <Text
          style={{
            ...textStyles,
          }}
          numberOfLines={1}>
          {renderIconBtn
            ? renderIconBtn({
                color: iconStyles.color || colors.white,
                size: iconStyles.size,
              })
            : label || children}
        </Text>
      )}
      {endIcon && !renderIconBtn && (
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
