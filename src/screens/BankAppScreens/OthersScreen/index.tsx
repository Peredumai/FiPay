import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import ToggleSwitch from 'toggle-switch-react-native';

export default function OthersScreen() {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = value => {
    setSwitchValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/notification.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Notification</Text>
          </View>
        </View>
        <ToggleSwitch
          isOn={switchValue}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={toggleSwitch}
        />
      </View>
      <View style={styles.line} />

      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/fingerprint.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Fingerprint</Text>
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
            source={require('../../../../assets/images/OthersScreenIcons/language.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Language</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.languageText}>English</Text>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
          />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/OthersScreenIcons/fastPayment.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Fast Payment</Text>
          </View>
        </View>
        <Image
          source={require('../../../../assets/images/OthersScreenIcons/arrowRight.png')}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
}
