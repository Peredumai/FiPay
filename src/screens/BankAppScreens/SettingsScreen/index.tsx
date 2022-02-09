import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

const SettingsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Account</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Notification</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>My Card</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Security</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Currency</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Services</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Logout</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
