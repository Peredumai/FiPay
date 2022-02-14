import {Text, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import AmazonImg from '../../../assets/images/Amazon.png';

interface ICardProps {
  price: string;
  accountNumber: string;
  imageSource?: any;
}

const Card = ({price, accountNumber, imageSource}: ICardProps) => {
  return (
    <View>
      <ImageBackground
        resizeMode={'stretch'}
        style={styles.cardImage}
        source={imageSource}>
        <View style={styles.row}>
          <Text style={styles.balanceText}>Balance</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
        <Image style={styles.amazonImg} source={AmazonImg} />

        <View style={styles.numberContainer}>
          <Text style={styles.accountText}>Account number</Text>
          <Text style={styles.cardNumberText}>{accountNumber}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
