import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const TransactionSuccessfulScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/CheckCircle.png')} />
      <Text style={styles.successful}>Successful!</Text>
      <Text style={styles.info}>Your transaction is successful.</Text>
      <Text style={styles.info}> Thank for using our services.</Text>
    </View>
  );
};

export default TransactionSuccessfulScreen;
