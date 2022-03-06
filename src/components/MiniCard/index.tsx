import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

import BezierBack from '../../../assets/images/TotalSpentScreen/bezierBack.svg';

interface IMiniCardProps {
  price: number;
  text: string;
  color: string;
}

const MiniCard = ({price, text, color}: IMiniCardProps) => {
  return (
    <View style={[styles.card, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.price}>
        {'$'}
        {price}
      </Text>
      <View style={styles.bezierBack}>
        <BezierBack />
      </View>
    </View>
  );
};

export default MiniCard;
