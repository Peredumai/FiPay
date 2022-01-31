import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  cardImage: {
    // position: 'absolute',
    width: '21.849rem',
    height: '13.725rem',
    padding: '1.25rem',
  },
  balanceText: {
    fontSize: 16,
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
    fontSize: 33,
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
});
EStyleSheet.build();

export default styles;
