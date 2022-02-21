import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  flex: {
    flex: 1,
  },
  shortLine: {
    width: 38,
    height: 3,
    backgroundColor: '#EBEEF2',
    marginBottom: 24,
  },
  modal: {
    paddingTop: 8,
    paddingBottom: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
});
EStyleSheet.build();

export default styles;
