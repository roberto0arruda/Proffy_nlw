import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo-Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />);
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
