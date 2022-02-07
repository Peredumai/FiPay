import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '1.5rem',
    paddingTop: '1.906rem',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerText: {
    color: '#2C3A4B',
    fontSize: '1.25rem',
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
