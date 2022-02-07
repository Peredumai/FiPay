import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import ToggleSwitch from 'toggle-switch-react-native';

export default function LoginSecurityScreen() {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = value => {
    setSwitchValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/LoginSecurityIcons/FaceID.png')}
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
      <Text style={styles.bottomText}>(Recommended)</Text>

      <View style={styles.line} />

      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/LoginSecurityIcons/remember.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Remember me</Text>
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
      <Text
        style={
          styles.bottomText
        }>{`Not recommended if you share your \ndevice`}</Text>

      <View style={styles.line} />
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Image
            source={require('../../../../assets/images/LoginSecurityIcons/touchID.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Touch ID</Text>
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
      <Text
        style={
          styles.bottomText
        }>{`Not recommended if you share your \ndevice`}</Text>

      <View style={styles.line} />
    </View>
  );
}
