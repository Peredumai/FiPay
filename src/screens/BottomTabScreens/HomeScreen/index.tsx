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

import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

const HomeScreen = () => {
  const [, setCardActive] = useState(0);

  const cards = useSelector((state: RootState) => state.card.cards);

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
      balance={item.balance}
      color={item.color}
      accountNumber={item.accountNumber}
      style={index === cards.length - 1 ? styles.mr : null}
    />
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.fitSpace}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Good morning, John!</Text>
          <Image
            source={require('../../../../assets/images/Common/history.png')}
          />
        </View>

        <View style={styles.wrap}>
          <FlatList
            data={cards}
            horizontal
            onScroll={onscroll}
            decelerationRate="fast"
            renderItem={renderItem}
            keyExtractor={item => item.balance}
            pagingEnabled
            snapToInterval={win.width - 36}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListStyle}
          />
        </View>
        <View style={styles.upcomingView}>
          <Text style={styles.upcomingText}>Upcomming bill</Text>
          <TouchableOpacity>
            <Text style={styles.labelPurple}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upcomingBillContainer}>
          <UpcomingBillCard />
          <UpcomingBillCard />
          <UpcomingBillCard />
          <UpcomingBillCard />
          <UpcomingBillCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
