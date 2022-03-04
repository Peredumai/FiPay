import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 0,
  },
  price: {
    color: THEME.PURPLE_COLOR,
    fontFamily: THEME.BOLD_FONT,
  },
  messageText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    color: '#2C3A4B',
    marginTop: 12,
  },
  name: {
    fontFamily: THEME.BOLD_FONT,
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: 18,
    fontFamily: THEME.BOLD_FONT,
  },
  touchableOpacity: {
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    borderColor: THEME.PURPLE_COLOR,
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: '0.125rem',
    width: 184,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37,
  },
  touchableOpacityFilled: {
    backgroundColor: THEME.PURPLE_COLOR,
    borderRadius: '0.5rem',
    height: '3.438rem',
    width: 184,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 12,
  },
  textFilled: {
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1.125rem',
    color: THEME.WHITE_COLOR,
  },
});
EStyleSheet.build();

export default styles;
