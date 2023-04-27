import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { setLocalStorage } from '@utils/localStorage';
// import { createStore } from 'redux';

import rootReducer from './reducers/index';

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  //store.getState().favoriteReducer
  setLocalStorage('store', store.getState().favoriteReducer);
});

export default store;
