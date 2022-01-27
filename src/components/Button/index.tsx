import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface IButtonProps {
  text: string;
}

const Button = ({text}: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
