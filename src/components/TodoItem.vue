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
import { useQuasar } from "quasar";
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { useTimer } from "../use/useTimer";

const store = useStore();
const $q = useQuasar();
const { todo, group } = defineProps({
  group: Object,
  todo: Object,
});

const expirationTodoTime = ref(new Date(todo.expirationDate).getTime());

const { progress, startTimer, stopTimer } = useTimer(
  todo.createDate.getTime(),
  expirationTodoTime.value
);

const toggleDoneTodo = () => {
  store.commit("todo/toggleDoneTodo", { group, todo });

  todo.done ? stopTimer() : startTimer();
};

const deleteTodo = () => {
  $q.dialog({
    title: "Подтвердите действие",
    message: "Вы действительно хотите удалить задачу?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    store.commit("todo/deleteTodo", { group, todo });

    $q.notify({
      message: "Задача удалена!",
      type: "positive",
    });
  });
};

onMounted(() => startTimer());
onUnmounted(() => stopTimer());
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
