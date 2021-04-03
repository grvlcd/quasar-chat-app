<template>
  <q-page class="flex">
    <q-form class="full-width" @submit.prevent="onSubmit">
      <q-input
        v-if="tab == 'register'"
        type="text"
        v-model="form.name"
        label="Name"
        class="q-my-md"
        outlined
      ></q-input>
      <q-input
        type="email"
        v-model="form.email"
        label="Email"
        class="q-my-md"
        outlined
      ></q-input>
      <q-input
        type="password"
        v-model="form.password"
        label="Password"
        class="q-my-md"
        outlined
      ></q-input>
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    tab: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("example", ["registerUser"]),
    onSubmit() {
      if (this.tab == "login") {
        this.$store.dispatch("example/loginUser", this.form);
      } else {
        this.$store.dispatch("example/registerUser", this.form);
      }
    },
  },
};
</script>