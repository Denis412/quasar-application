<template>
  <form @submit="addElement">
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
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { placeholderInput, labelInput, labelButton, type, group } = defineProps({
  labelInput: String,
  labelButton: String,
  placeholderInput: String,
  type: String,
  group: Object,
});
const title = ref("");

const addElement = () => {
  if (!title.value.trim()) return;

  type === "group"
    ? store.commit("todo/addTodoGroup", title.value)
    : store.commit("todo/addTodoItem", {
        group,
        todo: {
          title: title.value,
          date: Date.now(),
          done: false,
        },
      });

  title.value = "";
};
</script>

<style>
.flex-grow-2 {
  flex-grow: 2;
}

.ml-10 {
  margin-left: 10px;
}

.flex-justify-between {
  justify-content: space-between;
}
</style>
