<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <app-auth-form :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <div class="text-h6">Register</div>
          <app-auth-form :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import AppAuthForm from "src/components/AppAuthForm.vue";
export default {
  components: {
    AppAuthForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
};
</script>
