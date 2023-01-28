import { ButtonVariant } from '../types/button';
import useTheme from './useTheme';

export const useButtonVariantBasedStyles = (variant: string, color: string) => {
  const theme = useTheme();
  const { palette = {}, components } = theme;
  const { Button: ButtonStyles } = components;

  const cases = {
    [ButtonVariant.outlined]: {
      ...ButtonStyles.outlined,
      backgroundColor: 'transparent',
      color: palette[color as keyof typeof palette]?.main,
      borderColor: palette[color as keyof typeof palette]?.main,
    },
    [ButtonVariant.contained]: {
      ...ButtonStyles.contained,
      backgroundColor: palette[color as keyof typeof palette]?.main,
      color: palette[color as keyof typeof palette]?.contrastText,
      borderColor: 'transparent',
    },
    [ButtonVariant.text]: {
      ...ButtonStyles.text,
      backgroundColor: 'transparent',
    },
  };

  const textStylesCases = {
    [ButtonVariant.outlined]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.main,
    },
    [ButtonVariant.contained]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.contrastText,
    },
    [ButtonVariant.text]: {
      ...ButtonStyles.label,
      color: palette[color as keyof typeof palette]?.main,
    },
  };

  return {
    buttonStyles: cases[variant as keyof typeof cases] || {},
    textStyles: textStylesCases[variant as keyof typeof textStylesCases] || {},
  };
};
