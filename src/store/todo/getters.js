export function groupTodos(state) {
  return state.todoGroupsList;
}

export function completedTodos(state) {
  return state.todoGroupsList.childrens.fitler((todo) => todo.done);
}
