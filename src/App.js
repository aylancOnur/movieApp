import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Navigation} from './navigation';

import {Provider} from 'react-redux';

import store from './redux';

import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

export {App};
