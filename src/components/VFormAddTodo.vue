<template>
  <form @submit="toggleShowQDate()">
    <div class="flex flex-justify-between">
      <q-input
        class="flex-grow-2"
        filled
        v-model="title"
        :label="labelInput"
        :placeholder="placeholderInput"
      />
      <q-btn
        push
        color="primary"
        type="submit"
        :label="labelButton"
        class="ml-10"
      />
    </div>

    <q-dialog
      v-model="showQDate"
      showQDate
      transition-show="scale"
      transition-hide="scale"
    >
      <div>
        <q-date v-model="expirationDate">
          <q-btn @click="toggleShowQDate">Ok</q-btn>
        </q-date>
      </div>
    </q-dialog>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { placeholderInput, labelInput, labelButton, group } = defineProps({
  labelInput: String,
  labelButton: String,
  placeholderInput: String,
  group: Object,
});
const title = ref("");
const expirationDate = ref(new Date());

const showQDate = ref(false);

const toggleShowQDate = () => {
  showQDate.value = !showQDate.value;

  if (showQDate.value === false) {
    addElement();
  }
};

const addElement = () => {
  if (!title.value.trim()) return;

  store.commit("todo/addTodoItem", {
    group,
    todo: {
      title: title.value,
      createDate: new Date(),
      expirationDate: expirationDate.value,
      done: false,
    },
  });

  title.value = "";
};
</script>
