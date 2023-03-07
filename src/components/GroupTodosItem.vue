<template>
  <div class="mt-16">
    <q-btn
      color="grey"
      square
      flat
      dense
      :icon="showGroup ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      @click="toggleShowGroup"
      >{{ showGroup ? "Скрыть" : "Показать" }} {{ group.title }}</q-btn
    >
    <q-slide-transition>
      <div class="bckg-primary flex flex-center" v-show="showGroup">
        <div class="group-todo_content">
          <VFormAddTodo
            class="bckg-white"
            :group="group"
            label-input="Новая задача"
            label-button="Создать задачу"
            placeholder-input="Введите название задачи"
          />
          <VTodosList
            v-for="todo in group.childrens"
            :key="todo"
            :todo="todo"
            @toggleDoneTodo="toggleDoneTodo({ group, todo })"
            @deleteTodo="deleteTodo({ group, todo })"
          />
        </div>
      </div>
    </q-slide-transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import VFormAddTodo from "./VFormAddTodo.vue";
import VTodosList from "../components/TodosList.vue";

const { group } = defineProps({
  group: {
    type: Object,
    default: () => ({}),
  },
});

const store = useStore();
const showGroup = ref(true);

const toggleShowGroup = () => {
  showGroup.value = !showGroup.value;
};

const toggleDoneTodo = ({ group, todo }) =>
  store.commit("todo/toggleDoneTodo", { group, todo });

const deleteTodo = ({ group, todo }) =>
  store.commit("todo/deleteTodo", { group, todo });
</script>

<style>
.mt-16 {
  margin-top: 1rem;
}

.group-todo_content {
  width: 100%;
  max-width: 800px;
}
/* .bckg-primary {
  background-color: var(--q-primary);
} */

.bckg-white {
  background-color: #fff;
}
</style>
