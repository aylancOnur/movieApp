import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';

import {connect} from 'react-redux';

import {requestAllMovies} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const [page, setPage] = useState(null);

  console.log('MOVIES =>', app);
  console.log('STATE =>', page);

  useEffect(() => {
    dispatch(requestAllMovies(page));
  }, [dispatch, page]);

  const renderItem = ({item}) => <Item title={item.title} />;

  const handlePagination = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      {app.loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={app.movies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // onEndReached={handlePagination}
        />
      )}
      <Button title="Page" onPress={handlePagination} />
    </View>
  );
});

export {Home};
