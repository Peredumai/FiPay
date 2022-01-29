import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from './style';
import Button from './../../components/Button/index';

const CreateAccountInfoScreen = () => {
  return (
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
            <Text style={styles.topInputText}>Country/Region</Text>
            <Image source={require('../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.countryInput} />

          <View style={styles.rowBetween}>
            <View>
              <View style={styles.row}>
                <Text style={styles.topInputText}>State</Text>
                <Image source={require('../../../assets/images/star.png')} />
              </View>
              <TextInput style={styles.stateInput} />
            </View>
            <View>
              <View style={styles.row}>
                <Text style={styles.topInputText}>City</Text>
                <Image source={require('../../../assets/images/star.png')} />
              </View>
              <TextInput style={styles.cityInput} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.topInputText}>Street</Text>
            <Image source={require('../../../assets/images/star.png')} />
          </View>
          <TextInput style={styles.streetInput} />

          <Button text="Create Account" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateAccountInfoScreen;
