export function groupTodos(state) {
  return state.todoGroupsList;
}

export function COLLECTION_REF(state) {
  return state.collectionRef;
}

export function completedTodos(state) {
  return state.todoGroupsList.reduce((arr, group) => {
    arr.push(...group.childrens.filter((todo) => todo.done));
    return arr;
  }, []);
}
