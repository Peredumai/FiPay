import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import NotificationPost from './../../../components/NotificationPost/index';
import {BottomPopup} from './../../../components/BottomPopup/index';
import PayModal from './../../../components/PayModal/index';

export default function NotificationScreen() {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <View style={styles.container}>
      <BottomPopup
        component={<PayModal onCancel={onClosePopup} />}
        onTouchOutside={onClosePopup}
        ref={target => (popupRef = target)}
      />
      <Text style={styles.headerText}>Today</Text>
      <NotificationPost
        name={'Grace Anastasia'}
        type={'a'}
        buttonExist={true}
        imageName="avatar"
        price="150"
        onButtonPress={onShowPopup}
      />
      <NotificationPost
        name={'Grace Anastasia'}
        type={'receive'}
        buttonExist={false}
        imageName="avatar"
        price="330"
      />
    </View>
  );
}
