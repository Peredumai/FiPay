import {Text, View, TouchableOpacity, Modal, Image} from 'react-native';
import React, {useState} from 'react';
import {ModalPicker} from '../ModalPicker';
import styles from './style';

import ExchangeDropDown from '../../../assets/images/Common/exchangeDropDown.svg';

interface IDropDownProps {
  initial: string;
  change: (str: string) => void;
  isHalfWidth: boolean;
  type: string; //styles
  text?: string; //styles
}

const Dropdown = ({
  initial,
  change,
  isHalfWidth,
  type,
  text,
}: IDropDownProps) => {
  const [isVisible, setisVisible] = useState(false);

  const changeModalVisibility = (bool: boolean) => {
    setisVisible(bool);
  };

  const setData = (option: string) => {
    change(option.trim());
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          [
            isHalfWidth ? styles.halfTouchableOpacity : styles.touchableOpacity,
            styles[type],
          ],
        ]}
        onPress={() => changeModalVisibility(!isVisible)}>
        <Text style={[styles.text, text && styles[text]]}>{initial}</Text>
        {initial !== '' ? (
          type === 'currencyPicker' ? (
            <ExchangeDropDown />
          ) : null
        ) : type === 'currencyPicker' ? null : (
          <ExchangeDropDown />
        )}
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          setData={setData}
          changeModalVisibility={changeModalVisibility}
          type={type}
        />
      </Modal>
    </View>
  );
};

export default Dropdown;
