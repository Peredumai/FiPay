import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '1.5rem',
  },
  first: {
    marginBottom: 28.68,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: '1.25rem',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  dateText: {
    color: '#858C94',
    fontSize: '0.688rem',
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: '0.375rem',
  },
  priceText: {
    marginRight: '0.938rem',
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1rem',
    color: '#2C3A4B',
  },
  timeText: {
    color: '#2C3A4B',
    fontSize: '1rem',
    fontFamily: THEME.BOLD_FONT,
  },
  textContainer: {
    paddingLeft: '1rem',
    justifyContent: 'space-between',
  },
  touchableOpacity: {
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    borderColor: THEME.PURPLE_COLOR,
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 24,
    borderWidth: '0.125rem',
  },
  text: {
    color: THEME.PURPLE_COLOR,
    fontSize: 18,
    fontFamily: THEME.BOLD_FONT,
  },
 
});
EStyleSheet.build();

export default styles;
