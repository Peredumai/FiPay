import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import Button from './../../../components/Button/index';

import eye from '../../../../assets/images/Common/eye.png';
import hiddenEye from '../../../../assets/images/Common/hidden_eye.png';

const NewPasswordScreen = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isVisibleAgain, setIsVisibleAgain] = useState<boolean>(true);
  const [remember, setRemember] = useState<boolean>(false);

  const onPasswordChanged = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onPasswordAgainChanged = useCallback((text: string) => {
    setPasswordAgain(text);
  }, []);

  const changeVisible = useCallback(() => {
    setIsVisible((prevState: boolean) => !prevState);
  }, []);

  const changeVisibleAgain = useCallback(() => {
    setIsVisibleAgain((prevState: boolean) => !prevState);
  }, []);

  const disabled = Boolean(password.length >= 4 && password === passwordAgain);

  const setIsRemember = useCallback(() => {
    setRemember((prevState: boolean) => !prevState);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../../../assets/images/Common/fiLogo.png')}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>New Password</Text>
          </View>

          <View>
            <Text style={styles.topInputText}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, styles.row]}>
              <TextInput
                value={password}
                onChangeText={onPasswordChanged}
                secureTextEntry={isVisible}
                style={styles.textinput}
              />
              <TouchableOpacity
                onPress={changeVisible}
                style={styles.visibleControl}>
                <Image
                  style={styles.icon}
                  source={isVisible ? eye : hiddenEye}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.topInputText}>
              Retype new password <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, styles.row]}>
              <TextInput
                value={passwordAgain}
                onChangeText={onPasswordAgainChanged}
                secureTextEntry={isVisibleAgain}
                style={styles.textinput}
              />
              <TouchableOpacity
                onPress={changeVisibleAgain}
                style={styles.visibleControl}>
                <Image
                  style={styles.icon}
                  source={isVisibleAgain ? eye : hiddenEye}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.checkBoxContainer, styles.checkbox]}
            onPress={setIsRemember}>
            <CheckBox
              value={remember}
              onChange={setIsRemember}
              tintColors={{true: '#6D5FFD', false: '#6D5FFD'}}
            />
            <Text style={styles.label}>Remember me</Text>
          </TouchableOpacity>

          <Button text="Sign in" disabled={!disabled} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NewPasswordScreen;
