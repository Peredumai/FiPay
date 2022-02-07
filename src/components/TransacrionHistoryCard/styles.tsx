import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

const styles = EStyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '1.25rem',
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
  },
  priceText: {
    marginRight: '0.938rem',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
    color: '#2C3A4B',
  },
  marketText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  dateText: {
    color: '#858C94',
    fontSize: '0.688rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: '0.375rem',
  },
  textContainer: {
    paddingLeft: '1rem',
    justifyContent: 'space-between',
  },
  line: {
    width: 'auto',
    borderWidth: 1,
    borderColor: '#EBEEF2',
  },
});
EStyleSheet.build();

export default styles;
