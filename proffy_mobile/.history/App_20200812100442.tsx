import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
