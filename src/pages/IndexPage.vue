<template>
  <q-page class="flex">
    <div class="q-pa-md wp-100">
      <VFormAddGroup />
      <div class="flex flex-center">
        <q-list class="wp-100">
          <VGroupTodosItem
            v-for="group in groups"
            :key="group.title"
            :group="group"
          />
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import VFormAddGroup from "../components/VFormAddGroup.vue";
import VGroupTodosItem from "../components/GroupTodosItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const groups = computed(() => store.getters["todo/groupTodos"]);
</script>

<style>
.wp-100 {
  width: 100%;
}
</style>
