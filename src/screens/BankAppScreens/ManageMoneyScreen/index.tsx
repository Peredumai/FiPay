import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

import ArrowLeft from '../../../../assets/images/ManageMoneyIcons/arrowLeft.png';
import ArrowRight from '../../../../assets/images/ManageMoneyIcons/arrowRight.png';
import IncomeIcon from '../../../../assets/images/ManageMoneyIcons/incomeIcon.png';
import ExpenseIcon from '../../../../assets/images/ManageMoneyIcons/expenseIcon.png';

import Transportation from '../../../../assets/images/ManageMoneyIcons/transportation.png';
import Flight from '../../../../assets/images/ManageMoneyIcons/flight.png';
import Food from '../../../../assets/images/ManageMoneyIcons/food.png';
import Shopping from '../../../../assets/images/ManageMoneyIcons/shopping.png';

const ManageMoneyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image source={ArrowLeft} />
        </TouchableOpacity>

        <Text style={styles.month}>January</Text>
        <TouchableOpacity>
          <Image source={ArrowRight} />
        </TouchableOpacity>
      </View>

      <View style={styles.incomeExpence}>
        <View style={styles.row}>
          <Image style={styles.incomeExpenceImg} source={IncomeIcon} />
          <View style={styles.inner}>
            <Text style={styles.text}>Income</Text>
            <Text style={styles.priceBlueText}>$14.700</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Image style={styles.incomeExpenceImg} source={ExpenseIcon} />
          <View style={styles.inner}>
            <Text style={styles.text}>Expense</Text>
            <Text style={styles.priceRedText}>$11.300</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsView}>
          <View style={styles.rowCenter}>
            <View style={styles.card}>
              <Image source={Transportation} />
              <Text style={styles.label}>Transportation</Text>
              <Text style={styles.price}>$3000</Text>
            </View>
            <View style={styles.card}>
              <Image source={Food} />
              <Text style={styles.label}>Food</Text>
              <Text style={styles.price}>$3300</Text>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <View style={styles.card}>
              <Image source={Shopping} />
              <Text style={styles.label}>Shopping</Text>
              <Text style={styles.price}>$3200</Text>
            </View>
            <View style={styles.card}>
              <Image source={Flight} />
              <Text style={styles.label}>Flight</Text>
              <Text style={styles.price}>$3100</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ManageMoneyScreen;
