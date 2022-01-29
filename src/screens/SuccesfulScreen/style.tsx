import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successful: {
    marginVertical: '2rem',
    fontSize: 28,
    color: THEME.PURPLE_COLOR,
    fontFamily: THEME.BOLD_FONT,
  },
  info: {
    color: '#A5ABB3',
    fontFamily: THEME.DEFAULT_FONT,
    fontSize: '1rem',
  },
});
EStyleSheet.build();

export default styles;
