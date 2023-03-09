export function groupTodos(state) {
  return state.todoGroupsList;
}

export function completedTodos(state) {
  return state.todoGroupsList.reduce((arr, group) => {
    arr.push(...group.childrens.filter((todo) => todo.done));
    return arr;
  }, []);
}
