import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  info: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: 5,
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth: 1,
  },
});

export default styles;
