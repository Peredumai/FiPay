import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  emailInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    height: '3rem',
    paddingHorizontal: '1rem',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
  },
  passwordInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    height: '3rem',
    paddingHorizontal: '1rem',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
  },
  fullNameInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    height: '3rem',
    paddingHorizontal: '1rem',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
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
  // checkBox: {
  //   marginRight: '0.75rem',
  //   transform: [{scaleX: 0.9}, {scaleY: 0.9}, {translateY: -6}],
  //   color: THEME.PURPLE_COLOR,
  // },
  // checkBoxContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   marginBottom: '1.25rem',
  //   transform: [{translateX: -6}],
  //   marginTop: 20,
  // },
  headerText: {
    fontSize: '2.063rem',
    color: '#394452',
    fontFamily: THEME.BOLD_FONT,
  },
  // label: {
  //   fontSize: '0.875rem',
  //   fontFamily: 'Avenir-Regular',
  //   color: '#858C94',
  // },
  labelPurple: {
    fontSize: '0.875rem',
    fontFamily: 'Avenir-Regular',
    color: THEME.PURPLE_COLOR,
  },
  haveNotAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
  haveNotAccountContainerText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
  },
  haveNotAccountText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
  haveNotAccountOpacity: {
    width: '8.4rem',
  },
  keyboardAvoid: {
    flex: 1,
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
    marginTop: 20,
  },
  required: {
    lineHeight: 18,
    fontSize: 14,
    color: '#DA1414',
  },
  errorInput: {
    borderColor: '#DA1414',
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
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
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
  label: {
    fontSize: 14,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
});
EStyleSheet.build();

export default styles;
