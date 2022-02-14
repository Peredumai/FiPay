import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../theme';

import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    padding: 24,
    // flex: 1,
    background: '#FFFFFF',
    borderRadius: 12,
    elevation: 4,
    shadowOffset: {width: 10, height: 7},
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  keyText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.DEFAULT_FONT,
  },
  valueText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  qrCode: {
    marginTop: 24,
    width: win.width - 48 - 24 - 24,
  },
});
EStyleSheet.build();

export default styles;
