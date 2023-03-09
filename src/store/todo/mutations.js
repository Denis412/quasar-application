import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import uuid4 from "uuid4";
import { db } from "src/firebase";

function getCollectionDoc() {
  return collection(db, "groupsTodos");
}

function getDocument(id) {
  return doc(getCollectionDoc(), id);
}

export function UPDATE_GROUPS_TODOS(state, groups) {
  state.todoGroupsList = groups;
}

export function addTodoGroup(_, title) {
  addDoc(getCollectionDoc(), {
    title: title,
    childrens: [],
  });
}

export function addTodoItem(_, { group, todo }) {
  group.childrens.push(todo);
  // group.childrens = [todo, ...group.childrens];
  console.log("group", group.childrens);
  updateDoc(getDocument(group.id), {
    childrens: group.childrens,
  });
}

export function deleteTodo(_, { group, todo }) {
  group.childrens = group.childrens.filter(
    (todo_item) => todo_item.createDate !== todo.createDate
  );
  console.log(getDocument(group.id).data());
  console.log("groupDel", group.childrens);
  updateDoc(getDocument(group.id), {
    childrens: group.childrens,
  });
}

export function toggleDoneTodo(_, { group, todo }) {
  const findedTodo = group.childrens.find(
    (todo_item) => todo_item.createDate === todo.createDate
  );
  findedTodo.done = !findedTodo.done;
  findedTodo.completedDate = findedTodo.done ? Date.now() : 0;
  updateDoc(getDocument(group.id), {
    childrens: group.childrens,
  });
  // const findedTodo = group.childrens.find(
  //   (todo_item) => todo_item.createDate === todo.createDate
  // );
  // findedTodo.done = !findedTodo.done;
}
