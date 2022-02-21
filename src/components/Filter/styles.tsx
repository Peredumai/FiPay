import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

const styles = EStyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    width: '100%',
  },
  header: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
    alignSelf: 'center',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
    marginTop: 24,
  },
  required: {
    lineHeight: 18,
    fontSize: 14,
    color: '#DA1414',
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
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: '3.125rem',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  icon: {
    marginHorizontal: '0.75rem',
  },
  mb: {
    marginBottom: 24,
  },
  dateText: {
    color: '#09101D',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
    marginLeft: '1rem',
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
});
EStyleSheet.build();

export default styles;
