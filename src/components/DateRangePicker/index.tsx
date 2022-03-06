import { View, Text } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import DateRangePicker from 'rn-select-date-range';
import moment from 'moment';
import Button from './../Button/index';

const DateRange = ({onApply, selectedRange, setRange}) => {

  console.log(selectedRange);
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Choose two dates for range please</Text>
      <DateRangePicker
        onSelectDateRange={range => {
          console.log(range.firstDate);
          setRange(range);
        }}
        blockSingleDateSelection={false}
        responseFormat="MMMM DD, YYYY"
        maxDate={moment()}
        minDate={moment().subtract(100, 'days')}
        selectedDateContainerStyle={styles.selectedDateContainerStyle}
        selectedDateStyle={styles.selectedDateStyle}
      />

      <Button
        text="Apply"
        disabled={!Boolean(selectedRange.firstDate && selectedRange.secondDate)}
        onPress={onApply}
      />
    </View>
  );
};

export default DateRange;
