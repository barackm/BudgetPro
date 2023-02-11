import React, { createContext } from 'react';
import _ from 'lodash';
import { metrics } from './metrics';

import { ITheme } from '../types/theme';
import { fonts } from './fonts';
import { shadow } from './utlis';
import { getThemeColor, TColors } from './colors';

interface IThemeContext {
  theme: ITheme;
}

export const ThemeContext = createContext<IThemeContext>({ theme: {} });

interface IThemeProviderProps {
  theme?: ITheme;
  children: React.ReactNode;
  colorTheme?: 'light' | 'dark';
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { theme, children, colorTheme = 'light' } = props;
  const colors = getThemeColor(colorTheme);
  return (
    <ThemeContext.Provider value={{ theme: theme || getDefaultTheme(colors) }}>
      {children}
    </ThemeContext.Provider>
  );
};

const getPalette = (colors: TColors) => {
  return {
    primary: {
      main: colors.primary[300],
      light: colors.primary[100],
      dark: colors.primary[800],
      contrastText: colors.white.main,
    },
    disabled: {
      main: colors.grey.main,
      light: colors.grey[100],
      dark: colors.grey[800],
      contrastText: colors.grey[800],
    },
    error: {
      main: colors.error.main,
      light: colors.error[100],
      dark: colors.error[800],
      contrastText: colors.error[800],
    },
    text: {
      main: colors.text[900],
      light: colors.text[100],
      dark: colors.text[800],
    },
    gray: {
      main: colors.grey.main,
      light: colors.grey[100],
      dark: colors.grey[800],
    },
    lightGray: {
      main: colors.lightGrey.main,
      light: colors.lightGrey[100],
      dark: colors.lightGrey[800],
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary[100],
      dark: colors.secondary[800],
      contrastText: colors.text.main,
    },
  };
};

const getDefaultTheme = (colors: TColors) => {
  const ButtonRoot = getButtonRoot(colors);
  return {
    palette: getPalette(colors),
    components: {
      Button: {
        root: ButtonRoot,
        outlined: {
          ButtonRoot,
          backgroundColor: 'transparent',
          borderWidth: metrics.moderateScale(1.5),
          borderColor: 'transparent',
        },

        contained: {
          ButtonRoot,
        },

        text: {
          ...ButtonRoot,
          backgroundColor: 'transparent',
          borderWidth: 0,
        },

        label: {
          color: colors.text,
          fontSize: metrics.moderateScale(12),
          fontWeight: fonts.subHeading.fontWeight,
          marginHorizontal: metrics.moderateScale(5),
        },
      },
      TextInput: {
        root: {
          display: 'flex',
          marginVertical: metrics.moderateScale(5),
        },
        input: {
          ...fonts.defaultTextStyle,
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          fontSize: metrics.moderateScale(12),
          paddingVertical: metrics.moderateScale(5),
        },
        inputContainer: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: metrics.moderateScale(12),
          borderWidth: metrics.moderateScale(0.5),
          borderColor: colors.grey[50],
          borderRadius: metrics.moderateScale(48),
          minHeight: metrics.moderateScale(46),
        },
        label: {
          ...fonts.medium,
          fontSize: metrics.moderateScale(12),
          letterSpacing: metrics.moderateScale(0.2),
          marginBottom: metrics.moderateScale(4),
          ...fonts.defaultTextStyle,
        },
      },
      Switch: {
        root: {
          width: metrics.moderateScale(38),
          height: metrics.moderateScale(22),
          borderRadius: metrics.moderateScale(30),
          justifyContent: 'center',
          backgroundColor: colors.grey[100],
        },
        circle: {
          width: metrics.moderateScale(18),
          height: metrics.moderateScale(18),
          borderRadius: metrics.moderateScale(30),
          backgroundColor: colors.text,
          shadowColor: colors.text,
          ...shadow,
        },
      },
    },
  };
};

export const createTheme = (
  customTheme?: ITheme,
  colorTheme?: 'dark' | 'light',
) => {
  const colors = getThemeColor(colorTheme || 'light');
  if (!customTheme) {
    return;
  }

  const theme = _.mergeWith(
    {},
    getDefaultTheme(colors),
    customTheme,
    (objValue: any, srcValue: any) => {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
      if (_.isPlainObject(objValue) && _.isPlainObject(srcValue)) {
        return _.mergeWith(objValue, srcValue);
      }
    },
  );
  return theme;
};

const getButtonRoot = (colors: TColors) => ({
  borderRadius: metrics.moderateScale(48),
  paddingHorizontal: metrics.moderateScale(8),
  display: 'flex',
  alignItems: 'center',
  height: metrics.moderateScale(46),
  justifyContent: 'center',
  flexDirection: 'row',
  color: colors.text,
  borderWidth: metrics.moderateScale(1.1),
  marginVertical: metrics.moderateScale(5),
  ...shadow,
});
