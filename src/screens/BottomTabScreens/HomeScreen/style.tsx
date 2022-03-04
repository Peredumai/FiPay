import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1.5rem',
    paddingTop: '1.5rem',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '1.75rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  labelPurple: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
  upcomingText: {
    fontSize: '1.25rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
  },
  upcomingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  wrap: {
    width: win.width,
    marginLeft: - 24,
    // paddingLeft: 24,
    // marginHorizontal: 24, 
  },
  mr: {
    marginRight: 24,
  },
  // pl: {
  //   paddingLeft: 36,
  // },
});
EStyleSheet.build();

export default styles;
