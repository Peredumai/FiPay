import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const NotificationPost = ({buttonExist, name, price, imageName, type}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require('../../../../client/assets/images/avatar.png')}
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
            <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.text}>Pay</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.line} />
    </View>
  );
};

export default NotificationPost;
