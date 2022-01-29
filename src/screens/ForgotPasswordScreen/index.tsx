import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';
import Button from '../../components/Button/index';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Forgot password</Text>
            <Text style={styles.helpText}>
              Please enter your email, we will confirm the password change via
              email
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.topInputText}>Email or Phone Number</Text>
            <Image source={require('../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.emailInput} />
          <Button text="Create Account" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ForgotPasswordScreen;
