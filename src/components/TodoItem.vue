<template>
  <q-item>
    <q-linear-progress
      size="1rem"
      :value="progress"
      color="green"
      class="flex justify-between items-center todo-item_wrapper"
      :class="{ done: todo.done }"
    >
      <div
        class="absolute flex items-center justify-between"
        style="right: 1rem; left: 1rem; color: black"
      >
        <p>{{ todo.title }}</p>
        <p>Выполнить до {{ new Date(expirationTodoTime).toLocaleString() }}</p>
        <div>
          <q-btn @click="toggleDoneTodo" color="secondary" round icon="done" />
          <q-btn
            v-if="todo.done"
            @click="deleteTodo"
            class="q-ml-sm"
            color="deep-orange"
            round
            icon="delete"
          />
        </div>
      </div>
    </q-linear-progress>
  </q-item>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { todo, group } = defineProps({
  group: Object,
  todo: Object,
});

const progress = ref(0);
const expirationTodoTime = ref(
  new Date(todo.expirationDate).getTime() + 86_399_000
);

let timerId = 0;

const toggleDoneTodo = () =>
  store.commit("todo/toggleDoneTodo", { group, todo });

const deleteTodo = () => store.commit("todo/deleteTodo", { group, todo });

onMounted(() => {
  if (Date.now() >= expirationTodoTime.value) {
    progress.value = 1;
    return;
  }

  timerId = setInterval(() => {
    const currentTime = Date.now();
    const createTodoTime = todo.createDate.getTime();

    progress.value =
      (currentTime - createTodoTime) /
      (expirationTodoTime.value - createTodoTime);
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
