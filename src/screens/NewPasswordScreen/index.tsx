import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import Button from './../../components/Button/index';
import {THEME} from '../../theme';

const NewPasswordScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={'padding'}>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('../../../assets/images/fiLogo.png')}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>New Password</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.topInputText}>New password</Text>
              <Image source={require('../../../assets/images/star.png')} />
            </View>
            <TextInput style={styles.passwordInput} />

            <View style={styles.row}>
              <Text style={styles.topInputText}>Retype new password</Text>
              <Image source={require('../../../assets/images/star.png')} />
            </View>
            <TextInput style={styles.passwordInput} />

            <View style={styles.checkBoxContainer}>
              <CheckBox
                tintColors={{
                  true: THEME.PURPLE_COLOR,
                  false: THEME.PURPLE_COLOR,
                }}
                //   value={true}
                style={styles.checkBox}
              />
              <View>
                <Text style={styles.label}>Remember me</Text>
              </View>
            </View>

            <Button text="Sign in" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewPasswordScreen;
