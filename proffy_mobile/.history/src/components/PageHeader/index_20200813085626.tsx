import React from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import styles from './styles.ts';

function PageHeader() {
  function handleGoBack() {
      
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} />
        </BorderlessButton>
      </View>
    </View>
  );
}

export default PageHeader;
