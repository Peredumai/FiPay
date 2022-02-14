import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

import qrCode from '../../../assets/images/qrCode.png';

const Ticket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.keyText}>Passenger</Text>
        <Text style={styles.valueText}>John Doe</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.keyText}>Flight</Text>
        <Text style={styles.valueText}>MYU467A</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.keyText}>Date</Text>
        <Text style={styles.valueText}>December 28, 2021</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.keyText}>Gate</Text>
        <Text style={styles.valueText}>G2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.keyText}>Seat</Text>
        <Text style={styles.valueText}>20A</Text>
      </View>
      <View>
        <Image source={qrCode} style={styles.qrCode}/>
      </View>
    </View>
  );
};

export default Ticket;
