import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    marginTop: 24,
  },
  scrollContainer: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
  },
  firstSection: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  secondSection: {
    height: 80,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 28,
    paddingLeft: 16,
    paddingRight: 24,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  purpleColor: {
    backgroundColor: 'rgba(109, 95, 253, 0.1)',
  },
  purpleColorDark: {
    backgroundColor: 'rgba(109, 95, 253, 0.3)',
  },
  yellowColor: {
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
  },
  yellowColorDark: {
    backgroundColor: 'rgba(255, 184, 0, 0.3)',
  },
  blueColor: {
    backgroundColor: 'rgba(24, 103, 255, 0.1)',
  },
  blueColorDark: {
    backgroundColor: 'rgba(24, 103, 255, 0.3)',
  },
  redColor: {
    backgroundColor: 'rgba(255, 24, 67, 0.1)',
  },
  redColorDark: {
    backgroundColor: 'rgba(255, 24, 67, 0.3)',
  },
});
EStyleSheet.build();

export default styles;
