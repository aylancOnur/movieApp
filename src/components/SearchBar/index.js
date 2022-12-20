import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Autocomplete from 'react-native-autocomplete-input';

import {connect} from 'react-redux';

import {requestSearchMovies} from '../../redux/actions';

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

  const deviceWidth = Dimensions.get('window').width;

  //   console.log('MOVIES =>', app.searchMovies);

  const [queryResult, setQueryResult] = useState([]);
  const [query, setQuery] = useState('');
  const [iconName, setIconName] = useState('magnify');
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(24));

  const handleSelect = () => {
    setIsAnimating({isAnimating: true});

    fadeAnim._value !== deviceWidth - 24
      ? Animated.timing(fadeAnim, {
          toValue: deviceWidth - 24,
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
          setQueryResult([]);
          setIsAnimating(false);
        });
  };

  const searchData = (page, qry) => {
    if (qry.length >= 3) {
      dispatch(requestSearchMovies(page, qry));
      setQueryResult(app.searhMovies);
    } else {
      return;
    }
  };

  const renderRectangle = () => {
    const customStyle = {
      width: fadeAnim,
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <TouchableOpacity
          style={{
            width: 24,
            height: 40,
            justifyContent: 'center',
          }}
          onPress={() => handleSelect()}>
          <MaterialCommunityIcons name={iconName} size={24} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const handlePagination = () => {
    console.log('ON END REACHED');
  };
  return (
    <>
      <View style={styles.header}>
        {!isAnimating && iconName === 'magnify' ? (
          <View
            style={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              style={{marginRight: 5}}
              name="movie"
              size={30}
            />
            <Text style={styles.title}>Movie Catch</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={{flexWrap: 'wrap'}}>{renderRectangle()}</View>
      </View>
      {!isAnimating && iconName === 'close' ? (
        <View style={styles.autocompleteContainer}>
          <Autocomplete
            style={styles.autoComplate}
            data={app.searchMovies}
            placeholder={'searchhint'}
            autoFocus={true}
            inputContainerStyle={styles.inputContainer}
            listContainerStyle={styles.listContainer}
            onChangeText={text => {
              searchData(1, text);
            }}
            flatListProps={{
              onEndReached: handlePagination,
              keyExtractor: (_, idx) => idx,
              renderItem: ({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('MovieDetail', {
                      item: item,
                    });
                  }}>
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
              ),
            }}
          />
        </View>
      ) : (
        <View />
      )}
    </>
  );
});

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: 'blue',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 22,
  },
  rectangle: {
    height: 40,
  },
  autoComplate: {
    backgroundColor: 'transparent',
  },
  autocompleteContainer: {
    // top: Platform.OS == 'ios' ? 65 : 40,
    paddingHorizontal: 20,
    position: 'absolute',
    paddingLeft: 60,
    height: 40,
    width: '100%',
  },
  listContainer: {
    height: 300,
    zIndex: 999,
    backgroundColor: 'white',
    borderWidth: 0.5,

    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  inputContainer: {
    borderWidth: 0,
    height: 40,
  },
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
