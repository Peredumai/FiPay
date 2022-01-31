import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
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
    marginTop: 24,
  },
  // cardImage: {
  //   position: 'absolute',
  // },
  // card: {
  //   padding: 20,
  //   paddingRight: 40,
  // },
  // balanceText: {
  //   fontSize: 16,
  //   color: '#F7F7F7',
  //   fontFamily: THEME.DEFAULT_FONT,
  // },
});
EStyleSheet.build();

export default styles;
