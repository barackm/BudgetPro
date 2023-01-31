import { metrics } from './../theme/metrics';
import { EButtonVariant } from '../types/button';
import useTheme from './useTheme';
import { colors } from '../theme';

interface Props {
  variant: 'outlined' | 'contained' | 'text';
  color: string;
  disabled: boolean;
  loading: boolean;
}
export const useButtonVariantBasedStyles = ({
  variant,
  color,
  loading,
  disabled,
}: Props) => {
  const theme = useTheme();
  const { palette = {}, components } = theme;
  const { Button: ButtonStyles } = components;

  const cases = {
    [EButtonVariant.outlined]: {
      backgroundColor: 'transparent',
      color: palette[color as keyof typeof palette]?.contrastText,
      borderColor: disabled
        ? palette[color as keyof typeof palette]?.dark
        : palette[color as keyof typeof palette]?.main,
      opacity: loading ? 0.8 : 1,
    },
    [EButtonVariant.contained]: {
      backgroundColor: disabled
        ? palette[color as keyof typeof palette]?.light
        : palette[color as keyof typeof palette]?.main,
      color: palette[color as keyof typeof palette]?.contrastText,
      borderColor: 'transparent',
      opacity: loading ? 0.8 : 1,
    },
    [EButtonVariant.text]: {
      backgroundColor: 'transparent',
      opacity: loading ? 0.8 : 1,
      borderColor: 'transparent',
    },
  };

  const textStylesCases = {
    [EButtonVariant.outlined]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.main,
    },
    [EButtonVariant.contained]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.contrastText,
    },
    [EButtonVariant.text]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.main,
    },
  };

  const iconColor = disabled
    ? palette[color as keyof typeof palette]?.contrastText
    : variant === EButtonVariant.contained
    ? colors.white
    : palette[color as keyof typeof palette]?.main || colors.primary;

  return {
    buttonStyles: { ...(cases[variant as keyof typeof cases] || {}) },
    textStyles: textStylesCases[variant as keyof typeof textStylesCases] || {},
    iconStyles: {
      color: iconColor,
      size: metrics.moderateScale(15),
    },
  };
};
