import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './style';

import A from '../../../../assets/images/LinkNewCardIcons/colors/1.png';
import B from '../../../../assets/images/LinkNewCardIcons/colors/2.png';
import C from '../../../../assets/images/LinkNewCardIcons/colors/3.png';
import D from '../../../../assets/images/LinkNewCardIcons/colors/4.png';
import E from '../../../../assets/images/LinkNewCardIcons/colors/5.png';
import F from '../../../../assets/images/LinkNewCardIcons/colors/6.png';
import G from '../../../../assets/images/LinkNewCardIcons/colors/7.png';
import H from '../../../../assets/images/LinkNewCardIcons/colors/8.png';

import CalendarIcon from '../../../../assets/images/Common/calendarIcon.png';

const LinkNewCardScreen2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Choose style</Text>

        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Image source={A} />
            <Image source={B} />
            <Image source={C} />
            <Image source={D} />
          </View>
          <View style={styles.row}>
            <Image source={E} />
            <Image source={F} />
            <Image source={G} />
            <Image source={H} />
          </View>
        </View>

        <Text style={styles.headerText}>Details information</Text>

        <View>
          <Text style={styles.topInputText}>
            Name on card<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              // value={fullName}
              // onChangeText={onFullNameChanged}
              style={[styles.textinput, styles.enterInput]}
            />
          </View>
        </View>

        <View>
          <Text style={styles.topInputText}>
            Card number<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              // value={fullName}
              // onChangeText={onFullNameChanged}
              style={[styles.textinput, styles.enterInput]}
            />
          </View>
        </View>

        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.topInputText}>
              Expired Date<Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, styles.rowContainer]}>
              <TextInput
                // value={cityValue}
                // onChangeText={setCityValue}
                style={[styles.expiredInput, styles.enterInput]}
              />
              <Image style={styles.stateIcon} source={CalendarIcon} />
            </View>
          </View>

          <View>
            <Text style={styles.topInputText}>
              CVV<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              maxLength={3}
              keyboardType="number-pad"
              // value={cityValue}
              // onChangeText={setCityValue}
              style={[styles.cvvInput, styles.enterInput]}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
          <Text style={styles.text}>Preview</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LinkNewCardScreen2;
