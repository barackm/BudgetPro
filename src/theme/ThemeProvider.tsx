import React, { createContext } from 'react';
import _ from 'lodash';
import { metrics } from './metrics';

import { ITheme } from '../types/theme';
import { colors } from './colors';
import { fonts } from './fonts';

interface IThemeContext {
  theme: ITheme;
}

export const ThemeContext = createContext<IThemeContext>({ theme: {} });

interface IThemeProviderProps {
  theme?: ITheme;
  children: React.ReactNode;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { theme, children } = props;
  return (
    <ThemeContext.Provider value={{ theme: theme || defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const createTheme = (customTheme?: ITheme) => {
  if (!customTheme) {
    return defaultTheme;
  }

  const theme = _.mergeWith(
    {},
    defaultTheme,
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

const palette = {
  primary: {
    main: colors.primary,
    light: colors.primaryLight,
    dark: colors.primaryDark,
    contrastText: colors.white,
  },
  disabled: {
    main: colors.disabled,
    light: colors.disabledLight,
    dark: colors.disabledDark,
    contrastText: colors.disabledDark,
  },
  error: {
    main: colors.error,
    light: colors.errorLight,
    dark: colors.errorDark,
    contrastText: colors.white,
  },
  text: {
    main: colors.text,
    light: colors.textLight,
    dark: colors.textDark,
  },
};

const ButtonRoot = {
  borderRadius: metrics.moderateScale(12),
  paddingHorizontal: metrics.moderateScale(20),
  display: 'flex',
  alignItems: 'center',
  height: metrics.moderateScale(36),
  justifyContent: 'center',
  flexDirection: 'row',
  color: colors.textLight,
  borderWidth: metrics.moderateScale(1.1),
  marginVertical: metrics.moderateScale(5),
  // flex: 1,
};

const defaultTheme: ITheme = {
  palette,
  components: {
    Button: {
      root: ButtonRoot,
      outlined: {
        ...ButtonRoot,
        backgroundColor: 'transparent',
        borderWidth: metrics.moderateScale(1.5),
        borderColor: 'transparent',
      },

      contained: {
        ...ButtonRoot,
      },

      text: {
        ...ButtonRoot,
        backgroundColor: 'transparent',
        borderWidth: 0,
      },

      label: {
        color: colors.white,
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
        borderWidth: metrics.moderateScale(1.1),
        borderColor: colors.disabled,
        borderRadius: metrics.moderateScale(12),
        minHeight: metrics.moderateScale(36),
      },
      label: {
        ...fonts.caption,
        fontSize: metrics.moderateScale(12),
        marginBottom: metrics.moderateScale(4),
        ...fonts.defaultTextStyle,
      },
    },
  },
};
