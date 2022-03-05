import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  historyArea: {
    paddingHorizontal: '1.5rem',
    flex: 1,
    marginBottom: 24,
  },
  chartWrapper: {
    zIndex: 1,
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
  lineChart: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    overflow: 'hidden',
    // height: 255.12,
  },
  wrap: {
    transform: [{translateX: -54}],
    marginTop: 20,
    marginBottom: -20,
  },
  chartLabelText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
    transform: [{translateX: 39}],
  },
  horizontalMonth: {
    height: 31,
  },
  monthsText: {
    color: '#A5ABB3',
    paddingRight: 24,
    fontSize: 16,
    fontFamily: THEME.DEFAULT_FONT,
  },
  ml: {
    marginLeft: 24,
  },
  monthsTextActive: {
    color: '#6D5FFD',
    paddingRight: 24,
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
  },
  underLine: {
    width: 16,
    height: 3,
    borderRadius: 100,
    backgroundColor: THEME.PURPLE_COLOR,
    marginTop: 4,
  },
  monthContainer: {
    marginTop: 24,
    heigth: 31,
  }
});
EStyleSheet.build();

export default styles;
