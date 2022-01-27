import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {THEME} from './../../../android/app/src/theme';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    paddingBottom: '2.25rem',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'stretch',
    width: viewportWidth,
    height: viewportHeight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: '1.75rem',
  },
  createButton: {
    borderRadius: '0.5rem',
    width: '23.75rem',
    height: '3.438rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: '0.125rem',
    borderColor: THEME.WHITE_COLOR,
    marginTop: '1rem',
  },
  inner: {
    height: '3rem',
    width: '23.75rem',
  },
  welcomeText: {
    fontSize: '2.063rem',
    color: THEME.WHITE_COLOR,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  infoText: {
    fontSize: '1rem',
    color: THEME.WHITE_COLOR,
    fontFamily: 'SourceSansPro-Regular',
  },
  createButtonText: {
    color: THEME.WHITE_COLOR,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: '1.125rem',
  },
});
EStyleSheet.build();

export default styles;
