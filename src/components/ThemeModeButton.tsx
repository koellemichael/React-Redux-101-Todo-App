import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { selectSettings, setDarkMode } from '../slices/settingsSlice';

const ThemeModeButton: FC = () => {
  const dispatch = useAppDispatch();
  const settings = useSelector(selectSettings);
  return (
    <Button
      onClick={() => dispatch(setDarkMode(!settings.darkMode))}
      sx={{
        textTransform: 'none'
      }}>
      {settings.darkMode ? (
        <Stack direction='row' spacing={1}>
          <Typography>Light Mode</Typography>
          <LightModeIcon />
        </Stack>
      ) : (
        <Stack direction='row' spacing={1}>
          <Typography>Dark Mode</Typography>
          <DarkModeIcon />
        </Stack>
      )}
    </Button>
  );
};

export default ThemeModeButton;
