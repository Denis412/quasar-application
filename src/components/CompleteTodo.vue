<template>
  <q-item
    class="column bg-primary rounded-borders q-mt-md"
    style="max-width: 800px"
  >
    <q-item-section class="flex-center text-h5"
      >Задача выполнена!</q-item-section
    >
    <q-item-section>
      <div class="flex">
        <div class="flex flex-center text-h6">{{ todo.title }}</div>
        <div class="flex flex-grow-2 column items-end">
          <p>
            Задача создана: {{ new Date(todo.createDate).toLocaleString() }}
          </p>
          <p>
            Задача выполнена:
            {{ new Date(todo.completedDate).toLocaleString() }}
          </p>
          <p>
            Задача истекает:
            {{ new Date(todo.expirationDate).toLocaleString() }}
          </p>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
const { todo } = defineProps({
  todo: Object,
});
</script>

<style></style>
