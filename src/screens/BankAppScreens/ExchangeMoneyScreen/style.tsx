import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  card: {
    padding: 32,
    borderWidth: 1,
    borderColor: '#6D5FFD',
    borderRadius: '0.75rem',
    marginTop: '1.5rem',
  },
  innerSection: {
    borderWidth: 1,
    borderColor: '#EBEEF2',
    borderRadius: 8,
    height: 82,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  cirleImg: {
    alignSelf: 'center',
    margin: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowNear: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#858C94',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
  },
  currency: {
    fontSize: 28,
    color: '#2C3A4B',
    fontFamily: THEME.BOLD_FONT,
    marginRight: 12,
  },
  price: {
    color: '#6D5FFD',
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
