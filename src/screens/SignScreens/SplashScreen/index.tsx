import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import styles from './style';
import Button from './../../../components/Button/index';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const signIn = useCallback(() => {
    navigation.navigate('SignIn' as any);
  }, [navigation]);

  const createAccount = useCallback(() => {
    navigation.navigate('CreateAccount' as any);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../../../assets/images/Common/Splash.png')}
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
        <Button onPress={signIn} text="Sign in" />
        <TouchableOpacity onPress={createAccount} style={styles.createButton}>
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
