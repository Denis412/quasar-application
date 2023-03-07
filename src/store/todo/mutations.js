/* Helper functions */
const findGroup = (groupsList, group) => {
  return groupsList.find((group_item) => group_item.title === group.title);
};

/* Mutations */
export function addTodoGroup(state, title) {
  state.todoGroupsList.push({
    title,
    childrens: [],
  });
}

export function addTodoItem(state, { group, todo }) {
  const groupTodos = findGroup(state.todoGroupsList, group);

  groupTodos.childrens.push(todo);
}

export function deleteTodo(state, { group, todo }) {
  const groupTodos = findGroup(state.todoGroupsList, group);

  const todoIndex = groupTodos.childrens.findIndex(
    (todo_item) => todo_item.title === todo.title
  );

  if (todoIndex !== -1) groupTodos.childrens.splice(todoIndex, 1);
}

export function toggleDoneTodo(state, { group, todo }) {
  const groupTodos = findGroup(state.todoGroupsList, group);

  const findedTodo = groupTodos.childrens.find(
    (todo_item) => todo_item.title === todo.title
  );
  findedTodo.done = !findedTodo.done;
}
