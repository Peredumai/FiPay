import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Button from './../../../components/Button/index';

import ScanCamera from '../../../../assets/images/scanCamera.svg';

const IdentityCardScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.scanArea}>
          <ScanCamera />
          <Text style={styles.scanText}>Scan Identity Card</Text>
        </View>
        <View style={styles.mt}>
          <Text style={styles.topInputText}>
            ID Card Number <Text style={styles.required}>*</Text>
          </Text>
          <View style={[styles.inputContainer, styles.row]}>
            <TextInput
              // value={fullName}
              // onChangeText={onFullNameChanged}
              style={styles.textinput}
            />
          </View>
        </View>

        <View>
          <Text style={styles.topInputText}>
            Country / Region <Text style={styles.required}>*</Text>
          </Text>
          <View style={[styles.inputContainer, styles.row]}>
            <TextInput
              // value={fullName}
              // onChangeText={onFullNameChanged}
              style={styles.textinput}
            />
          </View>
        </View>

        <View>
          <Text style={styles.topInputText}>
            Expired Date <Text style={styles.required}>*</Text>
          </Text>
          <View style={[styles.inputContainer, styles.row]}>
            <TextInput
              // value={fullName}
              // onChangeText={onFullNameChanged}
              style={styles.textinput}
            />
            <Image
              style={styles.icon}
              source={require('../../../../assets/images/calendarIcon.png')}
            />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <Button text="Save" disabled={true} />
        </View>
      </View>
    </ScrollView>
  );
};

export default IdentityCardScreen;
