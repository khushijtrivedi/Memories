import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';
import App from './App';
import './index.css';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts'],
  transforms: [
    createTransform(
      (inboundState) => {
        console.log('Saving state:', inboundState);
        return inboundState;
      },
      (outboundState) => {
        console.log('Rehydrating state:', outboundState);
        return Array.isArray(outboundState) ? outboundState : [];
      },
      { whitelist: ['posts'] },
    ),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'persist/PERSIST',
        'persist/REHYDRATE',
        'persist/PAUSE',
        'persist/RESUME',
        'persist/FLUSH',
        'persist/REMOVE', // Trailing comma added
      ],
    },
  }).concat(thunk),
});

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
