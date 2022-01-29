import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface IButtonProps {
  text: string;
  onPress?: () => any;
}

const Button = ({text, onPress}: IButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
