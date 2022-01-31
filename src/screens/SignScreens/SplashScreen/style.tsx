import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {THEME} from './../../../theme';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '2.25rem',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: '1.5rem',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'stretch',
    width: viewportWidth,
    height: viewportHeight,
  },
  createButton: {
    borderRadius: '0.5rem',
    alignSelf: 'stretch',
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: '0.125rem',
    borderColor: THEME.WHITE_COLOR,
    marginTop: '1rem',
  },
  inner: {
    marginTop: '0.25rem',
    marginBottom: '1.75rem',
  },
  welcomeText: {
    fontSize: '2.063rem',
    color: THEME.WHITE_COLOR,
    fontFamily: THEME.BOLD_FONT,
  },
  infoText: {
    fontSize: '1rem',
    color: THEME.WHITE_COLOR,
    fontFamily: THEME.DEFAULT_FONT,
  },
  createButtonText: {
    color: THEME.WHITE_COLOR,
    fontFamily: THEME.BOLD_FONT,
    fontSize: '1.125rem',
  },
});
EStyleSheet.build();

export default styles;
