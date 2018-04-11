import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import AppText from './app_text';

export default class Header extends React.Component {
  render() {
    return <View style={styles.header}>
      <AppText style={styles.textHeader}>LALTRALISTA</AppText>
    </View>
  }
}
