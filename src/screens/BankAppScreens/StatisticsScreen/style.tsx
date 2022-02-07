import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  purpleBackground: {
    height: '17.5rem',
    backgroundColor: THEME.PURPLE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1.5rem',
    paddingTop: '3.375rem',
  },
  historyArea: {
    paddingHorizontal: '1.5rem',
    flex: 1,
    paddingTop: '6.25rem',
  },
  touchableOpacity: {
    width: '6.75rem',
    height: '2.313rem',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: '0.375rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#FFFFFF',
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
  },
  headerText: {
    fontSize: '1.438rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#FFFFFF',
  },
  chartImage: {
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: 1,
    marginTop: '5rem',
    width: win.width,
  },
  labelPurple: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
  upcomingText: {
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  upcomingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
});
EStyleSheet.build();

export default styles;
