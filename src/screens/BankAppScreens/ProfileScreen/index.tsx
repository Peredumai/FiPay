import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.boldFont}>Email Address</Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Primary</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>jo*****@gmail.com</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Secondary</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>do*****@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.boldFont}>Phone Numbers</Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Primary</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>**** **** 5645</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Secondary</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>**** **** 4736</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.boldFont}>Email Address</Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Address 1</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>Bung Tomo St. 067</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.defaultFont}>Address 2</Text>
          </View>
          <View>
            <Text style={styles.boldFont}>Simanjuntak St. 110</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonWrap}>
        <Button disabled={false} text={'Edit Information'} />
      </View>
    </View>
  );
}
