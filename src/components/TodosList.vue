<template>
  <div class="todo-item_wrapper" :class="{ done: todo.done }">
    <p>{{ todo.title }}</p>
    <div class="todo-item_btns">
      <q-btn @click="toggleDoneTodo" color="secondary">&check;</q-btn>
      <q-btn @click="deleteTodo" class="ml-10" color="deep-orange"
        >&cross;</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const { todo } = defineProps({
  todo: Object,
});

const store = useStore();
const emit = defineEmits(["toggleDoneTodo", "deleteTodo"]);

const toggleDoneTodo = () => emit("toggleDoneTodo");
const deleteTodo = () => emit("deleteTodo");
</script>

<style lang="scss">
.todo-item_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  margin-top: 0.5rem;
  padding: 1rem;

  border-radius: 5px;
  background-color: lightgray;

  & p {
    margin: 0;
    padding: 0;
  }
}

.done {
  background-color: lightgreen;

  & p {
    color: green;
    text-decoration: line-through;
  }
}
</style>
