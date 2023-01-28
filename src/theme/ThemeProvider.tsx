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
    <ThemeContext.Provider value={{ theme: createTheme(theme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const createTheme = (customTheme?: ITheme) => {
  if (!customTheme) {
    return defaultTheme;
  }

  const _theme = _.merge(
    {},
    defaultTheme,
    customTheme,
    (objValue: any, srcValue: any) => {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    },
  );

  return _theme;
};

const palette = {
  primary: {
    main: colors.primary,
    light: colors.primaryLight,
    dark: colors.primaryDark,
    contrastText: colors.white,
  },
};

const ButtonRoot = {
  borderRadius: metrics.moderateScale(8),
  paddingHorizontal: metrics.moderateScale(20),
  display: 'flex',
  alignItems: 'center',
  height: metrics.moderateScale(34),
  justifyContent: 'center',
  flexDirection: 'row',
  color: colors.textLight,
  borderWidth: metrics.moderateScale(1.5),
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
        textTransform: 'capitalize',
        marginHorizontal: metrics.moderateScale(5),
      },
    },
  },
};
