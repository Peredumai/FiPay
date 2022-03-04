import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ContactCard from './../../../components/ContactCard/index';
import styles from './styles';

export default function SocialScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
        <ContactCard name={'Acourtney Henry'} phoneNum={'+62-878-5558-54'} />
      </View>
    </ScrollView>
  );
}
