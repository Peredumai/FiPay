import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import Button from './../../components/Button/index';
import {THEME} from '../../theme';

const CreateAccountScreen = props => {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={'height'}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require('../../../assets/images/fiLogo.png')}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.headerText}>Create a new account</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.topInputText}>Full Name</Text>
                <Image source={require('../../../assets/images/star.png')} />
              </View>
              <TextInput
                style={styles.fullNameInput}
                underlineColorAndroid="transparent"
              />

              <View style={styles.row}>
                <Text style={styles.topInputText}>Email or Phone Number</Text>
                <Image source={require('../../../assets/images/star.png')} />
              </View>
              <TextInput style={styles.emailInput} />

              <View style={styles.row}>
                <Text style={styles.topInputText}>Password</Text>
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
                  <Text style={styles.label}>
                    By creating an account, you agree to our
                  </Text>
                  <TouchableOpacity style={styles.haveNotAccountOpacity}>
                    <Text style={styles.labelPurple}>Term and Conditions</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button text="Create Account" />

              <View style={styles.haveNotAccountContainer}>
                <Text style={styles.haveNotAccountContainerText}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('SignIn')}>
                  <Text style={styles.haveNotAccountText}>&nbsp;Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccountScreen;
