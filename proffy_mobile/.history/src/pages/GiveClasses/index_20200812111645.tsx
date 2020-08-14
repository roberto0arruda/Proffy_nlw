import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles.ts';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em plataforma
          web.
        </Text>
      </ImageBackground>
      R
    </View>
  );
}

export default GiveClasses;