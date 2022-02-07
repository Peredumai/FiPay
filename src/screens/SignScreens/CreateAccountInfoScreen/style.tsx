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
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  textinput: {
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    flexGrow: 1,
  },
  streetWrapper: {
    marginTop: 20,
  },
  streetInput: {
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    paddingHorizontal: '1rem',
    height: '3rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    fontSize: '1rem',
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
    transform: [{scaleX: 0.9}, {scaleY: 0.9}, {translateY: -6}],
    color: THEME.PURPLE_COLOR,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    fontFamily: 'Avenir-Regular',
    color: '#858C94',
  },
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1.25rem',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    marginHorizontal: '0.75rem',
  },
  stateIcon: {
    position: 'absolute',
    right: '0.75rem',
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: '0.5rem',
    borderColor: '#A5ABB3',
    borderRadius: 8,
    height: '3.125rem',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  halfInput: {
    width: (win.width - 72) / 2,
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    borderWidth: 0,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    fontSize: '1rem',
  },
});
EStyleSheet.build();

export default styles;
