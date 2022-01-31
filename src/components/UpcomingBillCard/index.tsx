import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const UpcomingBillCard = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../../../../client/assets/images/marketBill.png')}
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
      <View style={styles.line} />
    </View>
  );
};

export default UpcomingBillCard;
