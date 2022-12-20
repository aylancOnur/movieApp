import React, {useEffect} from 'react';
import {View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

import {requestMovietWithId} from '../../redux/actions';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {movieId} = props.route.params;

  useEffect(() => {
    dispatch(requestMovietWithId(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  console.log('MOVIE DETAIL', app.movie);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MaterialCommunityIcons style={{marginRight: 5}} name="movie" size={30} />
    </View>
  );
});

export {Detail};
