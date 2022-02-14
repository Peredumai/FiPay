import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  purpleContainer: {
    backgroundColor: THEME.PURPLE_COLOR,
    height: 206,
    paddingHorizontal: 24,
  },
  inner: {
    backgroundColor: '#ffffff',
    padding: 24,
    width: '100%',
    // height: 433,
    marginTop: 30.5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6D5FFD',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchableOpacity: {
    width: '6.75rem',
    height: '2.313rem',
    borderWidth: 2,
    borderColor: THEME.PURPLE_COLOR,
    borderRadius: '0.375rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: '0.875rem',
    fontFamily: THEME.BOLD_FONT,
  },
  headerTitle: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
  },
  bigPrice: {
    fontSize: 40,
    color: THEME.PURPLE_COLOR,
    alignSelf: 'center',
    marginTop: 32,
    fontFamily: THEME.BOLD_FONT,
  },
  line: {
    width: 'auto',
    borderWidth: 1,
    borderColor: '#EBEEF2',
    marginTop: 32,
  },
  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 32,
    // paddingHorizontal: 24,
  },
  labelText: {
    color: '#545D69',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
  },
  priceText: {
    color: THEME.PURPLE_COLOR,
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 33,
  },
  mt24: {
    marginTop: 24,
  },
  yellowText: {
    color: '#FFB800',
  },
  yellow: {
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
  },
  blueText: {
    color: '#1867FF',
  },
  blue: {
    backgroundColor: 'rgba(24, 103, 255, 0.1)',
  },
  redText: {
    color: '#FF1843',
  },
  red: {
    backgroundColor: ' rgba(255, 24, 67, 0.1)',
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
  historyArea: {
    paddingHorizontal: '1.5rem',
    flex: 1,
    paddingTop: 248,
  },
  labelPurple: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: THEME.PURPLE_COLOR,
  },
});
EStyleSheet.build();

export default styles;
