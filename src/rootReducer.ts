import { combineReducers } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import settingsSlice from './slices/settingsSlice';
import todosSlice from './slices/todosSlice';

const rootReducer = combineReducers({
  todos: todosSlice,
  settings: settingsSlice,
  search: searchSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
