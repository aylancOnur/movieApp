import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  autoComplate: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  listContainer: {
    marginTop: 15,
    height: 300,
    zIndex: 999,
    backgroundColor: 'white',
    borderWidth: 0.5,

    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 25,
  },
  inputContainer: {
    borderWidth: 0,
    height: 40,
    width: '100%',
  },
});

export default styles;
