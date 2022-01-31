import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

const styles = EStyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    width: 89,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.PURPLE_COLOR,
    borderRadius: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: 14,
    fontFamily: THEME.BOLD_FONT,
  },
  marketText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  dateText: {
    color: '#858C94',
    fontSize: 11,
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 6,
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
