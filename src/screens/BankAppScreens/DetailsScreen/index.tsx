/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';

import ChartLabel from '../../../../assets/images/Common/ChartLabel.svg';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native';
import MiniCard from './../../../components/MiniCard/index';

const DetailsScreen = () => {
  function* yLabel() {
    yield* [10, 20, 30, 40, 50, 60];
  }
  const yLabelIterator = yLabel();

  const data = [10, 33, 21, 43, 60];

  const datapoints = data.map(datapoint => datapoint - 10);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.price}>$1299.60</Text>
          <Text style={styles.priceText}>US Dollar balance</Text>
        </View>
        <Text style={styles.activityText}>Activity graph</Text>
        <View style={styles.lineChart}>
          <LineChart
            withInnerLines={false}
            withOuterLines={false}
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
                '',
              ],
              datasets: [
                {
                  data: datapoints,
                },
              ],
            }}
            width={Dimensions.get('window').width + 70}
            height={180}
            segments={5}
            fromZero={true}
            getDotProps={(value, index) => {
              if (index === 0) {
                return {
                  r: '0',
                  strokeWidth: '7',
                  stroke: '#ffffff',
                };
              }
              if (index === data.length - 1) {
                return {
                  r: '0',
                  strokeWidth: '7',
                  stroke: '#ffffff',
                };
              }
              return {
                r: '11',
                strokeWidth: '7',
                stroke: '#ffffff',
              };
            }}
            renderDotContent={({x, y, index}) => {
              if (index === 0) {
                return;
              }
              if (index === data.length - 1) {
                return;
              }
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
            }}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2,
              color: (opacity = 1) => `#6D5FFD`,
              labelColor: (opacity = 1) => `#858C94`,
              style: {
                borderRadius: 16,
              },
              strokeWidth: 5,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.cardsArea}>
          <View style={styles.upcomingView}>
            <Text style={styles.upcomingText}>Balance detail</Text>
            <TouchableOpacity>
              <Text style={styles.labelPurple}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.cardsContainer}>
            <MiniCard price={939} text="All" color="#6D5FFD" />
            <MiniCard price={500} text="Income" color="#FFB800" />
            <MiniCard price={456} text="Outcome" color="#FF1843" />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
