import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Card from '../../../components/Card';
import UpcomingBillCard from './../../../components/UpcomingBillCard/index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good morning, John!</Text>
        <Image source={require('../../../../assets/images/history.png')} />
      </View>
      <Card />
      <View style={styles.upcomingView}>
        <Text style={styles.upcomingText}>Upcomming bill</Text>
        <TouchableOpacity>
          <Text style={styles.labelPurple}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
      </ScrollView>
    </View>
  );
}