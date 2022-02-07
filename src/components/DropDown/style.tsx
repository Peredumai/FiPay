import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';
import {THEME} from '../../theme';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  touchableOpacity: {
    width: win.width,
    height: '3rem',
    justifyContent: 'center',
  },
  halfTouchableOpacity: {
    width: (win.width - 72) / 2,
    height: '3rem',
    justifyContent: 'center',
  },
  text: {
    fontFamily: THEME.BOLD_FONT,
    marginLeft: 20,
    color: '#2C3A4B',
    fontSize: '1rem',
  },
});
EStyleSheet.build();

export default styles;
