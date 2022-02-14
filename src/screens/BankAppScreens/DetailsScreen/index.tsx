import {Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

import activityGraph from '../../../../assets/images/DetailsScreen/activityGraph.png';
import Card from './../../../components/Card/index';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.price}>$1299.60</Text>
        <Text style={styles.priceText}>US Dollar balance</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          resizeMode="stretch"
          source={activityGraph}
          style={styles.activityGraph}
        />
      </View>

      <View style={styles.historyArea}>
        <View style={styles.upcomingView}>
          <Text style={styles.upcomingText}>Balance detail</Text>
          <TouchableOpacity>
            <Text style={styles.labelPurple}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
