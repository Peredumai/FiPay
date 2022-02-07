import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

export default function CurrentBalanceScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBackground}>
        <Text style={styles.headerText}>Current balance</Text>
        <View style={styles.incomeExpences}>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/images/incomeImg.png')}
            />
            <View>
              <View>
                <Text style={styles.headText}>Income</Text>
              </View>
              <View>
                <Text style={styles.headPrice}>$14.700</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/images/expenseImg.png')}
            />
            <View>
              <View>
                <Text style={styles.headText}>Expense</Text>
              </View>
              <View>
                <Text style={styles.headPrice}>$11.300</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.balanceImg}
          source={require('../../../../assets/images/currentBalanceDiagram.png')}
        />
      </View>
    </View>
  );
}