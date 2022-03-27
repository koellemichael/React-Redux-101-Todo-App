import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

interface SearchState {
  searchTerm: string;
  recent: string[];
}

const slice = createSlice({
  name: 'search',
  initialState: { searchTerm: '', recent: [] } as SearchState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setRecentSearchTerm: (state, action: PayloadAction<string>) => {
      state.recent.push(action.payload);
      if (state.recent.length > 5) {
        state.recent.shift();
      }
    }
  }
});

export const { setRecentSearchTerm, setSearchTerm } = slice.actions;
export const selectSearch = (state: RootState) => state.search;
export default slice.reducer;
