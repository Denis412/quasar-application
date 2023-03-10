<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h3">My TodoList</div>
          <div class="text-subtitle">{{ todaysDate }}</div>
        </div>
        <q-img class="header-image absolute-top" src="../assets/logo.png" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 135px);
          margin-top: 135px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Задачи </q-item-section>
          </q-item>

          <q-item to="/todos-completed" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>

            <q-item-section> Выполненные задачи </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Помощь </q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>

            <q-item-section> О сайте </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 135px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/photo.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Malyshev Denis</div>
          <div>@deniska415</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "DD MMM YYYY");
    },
  },
});
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  filter: gray;
  opacity: 0.3;
}
</style>
