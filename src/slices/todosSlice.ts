import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import Todo from '../model/Todo';
import { RootState } from '../rootReducer';

const adapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id
});

const slice = createSlice({
  name: 'todos',
  initialState: adapter.getInitialState(),
  reducers: {
    todosAddOne: adapter.addOne,
    todosUpdateOne: adapter.updateOne,
    todosRemoveOne: adapter.removeOne
  }
});

export const { todosAddOne, todosUpdateOne, todosRemoveOne } = slice.actions;
export const { selectById: selectTodoById, selectAll: selectAllTodos } = adapter.getSelectors(
  (state: RootState) => state.todos
);
export default slice.reducer;
