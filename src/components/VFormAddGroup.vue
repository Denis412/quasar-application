<template>
  <form @submit="addTodoGroup">
    <div class="flex">
      <q-input
        class="flex-grow-2"
        filled
        v-model="title"
        label="Новая группа"
        placeholder="Введите название группы"
      />

      <q-btn
        push
        color="primary"
        type="submit"
        label="Создать группу"
        class="q-ml-md"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const title = ref("");

const addTodoGroup = () => {
  if (!title.value.trim()) return;

  store.commit("todo/addTodoGroup", title.value);

  title.value = "";
};
</script>

<style>
.flex-grow-2 {
  flex-grow: 2;
}
</style>
