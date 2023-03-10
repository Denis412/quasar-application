<template>
  <div class="q-mt-md">
    <header class="flex justify-between">
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

      <q-btn color="red" square flat @click="deleteGroup"
        >Удалить {{ group.title }}</q-btn
      >
    </header>

    <q-slide-transition>
      <div class="flex flex-center" v-show="showGroup">
        <div class="wp-100 group-todo_content">
          <VFormAddTodo :group="group" />
          <q-list>
            <transition-group name="slide">
              <VTodoItem
                v-for="todo in group.childrens"
                :key="todo"
                :todo="todo"
                :group="group"
              />
            </transition-group>
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
import { useStore } from "vuex";

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

const deleteGroup = () => {
  store.commit("todo/deleteGroup", group);
};
</script>

<style>
.group-todo_content {
  max-width: 800px;
}
</style>
