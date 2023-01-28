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
  secondary,
  secondaryLight: Color(secondary).lighten(0.2).hex(),
  secondaryDark: Color(secondary).darken(0.2).hex(),
  secondaryVariant: Color(secondary).rotate(20).hex(),
  disabled,
  text,
  textLight,
  textInverted,
  white,
  dark,
};
