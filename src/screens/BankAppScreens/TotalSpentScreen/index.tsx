import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import styles from './style';
import {VictoryPie} from 'victory-native';

const win = Dimensions.get('window');

const TotalSpentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer} />

      <View style={styles.chartDoughnut}>
        <View style={styles.chartMiddle}>
          <Text style={styles.priceText}>$939</Text>
          <Text style={styles.priceLabelText}>of $1373.34</Text>
        </View>
        <VictoryPie
          startAngle={90}
          endAngle={-90}
          // standalone={false}
          height={300}
          labels={() => ''}
          innerRadius={136}
          colorScale={['rgba(109, 95, 253, 0.2)', '#6D5FFD']}
          // style={{
          //   data: {fill: d => '#6D5FFD'},
          // }}
          cornerRadius={10}
          radius={() => 148}
          data={[
            {x: 1, y: 30},
            {x: 2, y: 70},
          ]}
          labels={['\n100%', '\n0%']}
          labelRadius={({innerRadius}) => innerRadius + 3}
          labelPosition={({index}) => (index ? 'endAngle' : 'startAngle')}
          style={{
            labels: {
              fontSize: 14,
              fill: '#A5ABB3',
              textAnchor: 'middle',
              verticalAnchor: 'start',
              padding: 20,
            },
          }}
        />
      </View>
    </View>
  );
};

export default TotalSpentScreen;
