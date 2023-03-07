<template>
  <div class="q-mt-md">
    <q-btn
      color="grey"
      square
      flat
      dense
      :icon="showGroup ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      @click="toggleShowGroup"
    >
      {{ showGroup ? "Скрыть" : "Показать" }} {{ group.title }}
    </q-btn>

    <q-slide-transition>
      <div class="flex flex-center" v-show="showGroup">
        <div class="wp-100 group-todo_content">
          <VFormAddTodo :group="group" />
          <q-list>
            <VTodoItem
              v-for="todo in group.childrens"
              :key="todo"
              :todo="todo"
              :group="group"
            />
          </q-list>
        </div>
      </div>
    </q-slide-transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VFormAddTodo from "./VFormAddTodo.vue";
import VTodoItem from "../components/TodoItem.vue";

const { group } = defineProps({
  group: {
    type: Object,
    default: () => ({}),
  },
});

const showGroup = ref(true);

const toggleShowGroup = () => {
  showGroup.value = !showGroup.value;
};
</script>

<style>
.group-todo_content {
  max-width: 800px;
}
</style>
