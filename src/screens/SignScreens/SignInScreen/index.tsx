import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import Button from './../../../components/Button/index';
import {THEME} from './../../../theme';

const SignInScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../../../assets/images/fiLogo.png')}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.firstText}>Sign in to </Text>
            <Text style={styles.secondText}>FiPay</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.topInputText}>Email or Phone Number</Text>
            <Image source={require('../../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.emailInput} />

          <View style={styles.row}>
            <Text style={styles.topInputText}>Password</Text>
            <Image source={require('../../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.passwordInput} />

          <View style={styles.checkBoxContainer}>
            <CheckBox
              tintColors={{
                true: THEME.PURPLE_COLOR,
                false: THEME.PURPLE_COLOR,
              }}
              // value={true}
              style={styles.checkBox}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>

          <Button text="Sign in" />

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={styles.forgotOpacity}>
            <Text style={styles.forgotText}>Forgot the password?</Text>
          </TouchableOpacity>

          <View style={styles.haveNotAccountContainer}>
            <Text style={styles.haveNotAccountContainerText}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CreateAccount');
              }}
              style={styles.haveNotAccountOpacity}>
              <Text style={styles.haveNotAccountText}>&nbsp; Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInScreen;
