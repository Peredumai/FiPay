import {View} from 'react-native';
import React from 'react';
import styles from './style';
import Card from './../../../components/Card/index';
import Button from './../../../components/Button/index';

import SimpleCard from '../../../../assets/images/Common/Card.png';
import RedCard from '../../../../assets/images/Common/CardRed.png';

const MyCardsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Card price={'$1299.15'} accountNumber={'• • •  • • •  • • •  8399'} />
      <Card price={'$899.40'} accountNumber={'• • •  • • •  • • •  6273'} /> */}

      <Card
        price={'$1299.15'}
        accountNumber={'• • •  • • •  • • •  8399'}
        imageSource={SimpleCard}
      />

      <Card
        price={'$899.40'}
        accountNumber={'• • •  • • •  • • •  6273'}
        imageSource={RedCard}
      />

      <Button text="Add New Card" disabled={false} onPress={() => {}} />
    </View>
  );
}

export default MyCardsScreen