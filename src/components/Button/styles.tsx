import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../android/app/src/theme';

const styles = EStyleSheet.create({
  touchableOpacity: {
    backgroundColor: THEME.PURPLE_COLOR,
    borderRadius: '0.5rem',
    width: '23.75rem',
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: '1.125rem',
    color: THEME.WHITE_COLOR,
  },
});
EStyleSheet.build();

export default styles;
