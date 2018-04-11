import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const AppText = ({ style, children, ...rest }) => <Text style={[styles.textApp, style]} {...rest}>{children}</Text>

export default AppText;
