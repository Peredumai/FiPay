import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Button from './../../components/Button/index';

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../../assets/images/Splash.png')}
      />
      <View>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.inner}>
          <Text style={styles.infoText}>
            FiPay: The best multifunctional digital E-Wallet of this century.
          </Text>
        </View>
        <Button
          onPress={() => props.navigation.navigate('SignIn')}
          text="Sign in"
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CreateAccount')}
          style={styles.createButton}>
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
