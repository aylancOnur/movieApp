import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, View, Animated} from 'react-native';

import {connect} from 'react-redux';

import {requestAllMovies} from '../../redux/actions';

import {MovieCard, SearchBar} from '../../components';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const [page, setPage] = useState(1);

  // console.log('MOVIES =>', app.movies.list);
  console.log('STATE =>', page);

  useEffect(() => {
    dispatch(requestAllMovies(page));
  }, [dispatch, page]);

  const handlePagination = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <SearchBar navigation={props.navigation} />
      {/* {app.loading ? (
        <Text>Loading...</Text>
      ) : ( */}
      <FlatList
        data={app.movies.list}
        renderItem={({item}) => {
          return <MovieCard movie={item} navigation={props.navigation} />;
        }}
        keyExtractor={item => item.id}
        onEndReached={handlePagination}
        numColumns={2}
      />
      {/* )} */}
      {/* <Button title="Page" onPress={handlePagination} /> */}
    </View>
  );
});

export {Home};
