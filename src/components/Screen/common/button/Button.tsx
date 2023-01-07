import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts, metrics, spacing} from '../../../../theme';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
  variant: 'outlined' | 'contained' | 'text';
  color: string;
  size: 'small' | 'medium' | 'large';
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  rounded?: boolean;
  renderIcon?: () => React.ReactNode;
}

const Button = (props: Props) => {
  const {
    label,
    onPress,
    disabled,
    style,
    variant,
    color,
    size,
    loading,
    startIcon,
    endIcon,
    renderIcon,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[getButtonStyle(props), style]}>
      <>
        {loading ? (
          <ActivityIndicator color={colors.light} />
        ) : (
          <>
            {startIcon && <View style={styles.icon}>{startIcon}</View>}
            {renderIcon ? (
              renderIcon()
            ) : (
              <Text
                style={{
                  ...styles.text,
                  color: disabled
                    ? colors.darkLightest
                    : variant === 'contained'
                    ? color === colors.secondary ||
                      color === colors.secondaryDark
                      ? colors.primary
                      : colors.light
                    : colors.primary,
                }}>
                {label}
              </Text>
            )}
            {endIcon && <View style={styles.icon}>{endIcon}</View>}
          </>
        )}
      </>
    </TouchableOpacity>
  );
};

export default Button;
Button.defaultProps = {
  disabled: false,
  style: {},
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  loading: false,
  rounded: true,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.moderateScale(30),
    borderRadius: metrics.verticalScale(5),
    flexDirection: 'row',
  },
  text: {
    ...fonts.body,
    ...fonts.medium,
  },
  icon: {
    marginHorizontal: metrics.horizontalScale(5),
  },
});

const getButtonStyle = (props: Props) => {
  const {variant, color, size, rounded, disabled} = props;
  return {
    ...styles.button,
    backgroundColor: disabled
      ? colors.disabled
      : variant === 'contained'
      ? color
      : 'transparent',
    borderRadius: rounded
      ? metrics.verticalScale(50)
      : metrics.verticalScale(5),
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: colors.primary,
    color: variant === 'contained' ? colors.light : colors.light,
  };
};
