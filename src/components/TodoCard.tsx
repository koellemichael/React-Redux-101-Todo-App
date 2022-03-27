import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  Card,
  CardContent,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch } from '../hooks';
import Todo from '../model/Todo';
import { todosUpdateOne } from '../slices/todosSlice';
import TagList from './TagList';

const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);

  const onDone = () => {
    dispatch(
      todosUpdateOne({
        id: todo.id,
        changes: {
          done: !todo.done
        }
      })
    );
  };

  return (
    <Card>
      <CardContent>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' alignItems='center'>
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={todo.done}
              onClick={() => onDone()}
            />
            <Typography variant='h5' sx={{ textDecoration: todo.done ? 'line-through' : '' }}>
              {todo.title}
            </Typography>
          </Stack>
          {todo.description && (
            <IconButton onClick={() => setExpanded(!expanded)}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )}
        </Stack>
        {todo.description && (
          <Collapse in={expanded}>
            <Typography sx={{ whiteSpace: 'pre-line', m: '0px 42px', mb: '12px' }}>
              {todo.description}
            </Typography>
          </Collapse>
        )}
        <Grid container sx={{ pl: '38px' }} alignItems='center'>
          <Grid item flexGrow={1}>
            <TagList tags={todo.tags} />
          </Grid>
          <Grid item>
            <Typography variant='caption' noWrap sx={{ pr: '12px', opacity: '0.25' }}>
              {new Date(todo.timestamp).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
