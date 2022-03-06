import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Line from '../Line';

const UpcomingBillCard = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../../../../client/assets/images/Common/marketBill.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.marketText}>Market bills</Text>
            <Text style={styles.dateText}>December 28, 2021</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Line />
    </View>
  );
};

export default UpcomingBillCard;
