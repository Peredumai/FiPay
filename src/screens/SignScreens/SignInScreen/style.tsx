import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    height: '3rem',
    paddingHorizontal: '1rem',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
  },
  innerContainer: {
    flex: 1,
  },
  logoImage: {
    marginTop: '1.65rem',
    marginBottom: '7.5rem',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  visibleControl: {
    marginLeft: '0.75rem',
    height: '3.125rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
  },
  checkBox: {
    borderWidth: 0,
    marginRight: '0.75rem',
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    color: THEME.PURPLE_COLOR,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1.25rem',
    transform: [{translateX: -6}],
    width: 120,
    marginTop: 22,
  },
  firstText: {
    fontSize: '2.063rem',
    color: '#394452',
    fontFamily: THEME.BOLD_FONT,
  },
  secondText: {
    fontSize: '2.063rem',
    color: THEME.PURPLE_COLOR,
    fontFamily: THEME.BOLD_FONT,
  },
  label: {
    fontSize: 14,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
    marginTop: 20,
  },
  forgotText: {
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
  forgotOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.25rem',
    alignSelf: 'center',
  },
  haveNotAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  haveNotAccountContainerText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
  },
  haveNotAccountText: {
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
  required: {
    lineHeight: 18,
    fontSize: 14,
    color: '#DA1414',
  },
  errorInput: {
    borderColor: '#DA1414',
  },
  error: {
    marginTop: '0.5rem',
    backgroundColor: '#FEEFEF',
    color: '#DA1414',
    paddingHorizontal: '1rem',
    paddingVertical: '0.375rem',
    borderRadius: 8,
  },
  dangerIcon: {
    marginRight: '0.25rem',
  },
  errorText: {
    fontSize: 14,
    color: '#DA1414',
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
    color: '#09101D',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: '3.125rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
EStyleSheet.build();

export default styles;
