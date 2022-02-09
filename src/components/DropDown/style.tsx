import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';
import {THEME} from '../../theme';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  touchableOpacity: {
    width: win.width,
    height: '3rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 14,
  },
  halfTouchableOpacity: {
    width: (win.width - 72) / 2,
    height: '3rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  text: {
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    fontSize: '1rem',
  },
  currencyPicker: {
    color: 'black',
    width: (win.width - 56 * 2) / 2,
    justifyContent: 'flex-start',
  },
  currencyText: {
    color: '#2C3A4B',
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
    marginRight: 12,
  },
  countryPicker: {
    color: 'black',
    width: win.width - 48,
    justifyContent: 'space-between',
    // alignSelf: 'stretch',
    paddingHorizontal: 14,
  },
  countryText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
