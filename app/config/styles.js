import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
  primary: 'rgb(0, 123, 255)',
  dark: 'rgba(0, 0, 0, 0.87)',
  light: 'rgba(255, 255, 255, 0.87)',
  white: 'white',
}

export const tintColors = {
  activeTintColor: colors.primary,
  inactiveTintColor: colors.dark,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  main: {
    backgroundColor: colors.white,
    flex: 1,
  },

  point: {
    padding: 16,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rank: {
    padding: 16,
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  score: {
    padding: 16,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  rankSquare: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textApp: {
    fontFamily: 'Roboto',

    fontSize: 16,
    lineHeight: 16,

    color: 'rgba(0, 0, 0, 0.87)',
  },
  textHeader: {
    fontSize: 24,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  textSubHeader: {
    fontSize: 20,
    lineHeight: 20,
  },
  textLight: {
    color: 'rgba(255, 255, 255, 0.87)',
  },
  textGrey: {
    color: 'rgba(0, 0, 0, 0.54)',
  }
});

export default styles;
