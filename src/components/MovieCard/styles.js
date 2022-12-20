import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';
import {H, W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  card: {
    width: W(46),
    margin: W(1),
    marginBottom: W(5),
    backgroundColor: '#F0F0F3',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 2,
    zIndex: 0,
  },
  productName: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 4,
  },
  priceAndRating: {
    height: 70,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableIcon: {
    fontSize: 12,
    marginRight: 6,
    color: Colors.primary,
  },
  availableText: {
    fontSize: 12,
    color: Colors.primary,
  },
});

export default styles;
