import React from 'react';
import {LogBox} from 'react-native';
import {Provider, connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {RootStack} from './router';
import {store} from './store/index';
// Routes
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
