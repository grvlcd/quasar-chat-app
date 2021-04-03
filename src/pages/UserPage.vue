<template>
  <q-page class="flex q-pa-md">
    <q-list separator class="full-width">
      <q-item
        :to="'/chats/' + user.id"
        v-for="user in getUsers"
        :key="user.id"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name | getFirstLetter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge
            class="q-pa-sm"
            rounded
            :color="user.online ? 'green' : 'red'"
          >
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  filters: {
    getFirstLetter: (name) => {
      return name.charAt(0);
    },
  },
  computed: {
    ...mapGetters("users", ["getUsers"]),
  },
};
</script>
