import React from 'react';
import {View} from 'react-native';

import {Navigation} from './navigation';

import {Provider} from 'react-redux';

import store from './redux';

import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export {App};
