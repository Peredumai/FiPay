import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewPasswordScreen from '../src/screens/SignScreens/NewPasswordScreen';
// import FaceAuthScreen from '../src/screens/FaceAuthScreen';
// import VerificationCodeScreen from '../src/screens/VerificationCodeScreen';
// import CreateAccountInfoScreen from '../src/screens/CreateAccountInfoScreen/index';
// import SuccessfulScreen from '../src/screens/SuccesfulScreen/index';
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
import TransactionSuccessfulScreen from '../src/screens/SignScreens/TransactionSuccesful';
import NotificationSettingsScreen from '../src/screens/BankAppScreens/NotificationSettingsScreen';
import MyCardsScreen from '../src/screens/BankAppScreens/MyCardsScreen';
import SettingsScreen from '../src/screens/BankAppScreens/SettingsScreen';
import LinkNewCardScreen from '../src/screens/BankAppScreens/LinkNewCardScreen';
import LinkNewCardScreen2 from '../src/screens/BankAppScreens/LinkNewCardScreen2';
import ExchangeMoneyScreen from '../src/screens/BankAppScreens/ExchangeMoneyScreen';
import CheckExchangeScreen from '../src/screens/BankAppScreens/CheckExchangeScreen';
import ManageMoneyScreen from '../src/screens/BankAppScreens/ManageMoneyScreen';
import SendMoneyScreen from '../src/screens/BankAppScreens/SendMoneyScreen';
import CurrencyScreen from '../src/screens/BankAppScreens/CurrencyScreen';
import TransferMoneyScreen from './../src/screens/BankAppScreens/TransferMoneyScreen/index';
import TopUpMoneyScreen from '../src/screens/BankAppScreens/TopUpMoneyScreen';
import FlightTicketScreen from '../src/screens/BankAppScreens/FlightTicketScreen';
import BudgetCalculationScreen from '../src/screens/BankAppScreens/BudgetCalculation';
import {Image} from 'react-native';
import styles from './styles';
import {THEME} from './../src/theme';
import DetailsScreen from '../src/screens/BankAppScreens/DetailsScreen';
import StatisticsScreenPieChart from '../src/screens/BankAppScreens/StatisticsScreenPieChart';
import CurrentBalanceScreenReload from '../src/screens/BankAppScreens/CurrentBalanceReload';
import OthersScreen from './../src/screens/BankAppScreens/OthersScreen/index';
import IdentityCardScreen from './../src/screens/BankAppScreens/IdentityScreen/index';
import ServicesScreen from './../src/screens/BankAppScreens/ServicesScreen/index';
import ExpensesScreen from '../src/screens/BankAppScreens/ExpensesScreen/index';
import TotalSpentScreen from '../src/screens/BankAppScreens/TotalSpentScreen';

const Stack = createNativeStackNavigator();

const appNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TotalSpent"
          component={TotalSpentScreen}
          options={{
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: THEME.PURPLE_COLOR,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Detail balance"
          component={DetailsScreen}
          options={{headerShown: true, headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BudgetCalculation"
          component={BudgetCalculationScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: THEME.PURPLE_COLOR,
            },
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CheckExchange"
          component={CheckExchangeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profiles"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="IdentityCard"
          component={IdentityCardScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Others"
          component={OthersScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CurrentBalance"
          component={CurrentBalanceScreenReload}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StatisticsPieChart"
          component={StatisticsScreenPieChart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ManageMoney"
          component={ManageMoneyScreen}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="FlightTicket"
          component={FlightTicketScreen}
          options={{headerShown: true, headerShadowVisible: false}}
        />
        <Stack.Screen
          name="TopUpMoney"
          component={TopUpMoneyScreen}
          options={{headerShown: true, headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="TransferMoney"
          component={TransferMoneyScreen}
          options={{headerShown: true, headerShadowVisible: false}}
        />
        <Stack.Screen
          name="CreateAccountInfo"
          component={CreateAccountInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendMoney"
          component={SendMoneyScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Currency"
          component={CurrencyScreen}
          options={{headerShown: true, headerShadowVisible: false}}
        />

        <Stack.Screen
          name="ExchangeMoney"
          component={ExchangeMoneyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Link new card2"
          component={LinkNewCardScreen2}
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="My Cards"
          component={MyCardsScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Link new card"
          component={LinkNewCardScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Notification Settings"
          component={NotificationSettingsScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Transaction Successful"
          component={TransactionSuccessfulScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={SuccessfulScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
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
          name="FaceAuth"
          component={FaceAuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default appNavigator;
