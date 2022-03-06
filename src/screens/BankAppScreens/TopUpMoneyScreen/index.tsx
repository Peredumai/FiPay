import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Dropdown from './../../../components/DropDown';
import {SafeAreaView} from 'react-native-safe-area-context';
import CircleDown from '../../../../assets/images/Common/circleDown.png';
import ContactCard from '../../../components/ContactCard';
import Button from './../../../components/Button/index';

const TopUpMoneyScreen = () => {
  const [cardValue, setCardValue] = useState('');
  const [nominal, setNominal] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.topInputText}>
              Choose card<Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer]}>
              <Dropdown
                initial={cardValue}
                change={setCardValue}
                isHalfWidth={false}
                text={'countryText'}
                type={'countryPicker'}
              />
            </View>
            {/* <View style={styles.mt}>
              <Text style={styles.topInputText}>
                Amount<Text style={styles.required}>*</Text>
              </Text>
              <View style={[styles.inputContainer]}>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  style={styles.textInput}
                />
              </View>
            </View> */}

            <View style={[styles.priceInput, styles.mv]}>
              <Text style={styles.nominal}>Nominal</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.dollar}>$</Text>
                <TextInput
                  keyboardType={'numeric'}
                  value={nominal}
                  onChangeText={setNominal}
                  style={styles.nominalInput}
                />
              </View>
            </View>

            <View style={styles.rowBetween}>
              <View style={styles.center}>
                <Text style={styles.price}>$10</Text>
              </View>
              <View style={styles.center}>
                <Text style={styles.price}>$100</Text>
              </View>
              <View style={styles.center}>
                <Text style={styles.price}>$250</Text>
              </View>
              <View style={styles.center}>
                <Text style={styles.price}>$500</Text>
              </View>
            </View>

            <View style={styles.mt}>
              <Text style={styles.messageLabel}>Note</Text>
              <View style={[styles.areaContainer]}>
                <TextInput
                  multiline={true}
                  // value={amount}
                  // onChangeText={setAmount}
                  style={styles.textInput}
                />
              </View>
            </View>

            {/* <Image style={styles.cirleImg} source={CircleDown} />

            <ContactCard
              name={'Acourtney Henry'}
              phoneNum={'+62-878-5558-54'}
            />
            <ContactCard
              name={'Acourtney Henry'}
              phoneNum={'+62-878-5558-54'}
            />
            <ContactCard
              name={'Acourtney Henry'}
              phoneNum={'+62-878-5558-54'}
            />

            <TouchableOpacity
              onPress={() => {}}
              style={styles.touchableOpacity}>
              <Text style={styles.text}>Add recipient</Text>
            </TouchableOpacity> */}
            <View style={styles.button}>
              <Button text={'Transfer'} disabled={false} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default TopUpMoneyScreen;
