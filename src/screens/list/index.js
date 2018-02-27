import React, { Component } from 'react';

import { View } from 'react-native';

import ListHeader from 'components/ListHeader';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ListHeader />
      </View>
    )
  }
};
