import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '1.25rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  priceText: {
    marginRight: '0.938rem',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
    color: '#2C3A4B',
  },
  line: {
    width: 'auto',
    borderWidth: 1,
    borderColor: '#EBEEF2',
  },
  timeText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  textContainer: {
    paddingLeft: '1rem',
    justifyContent: 'space-between',
  },
});
EStyleSheet.build();

export default styles;
