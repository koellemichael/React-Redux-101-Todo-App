import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, IconButton, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Todo from '../model/Todo';
import TodoCard from './TodoCard';

const ArchivedTodoList: FC<{
  todos: Todo[];
}> = ({ todos }) => {
  const [showArchived, setShowArchived] = useState(false);

  if (todos.length > 0) {
    return (
      <Box>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          onClick={() => setShowArchived(!showArchived)}>
          <Typography>Archived</Typography>
          <IconButton>{showArchived ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
        </Stack>
        <Collapse in={showArchived}>
          <Stack spacing={2}>
            {todos.map((t) => (
              <TodoCard key={t.timestamp} todo={t} />
            ))}
          </Stack>
        </Collapse>
      </Box>
    );
  }

  return null;
};

export default ArchivedTodoList;
