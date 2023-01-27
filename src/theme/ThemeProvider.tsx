import React, {createContext} from 'react';
import _ from 'lodash';

import {ITheme} from '../types/theme';
import {colors} from './colors';

interface IThemeContext {
  theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({theme: {}});

interface IThemeProviderProps {
  theme?: ITheme;
  children: React.ReactNode;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const {theme, children} = props;
  return (
    <ThemeContext.Provider value={{theme: createTheme(theme)}}>
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

const defaultTheme: ITheme = {
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.white,
    },
  },
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};
