import {Platform, StyleSheet} from 'react-native';
import {colors} from './colors';

export const fonts = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.darkLight,
  },

  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.darkLight,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.darkLight,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.darkLighter,
  },

  bold: {
    fontWeight: 'bold',
  },
  medium: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '300',
  },
  lighter: {
    fontWeight: '200',
  },
  lightest: {
    fontWeight: '100',
  },
});