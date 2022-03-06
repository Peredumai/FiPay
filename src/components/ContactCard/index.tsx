import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Line from './../Line/index';

interface IContactCardProps {
  name: string;
  phoneNum: string;
  img?: any;
}

const ContactCard = ({name, phoneNum, img}: IContactCardProps) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../../../../client/assets/images/Common/avatar.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.marketText}>{name}</Text>
            <Text style={styles.dataText}>{phoneNum}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../../../client/assets/images/Common/submitIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Line />
    </View>
  );
};

export default ContactCard;
