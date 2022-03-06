import {Text, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import AmazonImg from '../../../assets/images/Common/Amazon.png';

export interface ICardProps {
  balance: string;
  accountNumber: string;
  color?: any;
  style?: any;
}

const Card = ({balance, accountNumber, color, style}: ICardProps) => {
  const accountNumberChanged = () => {
    const lastSymbols = accountNumber.toString().substring(12, 16);
    const str = '• • •  • • •  • • •  ' + lastSymbols;
    return str;
  };

  return (
    <View style={[styles.cardWrapper, style]}>
      <ImageBackground
        resizeMode={'stretch'}
        style={styles.cardImage}
        source={color}>
        <View style={styles.row}>
          <Text style={styles.balanceText}>Balance</Text>
        </View>
        <Text style={styles.balance}>
          {'$'}
          {balance}
        </Text>
        <Image style={styles.amazonImg} source={AmazonImg} />

        <View style={styles.numberContainer}>
          <Text style={styles.accountText}>Account number</Text>
          <Text style={styles.cardNumberText}>{accountNumberChanged()}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
