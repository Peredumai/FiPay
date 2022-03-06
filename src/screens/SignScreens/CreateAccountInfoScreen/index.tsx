import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Button from './../../../components/Button/index';
import Dropdown from './../../../components/DropDown';
import logo from '../../../../assets/images/Common/fiLogo.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const CreateAccountInfoScreen = () => {
  const [countryValue, setCountryValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [streetValue, setStreetValue] = useState('');

  const disabled = Boolean(
    countryValue && stateValue && cityValue && streetValue,
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.safeAreaContainer}>
            <Image style={styles.logoImage} source={logo} />
            <View style={styles.innerContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.headerText}>Create a new account</Text>
              </View>

              <View>
                <Text style={styles.topInputText}>
                  Country/Region<Text style={styles.required}>*</Text>
                </Text>
                <View style={[styles.inputContainer, styles.rowContainer]}>
                  <Dropdown
                    initial={countryValue}
                    change={setCountryValue}
                    isHalfWidth={false}
                    text={'countryText'}
                    type={'countryPicker'}
                  />
                </View>
              </View>

              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.topInputText}>
                    State<Text style={styles.required}>*</Text>
                  </Text>
                  <View style={[styles.inputContainer, styles.rowContainer]}>
                    <Dropdown
                      initial={stateValue}
                      change={setStateValue}
                      isHalfWidth={true}
                      type={'statesPicker'}
                    />
                  </View>
                </View>

                <View>
                  <Text style={styles.topInputText}>
                    City<Text style={styles.required}>*</Text>
                  </Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={cityValue}
                      onChangeText={setCityValue}
                      style={styles.halfInput}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.streetWrapper}>
                <Text style={styles.topInputText}>
                  Street<Text style={styles.required}>*</Text>
                </Text>
                <TextInput
                  value={streetValue}
                  onChangeText={setStreetValue}
                  style={styles.streetInput}
                />
              </View>

              <Button
                text="Create Account"
                disabled={!disabled}
                onPress={() => {
                  console.log(countryValue, cityValue, streetValue, stateValue);
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountInfoScreen;
