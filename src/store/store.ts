import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './reducers/apiSlice';
import searchReducer from './reducers/searchSlice';

const rootReducer = combineReducers({
  searchReducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();
