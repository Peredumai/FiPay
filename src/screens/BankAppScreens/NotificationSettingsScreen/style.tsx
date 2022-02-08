import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
  },
  line: {
    width: 'auto',
    borderWidth: 1,
    borderColor: '#EBEEF2',
    marginTop: '1.5rem',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1.5rem',
    // paddingBottom: '0.938rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: '1rem',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#2C3A4B',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
  },
  languageText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginRight: '0.938rem',
  },
  headerText: {
    color: '#545D69',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 30,
  },
});
EStyleSheet.build();

export default styles;
