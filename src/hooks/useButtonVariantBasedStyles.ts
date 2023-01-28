import { EButtonVariant } from '../types/button';
import useTheme from './useTheme';

export const useButtonVariantBasedStyles = (variant: string, color: string) => {
  const theme = useTheme();
  const { palette = {}, components } = theme;
  const { Button: ButtonStyles } = components;

  const cases = {
    [EButtonVariant.outlined]: {
      ...ButtonStyles.outlined,
      backgroundColor: 'transparent',
      color: palette[color as keyof typeof palette]?.main,
      borderColor: palette[color as keyof typeof palette]?.main,
    },
    [EButtonVariant.contained]: {
      ...ButtonStyles.contained,
      backgroundColor: palette[color as keyof typeof palette]?.main,
      color: palette[color as keyof typeof palette]?.contrastText,
      borderColor: 'transparent',
    },
    [EButtonVariant.text]: {
      ...ButtonStyles.text,
      backgroundColor: 'transparent',
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

  const iconStylesCases = {
    [EButtonVariant.outlined]: {
      color: palette[color as keyof typeof palette]?.main,
    },
    [EButtonVariant.contained]: {
      color: palette[color as keyof typeof palette]?.contrastText,
    },
    [EButtonVariant.text]: {
      color: palette[color as keyof typeof palette]?.main,
    },
  };

  return {
    buttonStyles: cases[variant as keyof typeof cases] || {},
    textStyles: textStylesCases[variant as keyof typeof textStylesCases] || {},
    iconStyles: iconStylesCases[variant as keyof typeof iconStylesCases] || {},
  };
};
