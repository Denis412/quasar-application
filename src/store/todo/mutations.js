export function addTodoGroup(state, title) {
  state.todoGroupsList.push({
    title,
    childrens: [],
  });
}

export function addTodoItem(state, { group, todo }) {
  const groupTodos = state.todoGroupsList.find(
    (group_item) => group_item.title === group.title
  );

  groupTodos.childrens.push(todo);
}

export function deleteTodo(state, { group, todo }) {
  const groupTodos = state.todoGroupsList.find(
    (group_item) => group_item.title === group.title
  );

  const todoIndex = groupTodos.childrens.findIndex(
    (todo_item) => todo_item.title === todo.title
  );

  if (todoIndex !== -1) groupTodos.childrens.splice(todoIndex, 1);
}

export function toggleDoneTodo(state, { group, todo }) {
  const groupTodos = state.todoGroupsList.find(
    (group_item) => group_item.title === group.title
  );

  const findedTodo = groupTodos.childrens.find(
    (todo_item) => todo_item.title === todo.title
  );
  findedTodo.done = !findedTodo.done;
}
