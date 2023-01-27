// export const colors = {
//   primary: '#6b4eff',
//   primaryLight: '#9990ff',
//   primaryDarkest: '#5538ee',
//   primaryLighter: '#c6c4ff',
//   primaryLightest: '#e7e7ff',
//   disabled: '#e3e5e5',
//   disabledText: '#b9b9b9',
//   secondary: '#e7e7ff',
//   secondaryDark: '#c6c4ff',
//   dark: '#000000',
//   darkLight: '#333333',
//   darkLighter: '#666666',
//   darkLightest: '#999999',
//   default: '#ffffff',
//   light: '#ffffff',
//   lightDark: '#f2f2f2',
//   lightDarker: '#e6e6e6',
//   lightDarkest: '#cccccc',
// };

import Color from 'color';
const primary = '#5538ee';
const secondary = '#e7e7ff';
const disabled = '#dadee0';
const text = '#333333';
const textLight = '#777777';
const textInverted = '#ffffff';
const white = '#ffffff';
const dark = '#000000';

export const colors = {
  primary,
  primaryLight: Color(primary).lighten(0.2).hex(),
  primaryDark: Color(primary).darken(0.2).hex(),
  primaryVariant: Color(primary).rotate(20).hex(),
  primaryVariantLight: Color(primary).rotate(20).lighten(0.2).hex(),
  primaryVariantDark: Color(primary).rotate(20).darken(0.2).hex(),
  secondaryLight: Color(secondary).lighten(0.2).hex(),
  secondaryDark: Color(secondary).darken(0.2).hex(),
  disabled,
  text,
  textLight,
  textInverted,
  white,
  dark,
};
