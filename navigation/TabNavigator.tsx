import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, Image} from 'react-native';

import HomeScreen from '../src/screens/BottomTabScreens/HomeScreen';
import SocialScreen from '../src/screens/BottomTabScreens/SocialScreen/index';
import AddScreen from '../src/screens/BottomTabScreens/AddScreen/index';
import NotificationScreen from '../src/screens/BottomTabScreens/NotificationsScreen/index';
import ChartScreen from '../src/screens/BottomTabScreens/ChartScreen/index';
import styles from './styles';

import Home from '../assets/images/BottomTabIcons/Home.svg';
import HomeFilled from '../assets/images/BottomTabIcons/HomeFilled.svg';
import Add from '../assets/images/BottomTabIcons/Add.svg';
import AddFilled from '../assets/images/BottomTabIcons/AddFilled.svg';
import Notification from '../assets/images/BottomTabIcons/Notification.svg';
import NotificationFilled from '../assets/images/BottomTabIcons/NotificationFilled.svg';
import Statistics from '../assets/images/BottomTabIcons/Statistics.svg';
import StatisticsFilled from '../assets/images/BottomTabIcons/StatisticsFilled.svg';
import Person from '../assets/images/BottomTabIcons/Person.svg';
import PersonFilled from '../assets/images/BottomTabIcons/PersonFilled.svg';
import StatisticsScreen from '../src/screens/BankAppScreens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (focused ? <HomeFilled /> : <Home />),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <StatisticsFilled /> : <Statistics />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({focused}) => (focused ? <AddFilled /> : <Add />),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerTintColor: '#2C3A4B',
            headerTitleStyle: styles.headerTitle,
            headerShown: true,
            headerRight: () => (
              <Image
                style={styles.iconRight}
                source={require('../assets/images/searchIcon.png')}
              />
            ),
            headerLeft: () => (
              <Image
                style={styles.iconLeft}
                source={require('../assets/images/arrowBack.png')}
              />
            ),
            tabBarIcon: ({focused}) =>
              focused ? <NotificationFilled /> : <Notification />,
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={SocialScreen}
          options={{
            headerTintColor: '#2C3A4B',
            headerTitleStyle: styles.headerTitle,
            headerShown: true,
            tabBarIcon: ({focused}) =>
              focused ? <PersonFilled /> : <Person />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
