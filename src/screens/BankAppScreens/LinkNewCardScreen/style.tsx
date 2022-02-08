import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 23,
    color: '#2C3A4B',
    fontFamily: THEME.BOLD_FONT,
    marginTop: 30.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  labelText: {
    textAlign: 'center',
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    marginTop: 4,
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
    marginTop: 24,
    borderWidth: '0.125rem',
  },
});
EStyleSheet.build();

export default styles;
