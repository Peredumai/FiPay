import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

import A from '../../../../assets/images/LinkNewCardIcons/1.png';
import B from '../../../../assets/images/LinkNewCardIcons/2.png';
import C from '../../../../assets/images/LinkNewCardIcons/3.png';
import D from '../../../../assets/images/LinkNewCardIcons/4.png';
import E from '../../../../assets/images/LinkNewCardIcons/5.png';
import F from '../../../../assets/images/LinkNewCardIcons/6.png';
import G from '../../../../assets/images/LinkNewCardIcons/7.png';
import H from '../../../../assets/images/LinkNewCardIcons/8.png';

import Visa from '../../../../assets/images/LinkNewCardIcons/visa.png';
import Master from '../../../../assets/images/LinkNewCardIcons/masterCard.png';
import Paypal from '../../../../assets/images/LinkNewCardIcons/paypal.png';
import Payoneer from '../../../../assets/images/LinkNewCardIcons/payoneer.png';

const LinkNewCardScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Bank Account</Text>

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <View>
              <Image source={A} />
              <Text style={styles.labelText}>Ally</Text>
            </View>
            <View>
              <Image source={B} />
              <Text style={styles.labelText}>ABN</Text>
            </View>
            <View>
              <Image source={C} />
              <Text style={styles.labelText}>BB&T</Text>
            </View>
            <View>
              <Image source={D} />
              <Text style={styles.labelText}>Bii</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={E} />
              <Text style={styles.labelText}>BSi</Text>
            </View>
            <View>
              <Image source={F} />
              <Text style={styles.labelText}>BKM</Text>
            </View>
            <View>
              <Image source={G} />
              <Text style={styles.labelText}>BNZ</Text>
            </View>
            <View>
              <Image source={H} />
              <Text style={styles.labelText}>BRI</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
          <Text style={styles.text}>See all</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Popular Bank Account</Text>

        <View style={styles.row}>
          <View>
            <Image source={Visa} />
            <Text style={styles.labelText}>VISA</Text>
          </View>
          <View>
            <Image source={Master} />
            <Text style={styles.labelText}>Mastercard</Text>
          </View>
          <View>
            <Image source={Paypal} />
            <Text style={styles.labelText}>Paypal</Text>
          </View>
          <View>
            <Image source={Payoneer} />
            <Text style={styles.labelText}>Payoneer</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
          <Text style={styles.text}>See all</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default LinkNewCardScreen;