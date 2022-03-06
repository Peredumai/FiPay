import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

import * as Progress from 'react-native-progress';

const CurrentBalanceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.purpleBackground}>
        <Text style={styles.headerText}>Current balance</Text>
        <View style={styles.incomeExpences}>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/images/Common/incomeImg.png')}
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
              source={require('../../../../assets/images/Common/expenseImg.png')}
            />
            <View>
              <View>
                <Text style={styles.headText}>Expense</Text>
              </View>
              <View>
                <Text style={styles.headPriceRed}>$11.300</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Progress.Circle size={130} />
      </View>
    </ScrollView>
  );
};

export default CurrentBalanceScreen;
