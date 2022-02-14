import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  cardImage: {
    width: 349.58,
    height: 219.6,
    padding: '1.25rem',
    marginTop: 24,
  },
  balanceText: {
    fontSize: '1rem',
    color: '#F7F7F7',
    fontFamily: THEME.DEFAULT_FONT,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: THEME.BOLD_FONT,
    fontSize: '2.063rem',
    color: '#FEFEFE',
  },
  numberContainer: {
    marginTop: 'auto',
  },
  accountText: {
    fontSize: '1rem',
    color: '#F7F7F7',
    fontFamily: THEME.DEFAULT_FONT,
  },
  cardNumberText: {
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
    color: '#FEFEFE',
  },
  amazonImg: {
    position: 'absolute',
    top: 25,
    right: 21.27,
  },
});
EStyleSheet.build();

export default styles;
