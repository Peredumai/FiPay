import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import styles from './style';

import {countryList} from '../../../utils/countryArray';
import {currencyArray} from '../../../utils/currencyArray';
import {states} from '../../../utils/statesArray';

interface IModalPickerProps {
  changeModalVisibility: (bool: boolean) => void;
  setData: (data: string) => void;
  type: string;
}

export const ModalPicker = ({
  changeModalVisibility,
  setData,
  type,
}: IModalPickerProps) => {
  const onPressItem = useCallback(
    (option: string) => {
      changeModalVisibility(false);
      setData(option);
    },
    [changeModalVisibility, setData],
  );

  const option = useMemo(() => {
    if (type === 'currencyPicker') {
      return currencyArray.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      });
    } else if (type === 'countryPicker') {
      return countryList.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      });
    } else if (type === 'statesPicker') {
      return states.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      });
    }
  }, [onPressItem, type]);

  // const option = countryList.map((item, index) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.option}
  //       key={index}
  //       onPress={() => onPressItem(item)}>
  //       <Text style={styles.text}>{item}</Text>
  //     </TouchableOpacity>
  //   );
  // });

  return (
    <TouchableOpacity
      onPress={() => changeModalVisibility(false)}
      style={styles.container}>
      <View style={styles.modal}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};
