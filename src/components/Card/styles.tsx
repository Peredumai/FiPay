import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  cardImage: {
    width: 349.58,
    // height: '100%',
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
  balance: {
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
  cardWrapper: {
    width: win.width - 36,
    // marginLeft: 24,
    // flex: 1,
    // marginRight: 24,
  },
});
EStyleSheet.build();

export default styles;
