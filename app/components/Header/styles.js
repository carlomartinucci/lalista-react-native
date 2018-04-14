import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.primary,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
    color: colors.light,
  },
});

export default styles;
