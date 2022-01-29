import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../theme';

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
  },
  passwordInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#A5ABB3',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    height: '3rem',
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
    fontSize: 14,
    fontFamily: 'Avenir-Regular',
    color: '#858C94',
  },
  labelPurple: {
    fontSize: 14,
    fontFamily: 'Avenir-Regular',
    color: THEME.PURPLE_COLOR,
  },
  topInputText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginLeft: '1rem',
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
  row: {
    flexDirection: 'row',
  },
  haveNotAccountOpacity: {
    width: '8.4rem',
  },
});
EStyleSheet.build();

export default styles;
