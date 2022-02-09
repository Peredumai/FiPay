import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: THEME.WHITE_COLOR,
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: '3.125rem',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
  },
  required: {
    fontSize: '1rem',
    color: '#DA1414',
  },
  mt: {
    marginTop: 24,
  },
  cirleImg: {
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: '0.25rem',
  },
  textInput: {
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
    borderRadius: 4,
    width: (win.width - 48 - 30) / 4,
  },
  price: {
    color: THEME.PURPLE_COLOR,
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  areaContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: 96,
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
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: 18,
    fontFamily: THEME.BOLD_FONT,
  },
  button: {
    marginVertical: 24,
  },
});
EStyleSheet.build();

export default styles;
