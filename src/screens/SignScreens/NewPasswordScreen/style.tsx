import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  passwordInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    height: '3rem',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
  },
  visibleControl: {
    marginLeft: '0.75rem',
    height: '3.125rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: '3.125rem',
    marginBottom: '1.25rem',
  },
  innerContainer: {
    flex: 1,
    marginTop: '3.5rem',
  },
  logoImage: {
    marginTop: '1.65rem',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: '2.5rem',
  },
  checkBox: {
    marginRight: '0.75rem',
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    color: THEME.PURPLE_COLOR,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1.25rem',
    transform: [{translateX: -6}],
  },
  headerText: {
    fontSize: '2.063rem',
    color: '#394452',
    fontFamily: THEME.BOLD_FONT,
  },
  label: {
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
  },
  row: {
    flexDirection: 'row',
  },
  haveNotAccountOpacity: {
    width: '8.4rem',
  },
  keyboardAvoid: {
    flex: 1,
  },
});
EStyleSheet.build();

export default styles;
