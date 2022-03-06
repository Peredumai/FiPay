import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

import arrowDown from '../../../../assets/images/Common/arrowDropDownPurple.png';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

const BudgetCalculationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <View style={styles.inner}>
          <View style={styles.rowBetween}>
            <Text style={styles.headerTitle}>Balance detail</Text>
            <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.text}>This Week</Text>
              <Image source={arrowDown} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bigPrice}>$1299.60</Text>

          <View style={styles.line} />

          <View style={styles.cardsContainer}>
            <View style={styles.rowBetween}>
              <View style={styles.card}>
                <Text style={styles.labelText}>Total</Text>
                <Text style={styles.priceText}>$948.3</Text>
              </View>
              <View style={[styles.card, styles.yellow]}>
                <Text style={styles.labelText}>Subtotal</Text>
                <Text style={[styles.priceText, styles.yellowText]}>
                  $374.4
                </Text>
              </View>
            </View>
            <View style={[styles.rowBetween, styles.mt24]}>
              <View style={[styles.card, styles.blue]}>
                <Text style={styles.labelText}>Payments</Text>
                <Text style={[styles.priceText, styles.blueText]}>$384.4</Text>
              </View>
              <View style={[styles.card, styles.red]}>
                <Text style={styles.labelText}>Summary</Text>
                <Text style={[styles.priceText, styles.redText]}>$748.4</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.historyArea}>
        <View style={styles.upcomingView}>
          <Text style={styles.upcomingText}>Transaction History</Text>
          <TouchableOpacity>
            <Text style={styles.labelPurple}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default BudgetCalculationScreen;
