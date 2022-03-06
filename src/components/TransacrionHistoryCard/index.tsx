import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Line from './../Line/index';

const TransacrionHistoryCard = () => {
  return (
    <TouchableOpacity>
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
        <View style={styles.row}>
          <Text style={styles.priceText}>$100.00</Text>
          <Image
            source={require('../../../assets/images/Common/arrowRight.png')}
          />
        </View>
      </View>
      <Line />
    </TouchableOpacity>
  );
};

export default TransacrionHistoryCard;
