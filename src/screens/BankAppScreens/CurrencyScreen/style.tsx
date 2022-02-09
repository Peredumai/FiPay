import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 30.5,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background: rgba(109, 95, 253, 0.1)',
    borderRadius: '0.75rem',
    marginTop: 30.5,
    paddingVertical: 32,
  },
  price: {
    fontSize: 40,
    color: '#6D5FFD',
    fontFamily: THEME.BOLD_FONT,
  },
  priceText: {
    fontSize: '1rem',
    color: '#2C3A4B',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 8,
  },
  header: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
    marginTop: 24,
  },
  touchableOpacity: {
    width: '5.563rem',
    height: '2.313rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '0.125rem',
    borderColor: THEME.PURPLE_COLOR,
    borderRadius: '0.375rem',
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    marginRight: 20,
  },
  sumText: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
  },
  label: {
    color: '#6D7580',
    fontSize: 14,
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 4,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  }
});
EStyleSheet.build();

export default styles;
