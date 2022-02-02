import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  touchableOpacity: {
    backgroundColor: THEME.PURPLE_COLOR,
    borderRadius: '0.5rem',
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  text: {
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1.125rem',
    color: THEME.WHITE_COLOR,
  },
  disabledText: {
    opacity: 1,
  },
  disabled: {
    backgroundColor: 'rgba(109, 95, 253, 0.5)',
  },
});
EStyleSheet.build();

export default styles;
