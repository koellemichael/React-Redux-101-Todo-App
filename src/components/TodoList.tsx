import { Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import Todo from '../model/Todo';
import TodoCard from './TodoCard';

const TodoList: FC<{
  todos: Todo[];
  searchTerm: string;
}> = ({ todos, searchTerm }) => {
  if (!searchTerm && todos.length <= 0) {
    return (
      <Paper variant='outlined' sx={{ padding: '12px', textAlign: 'center' }}>
        <Typography>Nothing todo! Add one above :)</Typography>
      </Paper>
    );
  }

  if (todos.length > 0) {
    return (
      <Stack spacing={2}>
        {todos.map((t) => (
          <TodoCard key={t.timestamp} todo={t} />
        ))}
      </Stack>
    );
  }

  return null;
};

export default TodoList;
