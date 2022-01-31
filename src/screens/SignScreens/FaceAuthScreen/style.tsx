import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: THEME.PURPLE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: THEME.WHITE_COLOR,
    height: '16.688rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceText: {
    fontSize: '1.438rem',
    fontFamily: THEME.BOLD_FONT,
    color: '#2C3A4B',
    marginTop: '1.5rem',
  },
  pointText: {
    marginTop: '0.5rem',
    color: '#2C3A4B',
    fontFamily: THEME.DEFAULT_FONT,
    fontSize: '1rem',
  },
  line: {
    width: '2.375rem',
    height: '0.188rem',
    backgroundColor: '#EBEEF2',
    position: 'absolute',
    top: '0.5rem',
  },
});
EStyleSheet.build();

export default styles;
