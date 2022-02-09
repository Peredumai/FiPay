import {Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

import British from '../../../../assets/images/FlagsImages/british.png';
import Canada from '../../../../assets/images/FlagsImages/canada.png';
import China from '../../../../assets/images/FlagsImages/china.png';
import French from '../../../../assets/images/FlagsImages/french.png';
import Germany from '../../../../assets/images/FlagsImages/germany.png';
import Singapore from '../../../../assets/images/FlagsImages/singapore.png';

const CurrencyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.price}>$1299.60</Text>
        <Text style={styles.priceText}>US Dollar balance</Text>
      </View>

      <Text style={styles.header}>Other currencies</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={British} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={Canada} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={China} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={French} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={Germany} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image style={styles.flag} source={Singapore} />
            <View>
              <Text style={styles.sumText}>429.38</Text>
              <Text style={styles.label}>British pound</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CurrencyScreen;
