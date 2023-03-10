<template>
  <form @submit="toggleShowQDate()">
    <div class="flex">
      <q-input
        class="flex-grow-2"
        filled
        v-model="title"
        label="Новая задача"
        placeholder="Введите название задачи"
      />

      <q-btn
        push
        color="primary"
        type="submit"
        label="Создать задачу"
        class="q-ml-sm"
      />
    </div>

    <q-dialog
      v-model="showQDate"
      showQDate
      transition-show="scale"
      transition-hide="scale"
    >
      <div>
        <q-date v-model="expirationDate" :options="optionsFn">
          <q-btn @click="toggleShowQDate">Ok</q-btn>
        </q-date>
      </div>
    </q-dialog>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { date, useQuasar } from "quasar";

const store = useStore();
const $q = useQuasar();
const { group } = defineProps({
  group: Object,
});

const title = ref("");
const expirationDate = ref(date.formatDate(Date.now(), "YYYY/MM/DD"));
const showQDate = ref(false);

const optionsFn = (date) => new Date(date).getTime() > Date.now() - 86_400_000;

const toggleShowQDate = () => {
  showQDate.value = !showQDate.value;

  if (showQDate.value === false) addTodoItem();
};

const addTodoItem = () => {
  if (!title.value.trim()) {
    $q.notify({
      message: "Текст задачи пусть! Вернитесь и проверьте введенные данные!",
      type: "negative",
    });
    return;
  }

  store.commit("todo/addTodoItem", {
    group,
    todo: {
      title: title.value,
      createDate: new Date(),
      completedDate: null,
      expirationDate: expirationDate.value,
      done: false,
    },
  });

  $q.notify({
    message: "Задача добавлена!",
    type: "positive",
  });

  title.value = "";
};
</script>
