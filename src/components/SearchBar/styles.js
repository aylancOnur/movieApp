import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from '../../utils/ui/getStatusBarHeight';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 3,
  },
  searchContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  movieIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 22,
  },
  rectangleContainer: {
    flexWrap: 'wrap',
  },
  rectangle: {
    height: 40,
  },
  searchIcon: {
    width: 24,
    height: 40,
    justifyContent: 'center',
  },
  autocompleteContainer: {
    // top: getStatusBarHeight(),
    paddingHorizontal: 20,
    position: 'absolute',
    paddingLeft: 60,
    height: 40,
    width: '100%',
  },
});

export default styles;
