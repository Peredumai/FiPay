import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

import {countryList} from '../../../utils/countryArray';

interface IModalPickerProps {
  changeModalVisibility: (bool: boolean) => void;
  setData: (data: string) => void;
}

export default function ModalPicker({
  changeModalVisibility,
  setData,
}: IModalPickerProps) {
  const onPressItem = (option: string) => {
    changeModalVisibility(false);
    setData(option);
  };

  const option = countryList.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => changeModalVisibility(false)}
      style={styles.container}>
      <View style={styles.modal}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
}
