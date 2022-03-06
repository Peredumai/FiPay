import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  card: {
    width: 140,
    height: 180,
    backgroundColor: THEME.PURPLE_COLOR,
    borderRadius: 12,
    marginRight: 10,
    padding: 22,
  },
  bezierBack: {
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: THEME.DEFAULT_FONT,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
