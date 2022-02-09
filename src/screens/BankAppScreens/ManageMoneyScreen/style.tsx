import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 30.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  month: {
    color: '#545D69',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    margin: 12.5,
  },
  incomeExpence: {
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
    borderRadius: '0.75rem',
    marginTop: '1.5rem',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incomeExpenceImg: {
    marginRight: 12,
  },
  inner: {
    justifyContent: 'space-evenly',
    height: 56,
  },
  text: {
    fontSize: 11,
    color: '#858C94',
    fontFamily: THEME.DEFAULT_FONT,
  },
  priceBlueText: {
    fontSize: 20,
    color: '#6D5FFD',
    fontFamily: THEME.BOLD_FONT,
  },
  priceRedText: {
    fontSize: 20,
    color: '#FF1843',
    fontFamily: THEME.BOLD_FONT,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderColor: '#6D5FFD',
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    width: (win.width - 48 - 20) / 2,
    marginTop: 20,
  },
  cardsView: {
    marginTop: 4,
    marginBottom: 24,
  },
  label: {
    color: '#858C94',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 12,
  },
  price: {
    color: '#2C3A4B',
    fontSize: 23,
    fontFamily: THEME.BOLD_FONT,
    marginTop: 12,
  },
});
EStyleSheet.build();

export default styles;
