import {Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import ModalPicker from '../ModalPicker';
import styles from './style';

interface IDropDownProps {
  initial: string;
  change: (str: string) => void;
  isHalfWidth: boolean;
}

const Dropdown = ({initial, change, isHalfWidth}: IDropDownProps) => {
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
        style={
          isHalfWidth ? styles.halfTouchableOpacity : styles.touchableOpacity
        }
        onPress={() => changeModalVisibility(!isVisible)}>
        <Text style={styles.text}>{initial}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          setData={setData}
          changeModalVisibility={changeModalVisibility}
        />
      </Modal>
    </View>
  );
};

export default Dropdown;
