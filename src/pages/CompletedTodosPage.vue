<template>
  <q-page class="flex">{{ completedTodos }}</q-page>
</template>

<script setup>
import { computed } from "vue";

const store = useStore();

const completedTodos = computed(() => store.getters["todo/completedTodos"]);
</script>

<style></style>
