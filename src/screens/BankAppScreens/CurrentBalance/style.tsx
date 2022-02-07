import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';

import {THEME} from './../../../theme';

const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  purpleBackground: {
    height: '25rem',
    backgroundColor: THEME.PURPLE_COLOR,
    paddingHorizontal: '1.5rem',
    paddingTop: '3.375rem',
  },
  headerText: {
    fontSize: '1.438rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#FFFFFF',
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
});
EStyleSheet.build();

export default styles;
