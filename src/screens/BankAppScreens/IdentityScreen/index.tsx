import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Button from './../../../components/Button/index';

export default function IdentityCardScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={styles.scanImage}
          source={require('../../../../assets/images/scanIdentityCard.png')}
        />
        <View>
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
          <Button text="Save" disabled={false} />
        </View>
      </View>
    </ScrollView>
  );
}
