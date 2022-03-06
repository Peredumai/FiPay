import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 30.5,
  },
  // searchInput: {
  //   height: 45,
  //   paddingVertical: '0.75rem',
  //   paddingHorizontal: '1rem',
  //   backgroundColor: '#F4F6F9',
  //   borderRadius: 8,
  // },
  inputContainer: {
    marginTop: '0.5rem',
    borderRadius: 8,
    height: 45,
    backgroundColor: '#F4F6F9',
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
  labelText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    marginTop: 4,
  },
  iconsWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    alignItems: 'center',
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
  header: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
  },
});
EStyleSheet.build();

export default styles;
