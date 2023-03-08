export function addTodoGroup(state, title) {
  state.todoGroupsList.push({
    title,
    childrens: [],
  });
}

export function addTodoItem(_, { group, todo }) {
  group.childrens.push(todo);
}

export function deleteTodo(_, { group, todo }) {
  const todoIndex = group.childrens.findIndex(
    (todo_item) => todo_item.title === todo.title
  );

  if (todoIndex !== -1) group.childrens.splice(todoIndex, 1);
}

export function toggleDoneTodo(_, { group, todo }) {
  const findedTodo = group.childrens.find(
    (todo_item) => todo_item.title === todo.title
  );
  findedTodo.done = !findedTodo.done;
}
