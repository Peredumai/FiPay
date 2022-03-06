import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../src/theme';

const styles = EStyleSheet.create({
  iconLeft: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    marginLeft: 5,
    marginRight: 16,
  },
  iconRight: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    marginRight: '0.75rem',
  },
  headerTitle: {
    fontSize: '1.438rem',
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
