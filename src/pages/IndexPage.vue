<template>
  <q-page class="flex main_wrapper">
    <div class="q-pa-md main_wrapper">
      <VFormInputBtn
        type="group"
        label-input="Новая группа"
        label-button="Создать группу"
        placeholder-input="Введите название группы"
      />
      <div class="flex flex-center">
        <div class="group-todos_wrapper">
          <VGroupTodosItem
            v-for="group in groups"
            :key="group.title"
            :group="group"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import VFormInputBtn from "../components/VFormInputBtn.vue";
import VGroupTodosItem from "../components/GroupTodosItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const groups = computed(() => store.getters["todo/groupTodos"]);
</script>

<style>
.main_wrapper {
  width: 100%;
}

.group-todos_wrapper {
  width: 100%;
}
</style>
