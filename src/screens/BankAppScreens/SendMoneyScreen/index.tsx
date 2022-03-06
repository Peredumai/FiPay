import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';

import searchIcon from '../../../../assets//images/Common/search.png';
import Phone from '../../../../assets//images/SendMoneyIcons/phone.png';
import Shop from '../../../../assets//images/SendMoneyIcons/shop.png';
import Wifi from '../../../../assets//images/SendMoneyIcons/wifi.png';
import Wallet from '../../../../assets//images/SendMoneyIcons/wallet.png';
import ContactCard from './../../../components/ContactCard/index';
import Line from './../../../components/Line/index';

const SendMoneyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, styles.row]}>
        <TextInput placeholder="Search" style={styles.textinput} />
        <Image style={styles.icon} source={searchIcon} />
      </View>

      <View style={styles.iconsWrapper}>
        <View style={styles.wrapper}>
          <Image source={Phone} />
          <Text style={styles.labelText}>Mobile</Text>
        </View>
        <View style={styles.wrapper}>
          <Image source={Wifi} />
          <Text style={styles.labelText}>Wifi</Text>
        </View>
        <View style={styles.wrapper}>
          <Image source={Wallet} />
          <Text style={styles.labelText}>Wallet</Text>
        </View>
        <View style={styles.wrapper}>
          <Image source={Shop} />
          <Text style={styles.labelText}>Shop</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
        <Text style={styles.text}>See all services</Text>
      </TouchableOpacity>
      <Line />

      <Text style={styles.header}>Contact</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
      </ScrollView>
    </View>
  );
};

export default SendMoneyScreen;
