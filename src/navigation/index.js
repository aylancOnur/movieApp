import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stacks/mainStack';

const Navigation = props => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export {Navigation};
