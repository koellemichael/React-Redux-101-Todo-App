import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputBase, Paper } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { selectSearch, setSearchTerm } from '../slices/searchSlice';

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  return (
    <Paper sx={{ padding: '12px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <SearchIcon sx={{ fill: 'lightgray' }} />
        </Grid>
        <Grid item flexGrow={1}>
          <InputBase
            type='search'
            placeholder='Search...'
            value={search.searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchBar;
