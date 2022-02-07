import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
  },
  emailContainer: {
    marginBottom: '1.25rem',
  },
  innerContainer: {
    flex: 1,
    marginTop: '12.5rem',
  },
  textContainer: {
    marginBottom: '2.5rem',
  },
  headerText: {
    fontSize: '2.063rem',
    color: '#394452',
    fontFamily: THEME.BOLD_FONT,
    marginBottom: '2.5rem',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
    marginTop: '1.25rem',
  },
  required: {
    lineHeight: 18,
    fontSize: '0.875rem',
    color: '#DA1414',
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    height: '3.125rem',
  },
  errorInput: {
    borderColor: '#DA1414',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpText: {
    fontFamily: THEME.DEFAULT_FONT,
    fontSize: '1rem',
    color: '#2C3A4B',
  },
});
EStyleSheet.build();

export default styles;
