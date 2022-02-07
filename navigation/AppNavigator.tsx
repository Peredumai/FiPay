import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewPasswordScreen from '../src/screens/SignScreens/NewPasswordScreen';
// import FaceAuthScreen from '../src/screens/FaceAuthScreen';
// import VerificationCodeScreen from '../src/screens/VerificationCodeScreen';
// import CreateAccountInfoScreen from '../src/screens/CreateAccountInfoScreen/index';
// import SuccessfulScreen from '../src/screens/SuccesfulScreen/index';
// import HomeScreen from '../src/screens/BottomTabScreens/AddScreen';
import CreateAccountScreen from '../src/screens/SignScreens/CreateAccountScreen';
import ForgotPasswordScreen from '../src/screens/SignScreens/ForgotPasswordScreen';
import SplashScreen from '../src/screens/SignScreens/SplashScreen';
import SignInScreen from '../src/screens/SignScreens/SignInScreen';
import FaceAuthScreen from '../src/screens/SignScreens/FaceAuthScreen';
import VerificationCodeScreen from '../src/screens/SignScreens/VerificationCodeScreen';
import SuccessfulScreen from '../src/screens/SignScreens/SuccesfulScreen/index';
import StatisticsScreen from '../src/screens/BankAppScreens/StatisticsScreen';
import CurrentBalanceScreen from './../src/screens/BankAppScreens/CurrentBalance/index';
import ProfileScreen from '../src/screens/BankAppScreens/ProfileScreen';
import LoginSecurityScreen from '../src/screens/BankAppScreens/LoginSecurityScreen';
import CreateAccountInfoScreen from '../src/screens/SignScreens/CreateAccountInfoScreen';

const Stack = createNativeStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CreateAccountInfo"
          component={CreateAccountInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login and security"
          component={LoginSecurityScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CurrentBalance"
          component={CurrentBalanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={SuccessfulScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FaceAuth"
          component={FaceAuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default appNavigator;
