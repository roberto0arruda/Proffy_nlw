import React from 'react';
import {View} from 'react-native';
import {Border} from 'react-native-gesture-handler';

import styles from './styles.ts';

function PageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}></View>
    </View>
  );
}

export default PageHeader;
