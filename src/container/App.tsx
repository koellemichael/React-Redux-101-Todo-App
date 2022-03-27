import { Box, Container, Modal, Stack } from '@mui/material';
import { FC, useState } from 'react';
import ThemeModeButton from '../components/ThemeModeButton';
import Title from '../components/Title';
import TodoInput from '../components/TodoInput';
import TodoContainer from './TodoContainer';
import Toolbar from './Toolbar';

const App: FC = () => {
  const [openAddTodo, setOpenAddTodo] = useState<boolean>(false);

  return (
    <Container maxWidth='md' sx={{ userSelect: 'none', mb: '32px' }}>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' sx={{ mt: '12px' }}>
        <ThemeModeButton />
      </Stack>
      <Box mt='10%' mb='48px'>
        <Title />
      </Box>
      <Stack spacing={4}>
        <Toolbar setOpenAddTodo={setOpenAddTodo} />
        <TodoContainer />
      </Stack>
      <Modal
        open={openAddTodo}
        onClose={() => setOpenAddTodo(false)}
        sx={{ backdropFilter: 'blur(5px)' }}>
        <Container
          maxWidth='md'
          sx={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, 0%)'
          }}>
          <TodoInput close={() => setOpenAddTodo(false)} />
        </Container>
      </Modal>
    </Container>
  );
};

export default App;
