<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("example/handleAuthStateChange");
  },
};
</script>
