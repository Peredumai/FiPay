import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import styles from './style';
import Button from './../../../components/Button/index';

import succeedIcon from '../../../../assets/images/succeed.png';

const ForgotPasswordScreen = () => {
  const [login, setLogin] = useState<string>('');

  const [emailSucceed, setEmailSucceed] = useState<boolean>(false);

  const emailIcon = useMemo(() => {
    if (emailSucceed) {
      return <Image style={styles.icon} source={succeedIcon} />;
    }
  }, [emailSucceed]);

  const onLoginChanged = useCallback((text: string) => {
    text.trim().length >= 4 &&
    text.includes('@') &&
    text.includes('.') &&
    text[text.length - 1] !== '.'
      ? setEmailSucceed(true)
      : setEmailSucceed(false);
    setLogin(text);
  }, []);

  const disabled = useMemo(() => Boolean(!emailSucceed), [emailSucceed]);

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

          <View style={styles.emailContainer}>
            <Text style={styles.topInputText}>
              Email or Phone number <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, styles.row]}>
              <TextInput
                value={login}
                onChangeText={onLoginChanged}
                style={[styles.textinput]}
              />
              {emailIcon}
            </View>
          </View>

          <Button text="Create Account" disabled={disabled} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ForgotPasswordScreen;
