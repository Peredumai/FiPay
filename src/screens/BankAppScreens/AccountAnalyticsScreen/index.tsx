import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import ChartLabel from '../../../../assets/images/ChartLabel.svg';
import {THEME} from '../../../theme';

const AccountAnalyticsScreen = () => {
  const [month, setMonth] = useState(0);

  function* yLabel() {
    yield* [10, 20, 30, 40, 50, 60];
  }
  const yLabelIterator = yLabel();

  const months = ['Day', 'Week', 'Month', 'Year'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.monthContainer}>
          <View style={styles.horizontalMonth}>
            {months.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item}
                  style={index === 0 ? styles.ml : null}
                  onPress={() => setMonth(index)}>
                  <Text
                    style={
                      month === index
                        ? styles.monthsTextActive
                        : styles.monthsText
                    }>
                    {item}
                  </Text>
                  {month === index && <View style={styles.underLine} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.chartWrapper}>
          <View style={styles.lineChart}>
            <View style={styles.wrap}>
              <Text style={styles.chartLabelText}>Activity</Text>
              <LineChart
                withInnerLines={false}
                withOuterLines={false}
                withHorizontalLines={true}
                withHorizontalLabels={true}
                segments={5}
                yLabelsOffset={4}
                formatYLabel={() => yLabelIterator.next().value}
                data={{
                  labels: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '',
                  ],
                  datasets: [
                    {
                      data: [
                        34, 11, 45, 60, 43, 32, 53, 42, 21, 13, 64, 13, 57, 43,
                        24, 44, 24, 42, 32, 2, 43, 13, 43, 13, 15, 60, 43, 34,
                        11, 45, 60, 43, 32, 53, 42, 21, 13, 64, 13, 57, 43, 24,
                        44, 24, 42, 32, 2, 43, 13, 43, 13, 15, 60, 43, 34, 11,
                        45, 60, 43, 32, 53, 42, 21, 13, 64, 13, 57, 43, 24, 44,
                        24, 42, 32, 2, 43, 13, 43, 13, 15, 60, 43, 34, 11, 45,
                        60, 43, 32, 53, 42, 21, 13, 64
                      ],
                      strokeWidth: 3,
                      color: () => `#6D5FFD`,
                    },
                  ],
                }}
                width={Dimensions.get('window').width + 45}
                height={230}
                segments={5}
                withShadow={true}
                fromZero={true}
                yAxisInterval={4}
                getDotColor={() => '#ffffff'}
                getDotProps={(value, index) => {
                  return {
                    r: '0',
                    strokeWidth: '7',
                    stroke: '#ffffff',
                  };
                }}
                chartConfig={{
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `#858C94`,
                  labelColor: (opacity = 1) => '#858C94',
                  style: {
                    borderRadius: 16,
                  },
                  strokeWidth: 5,
                  propsForLabels: {
                    fontFamily: THEME.BOLD_FONT,
                    fontSize: 14,
                  },
                  useShadowColorFromDataset: true,
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
        <View style={styles.historyArea}>
          <View style={styles.upcomingView}>
            <Text style={styles.upcomingText}>Transaction History</Text>
            <TouchableOpacity>
              <Text style={styles.labelPurple}>See All</Text>
            </TouchableOpacity>
          </View>
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountAnalyticsScreen;
