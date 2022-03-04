import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import ChartLabel from '../../../../assets/images/ChartLabel.svg';
import {THEME} from '../../../theme';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartWrapper}>
        <View style={styles.lineChart}>
          <View style={styles.row}>
            <Text style={styles.labelText}>This Week</Text>
            <View style={styles.chartLine} />
            <Text style={[styles.labelText, styles.ml]}>Last Week</Text>
            <View style={[styles.chartLine, styles.lightPurple]} />
          </View>
          <View style={styles.wrap}>
            <LineChart
              withInnerLines={false}
              withOuterLines={false}
              withHorizontalLines={true}
              withHorizontalLabels={false}
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [10, 33, 21, 43, 20, 30, 20],
                    strokeWidth: 4,
                  },
                  {
                    data: [20, 25, 10, 33, 10, 10, 45],
                    strokeWidth: 4,
                    color: () => `rgba(109, 95, 253, 0.2)`,
                    withDots: false,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 24}
              height={160}
              segments={5}
              withShadow={false}
              fromZero={true}
              getDotColor={() => '#ffffff'}
              getDotProps={(value, index) => {
                if (index === 1 && typeof value === 'number') {
                  return {
                    r: '8',
                    strokeWidth: '7',
                    stroke: '#6D5FFD',
                  };
                } else {
                  return {
                    r: '0',
                    strokeWidth: '7',
                    stroke: '#ffffff',
                  };
                }
              }}
              renderDotContent={({x, y, index}) => {
                if (index === 1) {
                  return (
                    <View
                      style={{
                        height: 24,
                        width: 24,
                        backgroundColor: '#abc',
                        position: 'absolute',
                        top: y - 65,
                        left: x - 32,
                      }}>
                      <ChartLabel />
                    </View>
                  );
                } else {
                  return;
                }
              }}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2,
                color: (opacity = 1) => `#6D5FFD`,
                labelColor: (opacity = 1) => '#6D5FFD',
                style: {
                  borderRadius: 16,
                },
                strokeWidth: 5,
                propsForLabels: {
                  fontFamily: THEME.BOLD_FONT,
                  fontSize: 14,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.purpleBackground}>
        <Text style={styles.headerText}>Statistics</Text>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>This Week</Text>
          <Image
            source={require('../../../../assets/images/arrowDropDown.png')}
          />
        </TouchableOpacity>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default StatisticsScreen;
