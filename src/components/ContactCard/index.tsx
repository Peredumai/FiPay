import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

interface IContactCardProps {
  name: string;
  phoneNum: string;
}

const ContactCard = ({name, phoneNum}: IContactCardProps) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../../../../client/assets/images/avatar.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.marketText}>{name}</Text>
            <Text style={styles.dateText}>{phoneNum}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../../../client/assets/images/submitIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default ContactCard;