import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {THEME} from '../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
    paddingTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
    marginTop: '1.25rem',
  },
  required: {
    lineHeight: '1.125rem',
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
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
  },
  buttonWrap: {
    marginTop: '8.688rem',
    marginBottom: 24,
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  scanArea: {
    height: 240,
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  scanText: {
    fontSize: 16,
    color: '#858C94',
    fontFamily: THEME.BOLD_FONT,
    marginTop: 12,
  },
  mt: {
    marginTop: '0.25rem',
  },
});
EStyleSheet.build();

export default styles;
