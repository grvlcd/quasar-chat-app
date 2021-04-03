<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chats')"
          v-go-back.single
          flat
          dense
          icon="arrow_back"
          label="Back" />
        <q-toolbar-title
          v-for="user in getDynamicUser"
          :key="user.id"
          class="absolute-center"
        >
          {{ $route.params.id ? user.name : $route.name }}
        </q-toolbar-title>
        <q-btn
          v-if="!getUser"
          to="/auth"
          class="absolute-right q-pr-sm"
          no-caps
          flat
          dense
          icon="account_circle"
          label="Login" />
        <q-btn
          v-else
          @click="onLogoutUser"
          class="absolute-right q-pr-sm"
          no-caps
          flat
          dense
          icon="logout"
          label="Logout"
      /></q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MainLayout",
  computed: {
    ...mapGetters("users", ["getDynamicUser"]),
    ...mapGetters("example", ["getUser"]),
  },
  methods: {
    onLogoutUser() {
      this.$store.dispatch("example/logoutUser");
    },
  },
};
</script>
