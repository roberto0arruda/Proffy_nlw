import React from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import styles from './styles.ts';

function PageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handle}
      </View>
    </View>
  );
}

export default PageHeader;
