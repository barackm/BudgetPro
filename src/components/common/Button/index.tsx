import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useButtonVariantBasedStyles } from '../../../hooks/useButtonVariantBasedStyles';
import useTheme from '../../../hooks/useTheme';
import { colors } from '../../../theme';
import { EButtonVariant, IButton } from '../../../types/button';

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
  } = props;
  const theme = useTheme();
  const { palette = {} } = theme;
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
      {(startIcon || loading) && (
        <View style={styles.iconContainer}>
          {loading ? (
            <ActivityIndicator
              size="small"
              color={
                variant === EButtonVariant.contained
                  ? colors.white
                  : palette[color as keyof typeof palette]?.main ||
                    colors.primary
              }
            />
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
      {endIcon && <View>{endIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
