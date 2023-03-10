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
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const $q = useQuasar();
const title = ref("");

const addTodoGroup = () => {
  if (!title.value.trim()) {
    $q.notify({
      message: "Вы не ввели данные для создания новой группы!",
      type: "negative",
    });
    return;
  }

  store.commit("todo/addTodoGroup", title.value);

  $q.notify({
    message: "Группа успешно добавлена!",
    type: "positive",
  });

  title.value = "";
};
</script>

<style>
.flex-grow-2 {
  flex-grow: 2;
}
</style>
