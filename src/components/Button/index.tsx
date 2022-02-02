import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface IButtonProps {
  text: string;
  onPress?: () => any;
  disabled: boolean;
}

const Button = ({text, onPress, disabled}: IButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.touchableOpacity, disabled && styles.disabled]}>
      <Text style={[styles.text, disabled && styles.disabledText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
