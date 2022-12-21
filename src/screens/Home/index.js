import React, {useEffect, useState} from 'react';
import {FlatList, View, RefreshControl, Platform} from 'react-native';

import {connect} from 'react-redux';

import {requestAllMovies, pullToRefresh} from '../../redux/actions';

import {Loading, MovieCard, SearchBar} from '../../components';

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

  const handlePagination = () => {
    setPage(page + 1);
  };

  const onRefresh = () => {
    dispatch(pullToRefresh(1));
  };

  useEffect(() => {
    dispatch(requestAllMovies(page));
  }, [dispatch, page]);

  return (
    <>
      <View style={Platform.OS === 'ios' ? styles.searchContainer : null}>
        <SearchBar navigation={props.navigation} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={app.movies}
          renderItem={({item}) => {
            return <MovieCard movie={item} navigation={props.navigation} />;
          }}
          keyExtractor={item => item.id}
          onEndReached={handlePagination}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={app.loading} onRefresh={onRefresh} />
          }
          scrollEnabled={app.loading ? false : true}
          ListFooterComponent={() => <Loading />}
          initialNumToRender={20}
        />
      </View>
    </>
  );
});

export {Home};
