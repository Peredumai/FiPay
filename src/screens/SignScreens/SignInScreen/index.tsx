import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import React, {useCallback, useMemo, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import Button from './../../../components/Button/index';

import {useNavigation} from '@react-navigation/native';

// import * as LoginApi from '../../../api/login';

import eye from '../../../../assets/images/Common/eye.png';
import hiddenEye from '../../../../assets/images/Common/hidden_eye.png';
import errorIcon from '../../../../assets/images/Common/error_icon.png';
import fiLogo from '../../../../assets/images/Common/fiLogo.png';
import error from '../../../../assets/images/Common/error.png';
import succeedIcon from '../../../../assets/images/Common/succeed.png';

const SignInScreen = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [remember, setRemember] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({
    login: '',
    password: '',
    general: '',
  });

  const [emailSucceed, setEmailSucceed] = useState<boolean>(false);
  const [passwordSucceed, setPasswordSucceed] = useState<boolean>(false);

  const navigation = useNavigation();

  const changeVisible = useCallback(() => {
    setIsVisible((prevState: boolean) => !prevState);
  }, []);

  const emailIcon = useMemo(() => {
    if (!errors.login && emailSucceed) {
      return <Image style={styles.icon} source={succeedIcon} />;
    } else if (errors.login) {
      return <Image style={styles.icon} source={errorIcon} />;
    }
  }, [errors.login, emailSucceed]);

  const passwordIcon = useMemo(() => {
    if (!errors.password && passwordSucceed) {
      return <Image style={styles.icon} source={succeedIcon} />;
    } else if (!errors.password) {
      return (
        <TouchableOpacity onPress={changeVisible} style={styles.visibleControl}>
          <Image style={styles.icon} source={isVisible ? eye : hiddenEye} />
        </TouchableOpacity>
      );
    } else if (errors.password) {
      return <Image style={styles.icon} source={errorIcon} />;
    }
  }, [errors.password, changeVisible, isVisible, passwordSucceed]);

  const onLoginChanged = useCallback(
    (text: string) => {
      text.trim().length >= 4 ? setEmailSucceed(true) : setEmailSucceed(false);
      setLogin(text);
      setErrors({
        ...errors,
        login: '',
      });
    },
    [errors],
  );

  const onPasswordChanged = useCallback(
    (text: string) => {
      text.trim().length >= 4
        ? setPasswordSucceed(true)
        : setPasswordSucceed(false);
      setPassword(text);
      setErrors({
        ...errors,
        password: '',
      });
    },
    [errors],
  );

  const createAccount = useCallback(() => {
    navigation.navigate('CreateAccount' as any);
  }, [navigation]);

  const forgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword' as any);
  }, [navigation]);

  const finishAuthentication = useCallback(() => {
    navigation.navigate('FaceAuth' as any);
  }, [navigation]);

  const signIn = async () => {
    const errorsObject: any = {
      login: login.length < 4 && 'Invalid email or phone',
      password: password.length < 4 && 'Invalid password',
    };

    const hasErrors = Object.keys(errorsObject).find(
      (key: string) => errorsObject[key],
    );
    setErrors(errorsObject);

    if (hasErrors) {
      return;
    }

    try {
      // const token = await LoginApi.signIn({
      //   login,
      //   password,
      // });

      await finishAuthentication();
    } catch (e: any) {
      setErrors({
        ...errors,
        general: e.message,
      });
    }
  };

  const setIsRemember = useCallback(() => {
    setRemember((prevState: boolean) => !prevState);
  }, []);

  const disabled = Boolean(!login || !password);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Image style={styles.logoImage} source={fiLogo} />

          <View style={styles.textContainer}>
            <Text style={styles.firstText}>Sign in to </Text>
            <Text style={styles.secondText}>FiPay</Text>
          </View>

          <View>
            <Text style={styles.topInputText}>
              Email or Phone number<Text style={styles.required}>*</Text>
            </Text>
            <View
              style={[
                styles.inputContainer,
                styles.row,
                Boolean(errors.login) && styles.errorInput,
              ]}>
              <TextInput
                value={login}
                onChangeText={onLoginChanged}
                style={[
                  styles.textinput,
                  Boolean(errors.login) && styles.errorInput,
                ]}
              />
              {emailIcon}
            </View>
          </View>

          {!!errors.login && (
            <View style={[styles.error, styles.row]}>
              <Image style={styles.dangerIcon} source={error} />
              <Text style={styles.errorText}>{errors.login}</Text>
            </View>
          )}

          <View>
            <Text style={styles.topInputText}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <View
              style={[
                styles.inputContainer,
                styles.row,
                Boolean(errors.password) && styles.passwordInput,
              ]}>
              <TextInput
                value={password}
                onChangeText={onPasswordChanged}
                secureTextEntry={isVisible}
                style={styles.textinput}
              />
              {passwordIcon}
            </View>
          </View>

          {!!errors.password && (
            <View style={[styles.error, styles.row]}>
              <Image style={styles.dangerIcon} source={error} />
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          )}

          {!!errors.general && (
            <Text style={styles.error}>
              <Image style={styles.dangerIcon} source={error} />
              {errors.general}
            </Text>
          )}

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

          <Button text="Sign in" onPress={signIn} disabled={disabled} />

          <TouchableOpacity
            onPress={forgotPassword}
            style={styles.forgotOpacity}>
            <Text style={styles.forgotText}>Forgot the password?</Text>
          </TouchableOpacity>

          <View style={styles.haveNotAccountContainer}>
            <Text style={styles.haveNotAccountContainerText}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={createAccount}>
              <Text style={styles.haveNotAccountText}>&nbsp; Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInScreen;
