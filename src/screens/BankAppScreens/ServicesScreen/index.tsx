import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';

import Add from '../../../../assets/images/ServicesScreen/1.svg';
import Manage from '../../../../assets/images/ServicesScreen/2.svg';
import Balance from '../../../../assets/images/ServicesScreen/3.svg';
import Create from '../../../../assets/images/ServicesScreen/4.svg';
import Credit from '../../../../assets/images/ServicesScreen/5.svg';

import ArrowRight from '../../../../assets/images/ServicesScreen/arrowRight.svg';
import Line from './../../../components/Line/index';

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={[styles.row, styles.wrapper]}>
          <View style={[styles.firstSection, styles.purpleColorDark]}>
            <Add />
          </View>
          <View style={[styles.row, styles.secondSection, styles.purpleColor]}>
            <View>
              <Text style={styles.text}>Add or Manage</Text>
              <Text style={styles.text}>Authorized Users</Text>
            </View>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
        <Line />

        <View style={[styles.row, styles.wrapper]}>
          <View style={[styles.firstSection, styles.yellowColorDark]}>
            <Manage />
          </View>
          <View style={[styles.row, styles.secondSection, styles.yellowColor]}>
            <Text style={styles.text}>Manage Cards & Devices</Text>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
        <Line />

        <View style={[styles.row, styles.wrapper]}>
          <View style={[styles.firstSection, styles.blueColorDark]}>
            <Balance />
          </View>
          <View style={[styles.row, styles.secondSection, styles.blueColor]}>
            <Text style={styles.text}>Balance Transfer</Text>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
        <Line />

        <View style={[styles.row, styles.wrapper]}>
          <View style={[styles.firstSection, styles.redColorDark]}>
            <Create />
          </View>
          <View style={[styles.row, styles.secondSection, styles.redColor]}>
            <Text style={styles.text}>Create or Change Cash Pin</Text>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
        <Line />

        <View style={[styles.row, styles.wrapper]}>
          <View style={[styles.firstSection, styles.purpleColorDark]}>
            <Credit />
          </View>
          <View style={[styles.row, styles.secondSection, styles.purpleColor]}>
            <Text style={styles.text}>Credit Line Increase</Text>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
        <Line />
      </View>
    </ScrollView>
  );
};

export default ServicesScreen;
