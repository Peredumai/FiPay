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
import {THEME} from './../../../theme';

import eye from '../../../../assets/images/Common/eye.png';
import hiddenEye from '../../../../assets/images/Common/hidden_eye.png';
import errorIcon from '../../../../assets/images/Common/error_icon.png';
import error from '../../../../assets/images/Common/error.png';
import succeedIcon from '../../../../assets/images/Common/succeed.png';
import {useNavigation} from '@react-navigation/native';

const CreateAccountScreen = props => {
  const [fullName, setFullName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [fullNameSucceed, setFullNameSucceed] = useState<boolean>(false);
  const [emailSucceed, setEmailSucceed] = useState<boolean>(false);
  const [passwordSucceed, setPasswordSucceed] = useState<boolean>(false);

  const navigation = useNavigation();

  const setIsRemember = useCallback(() => {
    setRemember((prevState: boolean) => !prevState);
  }, []);

  const [errors, setErrors] = useState<any>({
    fullName: '',
    login: '',
    password: '',
    general: '',
  });

  const changeVisible = useCallback(() => {
    setIsVisible((prevState: boolean) => !prevState);
  }, []);

  const fullNameIcon = useMemo(() => {
    if (!errors.fullName && fullNameSucceed) {
      return <Image style={styles.icon} source={succeedIcon} />;
    } else if (errors.fullName) {
      return <Image style={styles.icon} source={errorIcon} />;
    }
  }, [errors.fullName, fullNameSucceed]);

  const loginIcon = useMemo(() => {
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

  const onFullNameChanged = useCallback(
    (text: string) => {
      text.trim().length >= 4
        ? setFullNameSucceed(true)
        : setFullNameSucceed(false);
      setFullName(text);
      setErrors({
        ...errors,
        login: '',
      });
    },
    [errors],
  );
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
      fullNameSucceed && emailSucceed && password.length >= 4
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

  const signIn = async () => {
    const errorsObject: any = {
      fullName: fullName.length < 4 && 'Invalid fullName',
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
      const data = {
        fullName,
        login,
        password,
      };

      await finishAuthentication(data);
    } catch (e: any) {
      setErrors({
        ...errors,
        general: e.message,
      });
    }
  };

  const finishAuthentication = useCallback(
    data => {
      navigation.navigate('VerificationCode' as any);
    },
    [navigation],
  );

  const disabled = Boolean(!login || !password || !fullName);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../../../assets/images/Common/fiLogo.png')}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Create a new account</Text>
          </View>

          {/* <View style={styles.row}>
            <Text style={styles.topInputText}>Full Name</Text>
            <Image source={require('../../../../assets/images/star.png')} />
          </View>
          <TextInput
            style={styles.fullNameInput}
            underlineColorAndroid="transparent"
          /> */}

          <View>
            <Text style={styles.topInputText}>
              Full Name <Text style={styles.required}>*</Text>
            </Text>
            <View
              style={[
                styles.inputContainer,
                styles.row,
                Boolean(errors.login) && styles.errorInput,
              ]}>
              <TextInput
                value={fullName}
                onChangeText={onFullNameChanged}
                style={styles.textinput}
              />
              {fullNameIcon}
            </View>
          </View>

          {/* <View style={styles.row}>
            <Text style={styles.topInputText}>Email or Phone Number</Text>
            <Image source={require('../../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.emailInput} /> */}

          <View>
            <Text style={styles.topInputText}>
              Email or Phone Number <Text style={styles.required}>*</Text>
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
                style={styles.textinput}
              />
              {loginIcon}
            </View>
          </View>

          {/* <View style={styles.row}>
            <Text style={styles.topInputText}>Password</Text>
            <Image source={require('../../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.passwordInput} /> */}

          <View>
            <Text style={styles.topInputText}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <View
              style={[
                styles.inputContainer,
                styles.row,
                Boolean(errors.login) && styles.errorInput,
              ]}>
              <TextInput
                value={password}
                onChangeText={onPasswordChanged}
                style={styles.textinput}
                secureTextEntry={isVisible}
              />
              {passwordIcon}
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

          {/* <View style={styles.checkBoxContainer}>
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
          </View> */}

          <Button onPress={signIn} text="Create Account" disabled={disabled} />

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
  );
};

export default CreateAccountScreen;
