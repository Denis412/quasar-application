<template>
  <q-page class="flex column q-pa-md">
    <div class="text-h4">Выполненные задачи</div>
    <q-list class="flex column">
      <CompleteTodo
        v-for="todo in completedTodos"
        :key="todo.createdDate"
        :todo="todo"
      >
      </CompleteTodo>
    </q-list>
  </q-page>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import CompleteTodo from "src/components/CompleteTodo.vue";

const store = useStore();

const completedTodos = computed(() => store.getters["todo/completedTodos"]);
</script>
