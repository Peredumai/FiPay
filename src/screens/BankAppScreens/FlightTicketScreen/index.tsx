import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Ticket from '../../../components/Ticket';
import Button from './../../../components/Button/index';

const FlightTicketScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, styles.first]}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/TicketIcons/destinationRed.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.marketText}>London, UK</Text>
            <Text style={styles.dateText}>December 28, 2021</Text>
          </View>
        </View>
        <Text style={styles.timeText}>18.00</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/TicketIcons/destinationBlue.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.marketText}>California, USA</Text>
            <Text style={styles.dateText}>December 28, 2021</Text>
          </View>
        </View>
        <Text style={styles.timeText}>18.00</Text>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
        <Text style={styles.text}>View ticket</Text>
      </TouchableOpacity>

      <Ticket />

      <Button text={'ok'} disabled={false} />
    </View>
  );
};

export default FlightTicketScreen;
