import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Card, {ICardProps} from '../../../components/Card';
import UpcomingBillCard from './../../../components/UpcomingBillCard/index';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IRenderItem {
  item: ICardProps;
  index: number;
}

const win = Dimensions.get('window');

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
  const [, setCardActive] = useState(0);

  const onscroll = ({
    nativeEvent: {
      contentOffset: {x},
    },
  }) => {
    const index = Math.round(x / (win.width - 24));

    setCardActive(index);
  };

  const renderItem = ({item, index}: IRenderItem) => (
    <Card
      price={item.price}
      accountNumber={item.accountNumber}
      imageSource={item.imageSource}
      style={index === cards.length - 1 ? styles.mr : null}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good morning, John!</Text>
        <Image source={require('../../../../assets/images/history.png')} />
      </View>

      <View style={styles.wrap}>
        <FlatList
          data={cards}
          horizontal
          onScroll={onscroll}
          decelerationRate="fast"
          renderItem={renderItem}
          keyExtractor={item => item.price}
          pagingEnabled
          snapToInterval={win.width - 36}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginHorizontal: 24}}
        />
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
