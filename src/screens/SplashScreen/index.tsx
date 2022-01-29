import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Button from './../../components/Button/index';

const SplashScreen = () => {
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
        <Button text="Sign in" />
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
