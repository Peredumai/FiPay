import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modal: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '70%',
    height: '70%',
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Regular',
  },
});
EStyleSheet.build();

export default styles;
