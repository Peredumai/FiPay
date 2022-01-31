import {Text, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const Card = () => {
  return (
    <View>
      <ImageBackground
        resizeMode={'stretch'}
        style={styles.cardImage}
        source={require('../../../../client/assets/images/Card.png')}>
        <View style={styles.row}>
          <Text style={styles.balanceText}>Balance</Text>
          <Image
            source={require('../../../../client/assets/images/Amazon.png')}
          />
        </View>
        <Text style={styles.price}>$1299.15</Text>

        <View style={styles.numberContainer}>
          <Text style={styles.accountText}>Account number</Text>
          <Text style={styles.cardNumberText}>
            • • • &nbsp; • • • &nbsp; • • • &nbsp; 8399
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
