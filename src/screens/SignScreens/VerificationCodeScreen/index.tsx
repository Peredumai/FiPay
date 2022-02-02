import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styles from './style';
import Button from '../../../components/Button';

export default function VerificationCodeScreen() {
  const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: ''});

  const input = useRef();

  let newInputIndex = 0;

  const [nextInputIndex, setNextInputIndex] = useState(0);

  const isObjValid = useCallback(obj => {
    return Object.values(obj).every(val => val.trim());
  }, []);

  const submitOTP = useCallback(() => {
    if (isObjValid(OTP)) {
      let val = '';
      Object.values(OTP).forEach(v => {
        val += v;
      });
      console.log(val);
    }
  }, [OTP, isObjValid]);

  const inputs = useMemo(() => Array(4).fill(''), []);

  const handleChangeText = (text, index) => {
    const newOTP = {...OTP};
    newOTP[index] = text;
    setOTP(newOTP);

    const lastInputIndex = inputs.length - 1;
    if (!text) {
      newInputIndex = index === 0 ? 0 : index;
    } else {
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    }

    setNextInputIndex(newInputIndex);
  };

  const handleBackspacePress = useCallback(
    nativeEvent => {
      if (nativeEvent.key === 'Backspace') {
        setNextInputIndex(prev => {
          if (prev == 0) {
            return prev;
          }
          if (OTP[prev - 1] !== '') {
            if (OTP[prev]) {
              const newOTP = {...OTP};
              newOTP[prev] = '';
              setOTP(newOTP);
              return prev;
            } else {
              const newOTP = {...OTP};
              newOTP[prev - 1] = '';
              setOTP(newOTP);
              return prev - 1;
            }
          } else {
            return prev - 1;
          }
        });
      }
    },
    [OTP],
  );

  const disabled = useMemo(() => isObjValid(OTP), [isObjValid, OTP]);

  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>Verification Code</Text>

          <View style={styles.inputsContainer}>
            {inputs.map((inp, index) => {
              return (
                <TextInput
                  key={index}
                  ref={nextInputIndex === index ? input : null}
                  maxLength={1}
                  keyboardType={'numeric'}
                  value={OTP[index]}
                  style={styles.input}
                  onChangeText={text => handleChangeText(text, index)}
                  onKeyPress={({nativeEvent}) => {
                    handleBackspacePress(nativeEvent);
                  }}
                />
              );
            })}
          </View>

          <Button onPress={submitOTP} text="Next" disabled={!disabled} />
          <Text style={styles.resendCodeText}>Resend code in 48 s</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
