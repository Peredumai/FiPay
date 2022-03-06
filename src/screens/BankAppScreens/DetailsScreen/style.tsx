import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    // paddingTop: 30.5,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background: rgba(109, 95, 253, 0.1)',
    borderRadius: 8,
    marginTop: 10.5,
    paddingVertical: 32,
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
  header: {
    color: '#2C3A4B',
    fontSize: 20,
    fontFamily: THEME.BOLD_FONT,
    marginTop: 24,
  },
  activityGraph: {
    width: '100%',
  },
  imageContainer: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsArea: {
    flex: 1,
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
    transform: [{translateX: -40}],
    paddingLeft: 5,
    marginTop: 20,
  },
  activityText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: THEME.BOLD_FONT,
    marginTop: 24,
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
