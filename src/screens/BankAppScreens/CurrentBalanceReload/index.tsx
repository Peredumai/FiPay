import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ViewBase,
} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

import * as Progress from 'react-native-progress';

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryContainer,
} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 11000},
  {quarter: 5, earnings: 3000},
  {quarter: 6, earnings: 7000},
  {quarter: 7, earnings: 9000},
  {quarter: 8, earnings: 13000},
  {quarter: 9, earnings: 1350},
  {quarter: 10, earnings: 9000},
  {quarter: 11, earnings: 2000},
  {quarter: 12, earnings: 6000},
  {quarter: 13, earnings: 8000},
  {quarter: 14, earnings: 5000},
  {quarter: 15, earnings: 12000},
  {quarter: 16, earnings: 11000},
  {quarter: 17, earnings: 12000},
  {quarter: 18, earnings: 11000},
  {quarter: 19, earnings: 12000},
  {quarter: 20, earnings: 14566},
  {quarter: 21, earnings: 11355},
  {quarter: 22, earnings: 13678},
  {quarter: 23, earnings: 2455},
  {quarter: 24, earnings: 5366},
  {quarter: 25, earnings: 8356},
  {quarter: 26, earnings: 14765},
  {quarter: 27, earnings: 1456},
  {quarter: 28, earnings: 11645},
  {quarter: 29, earnings: 13324},
  {quarter: 30, earnings: 11600},
];

const CurrentBalanceScreenReload = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.purple}></View>

      <View style={{paddingHorizontal: 24}}>
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
                <Text style={styles.headPriceRed}>$11.300</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.chartWrapper}>
            <Progress.Circle
              animated={false}
              borderWidth={0}
              size={230}
              progress={0.7}
              thickness={15}
              strokeCap={'round'}
              color={'#6D5FFD'}
            />
            <View style={{position: 'absolute'}}>
              <Text style={styles.dateText}>DEC 28</Text>
              <Text style={styles.perCentText}>60%</Text>
            </View>
          </View>
          <Text style={styles.label}>Days</Text>
          <View style={styles.barchartWrapper}>
            <VictoryChart>
              <VictoryAxis
                height={100}
                dependentAxis
                offsetX={0}
                tickValues={[1, 5, 10, 15, 20, 25, 30]}
                crossAxis={true}
              />
              <VictoryBar
                padding={{top: 0, bottom: 0}}
                domainPadding={{x: [0, 0], y: 35}}
                height={100}
                cornerRadius={2}
                barWidth={4}
                style={{
                  data: {fill: '#6D5FFD'},
                }}
                data={data}
                x="quarter"
                y="earnings"
              />
            </VictoryChart>
            <View style={styles.nums}>
              <Text style={styles.num}>1</Text>
              <Text style={styles.num}>5</Text>
              <Text style={styles.num}>10</Text>
              <Text style={styles.num}>15</Text>
              <Text style={styles.num}>20</Text>
              <Text style={styles.num}>25</Text>
              <Text style={styles.num}>30</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CurrentBalanceScreenReload;
