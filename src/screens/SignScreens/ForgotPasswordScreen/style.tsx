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
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#09101D',
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
  },
  row: {
    flexDirection: 'row',
  },
  helpText: {
    fontFamily: THEME.DEFAULT_FONT,
    fontSize: '1rem',
    color: '#2C3A4B',
  },
});
EStyleSheet.build();

export default styles;
