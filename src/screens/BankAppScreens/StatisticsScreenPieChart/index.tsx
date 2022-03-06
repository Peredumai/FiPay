import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';
import PieChart from 'react-native-pie-chart';

import ArrowDown from '../../../../assets/images/StatisticsIcons/arrowDownBlue.svg';
import ArrowUp from '../../../../assets/images/StatisticsIcons/arrowUpRed.svg';
import {BottomPopup} from './../../../components/BottomPopup/index';
import Filter from '../../../components/Filter';
import Line from './../../../components/Line/index';

const StatisticsScreenPieChart = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  const widthAndHeight = 215;
  const series = [123, 321, 523, 789, 537];
  const sliceColor = ['#FFB800', '#6D5FFD', '#FF1843', '#1867FF', '#E1604D'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <BottomPopup
          component={<Filter />}
          onTouchOutside={onClosePopup}
          ref={target => (popupRef = target)}
        />
        {/* <Image
        style={styles.chartImage}
        source={require('../../../../assets/images/chart.png')}
      /> */}
        <View style={styles.chartWrapper}>
          <View style={styles.chartView}>
            <View style={styles.rowBetween}>
              <View style={styles.cardContainer}>
                <Text style={styles.inOutComeText}>Incomes</Text>
                <View style={styles.row}>
                  <Text style={styles.priceText}>$200.20</Text>
                  <ArrowDown />
                </View>
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.inOutComeText}>Outcomes</Text>
                <View style={styles.row}>
                  <Text style={styles.priceText}>$160.80</Text>
                  <ArrowUp />
                </View>
              </View>
            </View>
            <Line />
            <View style={styles.chart}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.8}
              />

              <View style={{position: 'absolute'}}>
                <Text style={styles.dateText}>DEC 28</Text>
                <Text style={styles.perCentText}>60%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.purpleBackground}>
          <Text style={styles.headerText}>StatisticsPieChart</Text>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={onShowPopup}>
            <Text style={styles.text}>This Week</Text>
            <Image
              source={require('../../../../assets/images/Common/arrowDropDown.png')}
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
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
          <TransacrionHistoryCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default StatisticsScreenPieChart;
