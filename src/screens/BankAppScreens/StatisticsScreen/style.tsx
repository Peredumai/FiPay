import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  saveContainer: {
    flex: 1,
  },
  fitSpace: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#ffffff',
  },
  purpleBackground: {
    height: '17.5rem',
    backgroundColor: THEME.PURPLE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1.5rem',
    paddingTop: '3.375rem',
    position: 'absolute',
    top: 0,
    left: 0,
    rigth: 0,
    width: '100%',
  },
  historyArea: {
    paddingHorizontal: '1.5rem',
    flex: 1,
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
  chartWrapper: {
    zIndex: 1,
    marginTop: '6rem',
    width: '100%',
    paddingHorizontal: 24,
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
  price: {
    fontSize: 40,
    color: '#6D5FFD',
    fontFamily: THEME.BOLD_FONT,
  },
  priceText: {
    fontSize: '1rem',
    color: '#2C3A4B',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 8,
  },
  lineChart: {
    marginTop: 20,
    borderColor: THEME.PURPLE_COLOR,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 20,
    overflow: 'hidden',
    // height: 255.12,
  },
  activityText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
    marginTop: 24,
  },
  wrap: {
    transform: [{translateX: -35}],
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartLine: {
    width: 21.41,
    height: 5.57,
    borderRadius: 36,
    backgroundColor: THEME.PURPLE_COLOR,
    marginLeft: 12,
  },
  lightPurple: {
    backgroundColor: 'rgba(109, 95, 253, 0.2)',
  },
  labelText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: THEME.BOLD_FONT,
  },
  ml: {
    marginLeft: 25.25,
  },
  historyContainer: {
    marginBottom: 24,
  },
});
EStyleSheet.build();

export default styles;
