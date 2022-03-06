import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import Calendar from '../../../assets/images/Common/calendar.svg';
import Button from '../Button';

import {BottomPopup} from '../BottomPopup/index';
import DateRange from './../DateRangePicker/index';

const Filter = () => {
  const [selectedRange, setRange] = useState({
    firstDate: '',
    secondDate: '',
  });

  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    setRange({})
    popupRef.close();
  };

  const onApply = () => {
    popupRef.close();
  };
  return (
    <View style={styles.container}>
      <BottomPopup
        component={
          <DateRange
            selectedRange={selectedRange}
            setRange={setRange}
            onApply={onApply}
          />
        }
        onTouchOutside={onClosePopup}
        ref={target => (popupRef = target)}
      />
      <Text style={styles.header}>Filter</Text>

      <Text style={styles.topInputText}>
        From<Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity onPress={onShowPopup}>
        <View style={[styles.inputContainer, styles.row]}>
          <Text style={styles.dateText}>{selectedRange.firstDate}</Text>
          <Calendar style={styles.icon} />
        </View>
      </TouchableOpacity>

      <Text style={styles.topInputText}>
        To<Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity onPress={onShowPopup} style={styles.mb}>
        <View style={[styles.inputContainer, styles.row]}>
          <Text style={styles.dateText}>{selectedRange.secondDate}</Text>
          <Calendar style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Button text={'Apply'} disabled={false} />
    </View>
  );
};

export default Filter;
