import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import TransacrionHistoryCard from '../../../components/TransacrionHistoryCard';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartImage}>
        <Text>jdslfjdslfj</Text>
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
