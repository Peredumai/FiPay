import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

import Calendar from '../../../assets/images/calendar.svg';
import Button from '../Button';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter</Text>

      <Text style={styles.topInputText}>
        From<Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity>
        <View style={[styles.inputContainer, styles.row]}>
          <Text style={styles.dateText}></Text>
          <Calendar style={styles.icon} />
        </View>
      </TouchableOpacity>

      <Text style={styles.topInputText}>
        To<Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity style={styles.mb}>
        <View style={[styles.inputContainer, styles.row]}>
          <Text style={styles.dateText}></Text>
          <Calendar style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Button text={'Apply'} disabled={false} />
    </View>
  );
};

export default Filter;
