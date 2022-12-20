import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

import styles from './styles';

const mapDispatchToProps = dispatch => ({dispatch});

const MovieCard = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        props.navigation.navigate('MovieDetail', {
          movieId: props.movie.id,
        })
      }>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.priceAndRating}>
        <Text style={styles.productName}>{props.movie.title}</Text>
        <View style={styles.price}>
          <Text>{props.movie.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export {MovieCard};
