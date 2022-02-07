import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const TransacrionHistoryCard = () => {
  return (
    <TouchableOpacity>
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
        <View style={styles.row}>
          <Text style={styles.priceText}>$100.00</Text>
          <Image source={require('../../../assets/images/arrowRight.png')} />
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default TransacrionHistoryCard;