import React from 'react';

import {
  View,
  TextInput,
} from 'react-native';

import styles from './styles';

const ListHeader = () => (
  <View style={styles.container}>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      placeholder="Digite seu usuário"/>
  </View>
);

export default ListHeader;
