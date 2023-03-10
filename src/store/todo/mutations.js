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
    (todo_item) => todo_item.createDate === todo.createDate
  );

  if (todoIndex !== -1) group.childrens.splice(todoIndex, 1);
}

export function deleteGroup(state, group) {
  state.todoGroupsList = state.todoGroupsList.filter(
    (group_item) => group_item.title !== group.title
  );
}

export function toggleDoneTodo(_, { group, todo }) {
  const findedTodo = group.childrens.find(
    (todo_item) => todo_item.createDate === todo.createDate
  );
  findedTodo.done = !findedTodo.done;

  findedTodo.completedDate = findedTodo.done ? Date.now() : 0;
}
