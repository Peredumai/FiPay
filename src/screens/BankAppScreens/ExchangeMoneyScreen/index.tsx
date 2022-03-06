import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import CircleDown from '../../../../assets/images/Common/circleDown.png';
import Dropdown from '../../../components/DropDown';


const ExchangeMoneyScreen = () => {
  const [fromCurrencyValue, setFromCurrencyValue] = useState('USD');
  const [toCurrencyValue, setToCurrencyValue] = useState('EUR');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.innerSection}>
          <View>
            <Text style={styles.label}>From</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowNear}>
              <Dropdown
                text={'currencyText'}
                type={'currencyPicker'}
                initial={fromCurrencyValue}
                change={setFromCurrencyValue}
                isHalfWidth={true}
              />
            </TouchableOpacity>
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
              <TouchableOpacity style={styles.rowNear}>
                <Dropdown
                  text={'currencyText'}
                  type={'currencyPicker'}
                  initial={fromCurrencyValue}
                  change={setFromCurrencyValue}
                  isHalfWidth={true}
                />
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
};

export default ExchangeMoneyScreen;
