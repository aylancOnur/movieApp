import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SearchInput} from '../index';

import {connect} from 'react-redux';

import {requestSearchMovies, clearSearchMovies} from '../../redux/actions';

import {w} from '../../utils/ui/dimensions';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isPagination, setIsPagination] = useState(false);

  const [iconName, setIconName] = useState('magnify');
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(24));

  const handlePagination = () => {
    setPage(page + 1);
    setIsPagination(true);
  };

  const handleText = text => {
    setQuery(text);
    setIsPagination(false);
  };

  const handleSelect = () => {
    setIsAnimating(true);

    fadeAnim._value !== w - 24
      ? Animated.timing(fadeAnim, {
          toValue: w - 24,
          duration: 350,
          useNativeDriver: false,
        }).start(() => {
          setIconName('close');
          setIsAnimating(false);
        })
      : Animated.timing(fadeAnim, {
          toValue: 24,
          duration: 350,
          useNativeDriver: false,
        }).start(() => {
          setIconName('magnify');
          setQuery('');
          setIsAnimating(false);
        });
  };

  const close = () => {
    setIconName('magnify');
    setQuery('');
    setFadeAnim(new Animated.Value(24));
    setIsAnimating(false);
  };

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(requestSearchMovies(page, query, isPagination));
    } else {
      setPage(1);
      dispatch(clearSearchMovies());
    }
  }, [dispatch, isPagination, page, query]);

  // const request = setTimeout(() => {
  //   dispatch(requestSearchMovies(page, query));
  // }, 500);
  // return () => clearTimeout(request);

  const renderRectangle = () => {
    const customStyle = {
      width: fadeAnim,
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => handleSelect()}>
          <MaterialCommunityIcons name={iconName} size={24} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        {!isAnimating && iconName === 'magnify' ? (
          <View style={styles.searchContainer}>
            <MaterialCommunityIcons
              style={styles.movieIcon}
              name="movie"
              size={30}
            />
            <Text style={styles.title}>Search Movie...</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={styles.rectangleContainer}>{renderRectangle()}</View>
      </View>
      {!isAnimating && iconName === 'close' ? (
        <View style={styles.autocompleteContainer}>
          <SearchInput
            navigation={props.navigation}
            searchMovies={app.searchMovies}
            handleText={handleText}
            handlePagination={handlePagination}
            searchLoading={app.searchLoading}
            setQuery={setQuery}
            close={close}
            text={query}
          />
        </View>
      ) : (
        <View />
      )}
    </>
  );
});

export {SearchBar};
