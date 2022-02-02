import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    backgroundColor: THEME.WHITE_COLOR,
  },
  text: {
    fontSize: '2.063rem',
    color: '#394452',
    fontFamily: THEME.BOLD_FONT,
    marginTop: '9.625rem',
  },
  input: {
    width: '3.75rem',
    height: '3.438rem',
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
    borderRadius: '0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '2.5rem',
    marginRight: '1.25rem',
    fontSize: 23,
    fontFamily: THEME.BOLD_FONT,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginBottom: '10.375rem',
  },
  resendCodeText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    alignSelf: 'center',
    marginTop: '2.5rem',
  },
});
EStyleSheet.build();

export default styles;
