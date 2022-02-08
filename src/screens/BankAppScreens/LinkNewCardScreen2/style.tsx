import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 20,
    color: '#2C3A4B',
    fontFamily: THEME.BOLD_FONT,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  // row: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    height: '3.125rem',
  },
  textinput: {
    height: 'auto',
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  stateIcon: {
    position: 'absolute',
    right: '0.75rem',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiredInput: {
    width: win.width - 72 - (win.width - 72) / 3,
  },
  cvvInput: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    height: '3.125rem',
    width: (win.width - 72) / 3,
  },
  enterInput: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    paddingHorizontal: '1rem',
  },
});
EStyleSheet.build();

export default styles;
