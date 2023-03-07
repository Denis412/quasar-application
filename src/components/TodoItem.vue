<template>
  <div :class="{ done: todo.done }">
    <q-linear-progress
      size="1rem"
      :value="progress"
      color="green"
      class="flex justify-between items-center q-mt-sm q-pa-xl todo-item_wrapper"
    >
      <div
        class="absolute flex items-center justify-between"
        style="right: 1rem; left: 1rem; color: black"
      >
        <p>{{ todo.title }}</p>
        <div>
          <q-btn @click="toggleDoneTodo" color="secondary">&check;</q-btn>
          <q-btn @click="deleteTodo" class="q-ml-sm" color="deep-orange"
            >&cross;</q-btn
          >
        </div>
      </div>
    </q-linear-progress>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { todo, group } = defineProps({
  group: Object,
  todo: Object,
});
let timerId = 0;
const progress = ref(0);

const toggleDoneTodo = () =>
  store.commit("todo/toggleDoneTodo", { group, todo });

const deleteTodo = () => store.commit("todo/deleteTodo", { group, todo });

onMounted(() => {
  if (Date.now() >= new Date(todo.expirationDate).getTime() + 86_400_000) {
    progress.value = 1;
    return;
  }

  timerId = setInterval(() => {
    const currentTime = Date.now();
    const createTodoTime = todo.createDate.getTime();
    const expirationTodoTime = new Date(todo.expirationDate).getTime();

    progress.value =
      (currentTime - createTodoTime) /
      (expirationTodoTime + 86_400_000 - createTodoTime);
  }, 1000);
});

onUnmounted(() => clearInterval(timerId));
</script>

<style lang="scss">
.todo-item_wrapper {
  min-height: 4rem;

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
