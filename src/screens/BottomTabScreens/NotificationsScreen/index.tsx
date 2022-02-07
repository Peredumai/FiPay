import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import NotificationPost from './../../../components/NotificationPost/index';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Today</Text>
      <NotificationPost
        name={'Grace Anastasia'}
        type={'a'}
        buttonExist={true}
        imageName="avatar"
        price="150"
      />
      <NotificationPost
        name={'Grace Anastasia'}
        type={'receive'}
        buttonExist={false}
        imageName="avatar"
        price="330"
      />
    </View>
  );
}
