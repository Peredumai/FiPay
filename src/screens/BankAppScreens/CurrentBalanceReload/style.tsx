import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';

import {THEME} from './../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  purple: {
    backgroundColor: '#6D5FFD',
    height: 549,
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: '1.438rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#FFFFFF',
    marginTop: 42.5,
  },
  incomeExpences: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#FFFFFF',
    marginTop: '2.5rem',
    height: '6.5rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#FFFFFF',
    marginTop: '2.5rem',
    alignItems: 'center',
    zIndex: 9999,
    position: 'absolute',
    width: '100%',
    top: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    fontSize: '0.688rem',
    fontFamily: THEME.DEFAULT_FONT,
    color: '#858C94',
  },
  headPrice: {
    fontSize: '1.25rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#6D5FFD',
  },
  headPriceRed: {
    fontSize: '1.25rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#FF1843',
  },
  icon: {
    marginRight: '0.75rem',
    height: '3.5rem',
    width: '3.5rem',
  },
  balanceImg: {
    // width: win.width,
    marginTop: '1.5rem',
    resizeMode: 'stretch',
    width: win.width - 48,
  },
  chartContainer: {
    height: '34.901rem',
    borderWidth: 1,
    borderColor: THEME.PURPLE_COLOR,
    backgroundColor: '#FFFFFF',
    marginVertical: 24,
    borderRadius: 12,
    paddingTop: 32,
    alignItems: 'center',
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
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
  label: {
    color: '#2C3A4B',
    fontSize: 20,
    marginTop: 48,
    fontFamily: THEME.BOLD_FONT,
  },
  nums: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    transform: [{translateY: -45}],
  },
  num: {
    fontSize: 14,
    color: '#858C94',
    fontFamily: THEME.DEFAULT_FONT,
  },
  barchartWrapper: {
    transform: [{translateY: -80}],
  }
});
EStyleSheet.build();

export default styles;
