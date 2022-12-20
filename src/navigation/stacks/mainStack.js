import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Detail} from '../../screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="MovieDetail" component={Detail} />
    </Stack.Navigator>
  );
};

export {MainStack};
