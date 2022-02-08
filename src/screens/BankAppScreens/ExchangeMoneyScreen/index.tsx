import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import ExchangeDropDown from '../../../../assets/images/exchangeDropDown.png';

import CircleDown from '../../../../assets/images/circleDown.png';
import Dropdown from '../../../components/DropDown';

export default function ExchangeMoneyScreen() {
  const [countryValue, setCountryValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.innerSection}>
          <View>
            <Text style={styles.label}>From</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.row}>
                <Text style={styles.currency}>USD</Text>
                <Image source={ExchangeDropDown} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>$199</Text>
            </View>
          </View>
        </View>
        <Image style={styles.cirleImg} source={CircleDown} />
        <View style={styles.innerSection}>
          <View>
            <Text style={styles.label}>To</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.row}>
                <Text style={styles.currency}>EUR</Text>
                <Image source={ExchangeDropDown} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>$176.57</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
