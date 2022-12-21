import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const SearchItem = props => {
  const {item, navigation, setQuery, close} = props;

  const handlePress = movieId => {
    navigation.navigate('MovieDetail', {
      movieId,
    });
    // setQuery('');
    close();
  };
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
          }}
        />
        <View style={styles.info}>
          <Text>{item.title}</Text>
          <Text>{item.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SearchItem);
