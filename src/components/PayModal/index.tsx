import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

import Monetization from '../../../assets/images/Monetization.svg';

const PayModal = ({onCancel}) => {
  return (
    <View style={styles.container}>
      <Monetization />
      <Text style={styles.messageText}>
        Make a payment to <Text style={styles.name}>Andrew Munich</Text>
        <Text> of </Text>
        <Text style={styles.price}>300$</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onCancel} style={styles.touchableOpacity}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.touchableOpacityFilled}>
          <Text style={styles.textFilled}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayModal;
