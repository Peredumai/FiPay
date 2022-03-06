import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

const styles = EStyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    width: '100%',
  },
  selectedDateContainerStyle: {
    height: 35,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.PURPLE_COLOR,
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
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
    borderWidth: '0.125rem',
    width: 184,
  },
  labelText: {
    marginBottom: 5,
    color: THEME.PURPLE_COLOR,
  },
});
EStyleSheet.build();

export default styles;
