import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  timeText: {
    color: '#6D7580',
    fontSize: '0.688rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: '0.25rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '1.5rem',
    backgroundColor: '#ffffff',
  },
  message: {
    flex: 1,
  },
  logoImg: {
    marginRight: '1.5rem',
  },
  touchableOpacity: {
    width: '5.563rem',
    height: '2.313rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    backgroundColor: THEME.PURPLE_COLOR,
  },
  text: {
    color: '#ffffff',
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
  },
  button: {
    marginLeft: '1.25rem',
  },
  price: {
    color: THEME.PURPLE_COLOR,
    fontFamily: THEME.BOLD_FONT,
  },
  messageText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    color: '#2C3A4B',
  },
  name: {
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
