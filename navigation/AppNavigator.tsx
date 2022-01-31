import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import NewPasswordScreen from '../src/screens/NewPasswordScreen';
// import FaceAuthScreen from '../src/screens/FaceAuthScreen';
// import VerificationCodeScreen from '../src/screens/VerificationCodeScreen';
// import CreateAccountInfoScreen from '../src/screens/CreateAccountInfoScreen/index';
// import SuccessfulScreen from '../src/screens/SuccesfulScreen/index';
import HomeScreen from '../src/screens/BottomTabScreens/AddScreen';
import CreateAccountScreen from '../src/screens/SignScreens/CreateAccountScreen';
import ForgotPasswordScreen from '../src/screens/SignScreens/ForgotPasswordScreen';
import SplashScreen from '../src/screens/SignScreens/SplashScreen';
import SignInScreen from '../src/screens/SignScreens/SignInScreen';

const Stack = createNativeStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
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
