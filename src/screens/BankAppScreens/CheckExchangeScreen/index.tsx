import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import CircleDown from '../../../../assets/images/circleDown.png';
import Dropdown from '../../../components/DropDown';
import styles from './style';

const CheckExchangeScreen = () => {
  const [fromCurrencyValue, setFromCurrencyValue] = useState('USD');
  const [toCurrencyValue, setToCurrencyValue] = useState('EUR');
  const [toCurrencyValue2, setToCurrencyValue2] = useState('SGD');

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
                <Dropdown
                  text={'currencyText'}
                  type={'currencyPicker'}
                  initial={fromCurrencyValue}
                  change={setFromCurrencyValue}
                  isHalfWidth={false}
                />
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
                <Dropdown
                  text={'currencyText'}
                  type={'currencyPicker'}
                  initial={toCurrencyValue2}
                  change={setToCurrencyValue2}
                  isHalfWidth={false}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>$271.66</Text>
            </View>
          </View>
        </View>

        <View style={styles.lastInnerSection}>
          <View>
            <Text style={styles.label}>To</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.row}>
                <Dropdown
                  text={'currencyText'}
                  type={'currencyPicker'}
                  initial={toCurrencyValue}
                  change={setToCurrencyValue}
                  isHalfWidth={false}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>$176.57</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
          <Text style={styles.text}>Add another currency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckExchangeScreen;
