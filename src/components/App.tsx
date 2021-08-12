import 'react-native-gesture-handler';
import React from 'react';
import Routes from '../navigation';
import { Provider } from 'react-redux';
import store from '../redux/reducers';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox, StatusBar } from 'react-native';
import Config from '../utils/Config';


// Initialize the module (needs to be done only once)
const App = () => {
  // splashScreen.hide();
  LogBox.ignoreAllLogs(true);
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent={false} backgroundColor={Config.colors.PRIMERY} />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
