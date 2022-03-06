import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    // paddingTop: 30.5,
  },
  purpleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: THEME.PURPLE_COLOR,
  },
  chartDoughnut: {
    alignItems: 'center',
    paddingTop: 40,
    marginTop: 24,
    height: 260,
    borderWidth: 1,
    borderColor: THEME.PURPLE_COLOR,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  chartMiddle: {
    position: 'absolute',
    top: '45%',
  },
  priceText: {
    color: '#6D5FFD',
    fontSize: 41,
    fontFamily: THEME.BOLD_FONT,
  },
  priceLabelText: {
    color: '#6D7580',
    fontSize: 16,
    fontFamily: THEME.DEFAULT_FONT,
    marginTop: 4,
    textAlign: 'center',
  },
  cardsContainer: {
    marginTop: 24,
    marginRight: -10,
    flexDirection: 'row',
    overflow: 'visible',
    marginBottom: 24,
  },
});
EStyleSheet.build();

export default styles;
