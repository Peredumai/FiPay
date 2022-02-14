import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Card from '../../../components/Card';
import UpcomingBillCard from './../../../components/UpcomingBillCard/index';
import {SafeAreaView} from 'react-native-safe-area-context';

import CardImage from '../../../../assets/images/Card.png';
import CardRedImage from '../../../../assets/images/CardRed.png';

const cards = [
  {
    price: '$4499.25',
    accountNumber: '• • •  • • •  • • •  6544',
    imageSource: CardImage,
  },
  {
    price: '$1399.55',
    accountNumber: '• • •  • • •  • • •  1234',
    imageSource: CardRedImage,
  },
  {
    price: '$1499.95',
    accountNumber: '• • •  • • •  • • •  5678',
    imageSource: CardImage,
  },
];

const HomeScreen = () => {
  const [cardActive, setCardActive] = useState(0);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== cardActive) {
        setCardActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good morning, John!</Text>
        <Image source={require('../../../../assets/images/history.png')} />
      </View>
      {/* <Card
        imageSource={CardImage}
        price={'$1299.15'}
        accountNumber={'• • •  • • •  • • •  8399'}
      /> */}
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {/* {cards.map((e, index) => (
            <Card
              key={index}
              price={e.price}
              imageSource={e.imageSource}
              accountNumber={e.accountNumber}
            />
          ))} */}
          {cards.map((e, index) => {
            return (
              <Card
                key={index}
                price={e.price}
                imageSource={e.imageSource}
                accountNumber={e.accountNumber}
                style={index === cards.length - 1 ? styles.mr : null}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.upcomingView}>
        <Text style={styles.upcomingText}>Upcomming bill</Text>
        <TouchableOpacity>
          <Text style={styles.labelPurple}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
        <UpcomingBillCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
