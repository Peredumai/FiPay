import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const SuccessfulScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/CheckCircle.png')} />
      <Text style={styles.successful}>Successful!</Text>
      <Text style={styles.info}>Please check your email to confirm!</Text>
    </View>
  );
};

export default SuccessfulScreen;
