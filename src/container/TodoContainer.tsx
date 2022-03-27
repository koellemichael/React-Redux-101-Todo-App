import SearchIcon from '@mui/icons-material/Search';
import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ArchivedTodoList from '../components/ArchivedTodoList';
import TodoList from '../components/TodoList';
import { selectSearch } from '../slices/searchSlice';
import { selectAllTodos } from '../slices/todosSlice';

const TodoContainer: FC = () => {
  const todos = useSelector(selectAllTodos);
  const { searchTerm } = useSelector(selectSearch);
  const filteredTodos = searchTerm
    ? todos.filter(
        (t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : todos;

  const activeTodos = filteredTodos.filter((t) => !t.done);
  const archivedTodos = filteredTodos.filter((t) => t.done);

  if (searchTerm && filteredTodos.length <= 0) {
    return (
      <Paper variant='outlined' sx={{ padding: '16px', textAlign: 'center' }}>
        <SearchIcon />
        <Typography>{`No results for "${searchTerm}"`}</Typography>
      </Paper>
    );
  }

  return (
    <>
      <TodoList todos={activeTodos} searchTerm={searchTerm} />
      <ArchivedTodoList todos={archivedTodos} />
    </>
  );
};

export default TodoContainer;
