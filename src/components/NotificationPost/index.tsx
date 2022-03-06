import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Line from './../Line/index';

interface iNotificationPostProps {
  buttonExist: boolean;
  name: string;
  price: string;
  imageName: string;
  type: string;
}

const NotificationPost = ({
  buttonExist,
  name,
  price,
  imageName,
  type,
  onButtonPress,
}: iNotificationPostProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require('../../../../client/assets/images/Common/avatar.png')}
        />
        <View style={styles.message}>
          {type === 'receive' ? (
            <Text style={styles.messageText}>
              You received a payment of{' '}
              <Text style={styles.price}>${price}.00</Text> from{' '}
              <Text style={styles.name}>{name}</Text>
            </Text>
          ) : (
            <Text style={styles.messageText}>
              <Text style={styles.name}>{name}</Text> requested a payment of{' '}
              <Text style={styles.price}>${price}.00</Text>
            </Text>
          )}
          <Text style={styles.timeText}>10.10 AM</Text>
        </View>
        {buttonExist && (
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={onButtonPress}>
              <Text style={styles.text}>Pay</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Line />
    </View>
  );
};

export default NotificationPost;
