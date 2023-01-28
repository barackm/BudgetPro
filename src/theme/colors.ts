import Color from 'color';
const primary = '#5538ee';
const secondary = '#e7e7ff';
const disabled = '#c1c4c9';
const text = '#333333';
const textLight = '#777777';
const textInverted = '#ffffff';
const white = '#ffffff';
const dark = '#000000';
const error = '#ff5555';
const light = '#F2F5F7';

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
  disabledLight: Color(disabled).lighten(0.2).hex(),
  disabledDark: Color(disabled).darken(0.2).hex(),
  text,
  textLight,
  textDark: Color(text).darken(0.2).hex(),
  textInverted,
  white,
  dark,
  error,
  errorLight: Color(error).lighten(0.2).hex(),
  errorDark: Color(error).darken(0.2).hex(),
  eroorVariant: Color(error).rotate(20).hex(),
  light,
};
