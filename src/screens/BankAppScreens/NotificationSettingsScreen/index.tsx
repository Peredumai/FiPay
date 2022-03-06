import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import ToggleSwitch from 'toggle-switch-react-native';
import Line from './../../../components/Line/index';

const NotificationSettingsScreen = () => {
  const [buySomething, setBuySomething] = useState(false);
  const [receiveMoney, setReceiveMoney] = useState(false);
  const [sendPayments, setSendPayments] = useState(false);
  const [moneyRequest, setMoneyRequest] = useState(false);
  const [newPromo, setNewPromo] = useState(false);
  const [newService, setNewService] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifiy me when</Text>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>Buy something</Text>
        <ToggleSwitch
          isOn={buySomething}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setBuySomething}
        />
      </View>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>Receive money</Text>
        <ToggleSwitch
          isOn={receiveMoney}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setReceiveMoney}
        />
      </View>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>Send payments</Text>
        <ToggleSwitch
          isOn={sendPayments}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setSendPayments}
        />
      </View>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>Receive a money request</Text>
        <ToggleSwitch
          isOn={moneyRequest}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setMoneyRequest}
        />
      </View>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>New promo availables</Text>
        <ToggleSwitch
          isOn={newPromo}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setNewPromo}
        />
      </View>
      <Line />

      <View style={styles.wrapper}>
        <Text style={styles.labelText}>New service availables</Text>
        <ToggleSwitch
          isOn={newService}
          onColor="#6D5FFD"
          offColor="#9098A1"
          size="medium"
          onToggle={setNewService}
        />
      </View>
      <Line />
    </View>
  );
};

export default NotificationSettingsScreen;
