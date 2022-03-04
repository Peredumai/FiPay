import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    borderWidth: 1,
    borderColor: '#6D5FFD',
    borderRadius: '0.75rem',
    marginTop: '1.5rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  boldFont: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  defaultFont: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    color: '#2C3A4B',
  },
  buttonWrap: {
    marginTop: 179,
    marginBottom: 24,
  },
});
EStyleSheet.build();

export default styles;
