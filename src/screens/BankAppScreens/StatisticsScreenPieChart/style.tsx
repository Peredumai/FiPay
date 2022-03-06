import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    paddingTop: '13.25rem',
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
  chartWrapper: {
    width: win.width,
    paddingHorizontal: 24,
    position: 'absolute',
    zIndex: 1,
    marginTop: '7rem',
    height: 382,
  },
  chartView: {
    // position: 'absolute',
    // top: 100,
    borderWidth: 1,
    borderColor: '#6D5FFD',
    // paddingHorizontal: 24,
    // alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    // marginHorizontal: 24,
    // width: win.width - 48,
    width: '100%',
    height: 382,
  },
  chart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  dateText: {
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#A5ABB3',
    textAlign: 'center',
  },
  perCentText: {
    fontSize: 33,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    textAlign: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inOutComeText: {
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
    color: '#858C94',
  },
  priceText: {
    fontSize: 28,
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginTop: 4,
    marginRight: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    padding: 24,
  },
});
EStyleSheet.build();

export default styles;
