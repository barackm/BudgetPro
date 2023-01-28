import { colors, metrics } from '../theme';
import useTheme from './useTheme';

interface Props {
  color: string;
  disabled?: boolean;
  error?: string | null;
  isFocused?: boolean;
}
const useInputStyles = ({ color, disabled, error, isFocused }: Props) => {
  const theme = useTheme();
  const { palette = {} } = theme;

  const inputContainerStylesCases = {
    disabled: {
      borderColor: palette['disabled' as keyof typeof palette]?.main,
      backgroundColor: palette['disabled' as keyof typeof palette]?.light,
    },
    error: {
      borderColor: palette['error' as keyof typeof palette]?.main,
    },
  };

  const iconColor = disabled
    ? palette['disabled' as keyof typeof palette]?.main
    : palette['text' as keyof typeof palette]?.main;
  return {
    mainContainerStyles: {},
    inputContainerStyles: {
      borderColor: isFocused
        ? palette[color as keyof typeof palette]?.main
        : colors.disabled,
      ...(disabled && inputContainerStylesCases.disabled),
      ...(error && inputContainerStylesCases.error),
    },
    inputStyles: {},
    iconStyles: {
      color: iconColor,
      size: metrics.moderateScale(10),
    },
  };
};

export default useInputStyles;
