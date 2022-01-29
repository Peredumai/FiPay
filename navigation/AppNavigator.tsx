import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import NewPasswordScreen from '../src/screens/NewPasswordScreen';
import CreateAccountScreen from '../src/screens/CreateAccountScreen';
// import FaceAuthScreen from '../src/screens/FaceAuthScreen';
import SignInScreen from '../src/screens/SignInScreen';
// import VerificationCodeScreen from '../src/screens/VerificationCodeScreen';
import SplashScreen from '../src/screens/SplashScreen';
// import CreateAccountInfoScreen from '../src/screens/CreateAccountInfoScreen/index';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen/index';
// import SuccessfulScreen from '../src/screens/SuccesfulScreen/index';

const Stack = createNativeStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default appNavigator;
