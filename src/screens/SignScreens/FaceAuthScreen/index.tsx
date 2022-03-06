import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import FaceAuth from '../../../../assets/images/Common/FaceAuth.svg';
import Line from './../../../components/Line/index';

const FaceAuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Image
          source={require('../../../../assets/images/Common/Camera.png')}
        />
      </View>
      <View style={styles.innerContainer}>
        <Line />
        <FaceAuth width={80} height={80} />
        <Text style={styles.faceText}>Face Authentication</Text>
        <Text style={styles.pointText}>
          Please point your face on the screen
        </Text>
      </View>
    </View>
  );
};

export default FaceAuthScreen;
