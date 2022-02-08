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
            tabBarIcon: () => (
              <View>
                <Image
                  source={require('../assets/images/BottomTabIcons/home.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Image
                  source={require('../assets/images/BottomTabIcons/chart.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Image
                  source={require('../assets/images/BottomTabIcons/add.png')}
                />
              </View>
            ),
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
            tabBarIcon: () => (
              <View>
                <Image
                  source={require('../assets/images/BottomTabIcons/notifications.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={SocialScreen}
          options={{
            headerTintColor: '#2C3A4B',
            headerTitleStyle: styles.headerTitle,
            headerShown: true,
            tabBarIcon: () => (
              <View>
                <Image
                  source={require('../assets/images/BottomTabIcons/person.png')}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
