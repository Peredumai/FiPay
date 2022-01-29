import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import Button from '../../components/Button';

export default function VerificationCodeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verification Code</Text>
      <View style={styles.inputsContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>

      <Button text="Next" />
      <Text style={styles.resendCodeText}>Resend code in 48 s</Text>
    </View>
  );
}
