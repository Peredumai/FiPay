import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import ChartLabel from '../../../../assets/images/ChartLabel.svg';
import {THEME} from '../../../theme';

const ExpensesScreen = () => {
  const [month, setMonth] = useState(0);

  function* yLabel() {
    yield* [100, 200, 300, 400, 500, 600];
  }
  const yLabelIterator = yLabel();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.monthContainer}>
          <ScrollView
            style={styles.horizontalMonth}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
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
          </ScrollView>
        </View>
        <View style={styles.chartWrapper}>
          <View style={styles.lineChart}>
            <View style={styles.wrap}>
              <Text style={styles.chartLabelText}>Expenses graph</Text>
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
                      data: [300, 350, 310, 400, 360, 600, 500, 400],
                      strokeWidth: 4,
                      color: () => `#6D5FFD`,
                    },
                    {
                      data: [500, 600, 450, 490, 400, 430, 390, 350],
                      strokeWidth: 4,
                      color: () => `#FFB800`,
                    },
                    {
                      data: [210, 250, 280, 240, 210, 200, 240, 230],
                      strokeWidth: 4,
                      color: () => `#FF1843`,
                    },
                  ],
                }}
                width={Dimensions.get('window').width + 40}
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

export default ExpensesScreen;
