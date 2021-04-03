<template>
  <q-page ref="pageChat" class="flex column">
    <q-banner
      v-for="user in getDynamicUser"
      :key="user.id"
      class="text-grey-4 bg-red-8 text-center"
    >
      {{ user.name }} is
      {{ user.online ? "online" : "offline" }}
    </q-banner>
    <div
      :class="{ invisible: !showMessage }"
      class="q-pa-md column col justify-end"
    >
      <q-chat-message
        v-for="message in getMessages"
        :key="message.id"
        :name="message.from == 'me' ? getUserDetails : getDynamicUser[0].name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit.prevent="onSendMessage" class="full-width">
          <q-input
            bg-color="white"
            dense
            rounded
            outlined
            label="Message..."
            v-model="message"
          >
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: "",
      showMessage: false,
    };
  },
  mounted() {
    this.$store.dispatch("chats/fetchMessages", this.$route.params.id);
    this.$store.dispatch("users/setUser", this.$route.params.id);
  },
  watch: {
    getMessages: function (val) {
      if (Object.keys(val).length) {
        this.navigateToBottom();
        setInterval(() => {
          this.showMessage = true;
        }, 200);
      }
    },
  },
  computed: {
    ...mapGetters("chats", ["getMessages"]),
    ...mapGetters("example", ["getUserDetails"]),
    ...mapGetters("users", ["getDynamicUser"]),
  },
  methods: {
    onSendMessage() {
      let message = {
        id: this.$route.params.id,
        text: this.message,
        from: "me",
      };
      this.$store.dispatch("chats/sendMessage", message);
      this.message = "";
    },
    navigateToBottom() {
      let page = this.$refs.pageChat.$el;
      setTimeout(() => {
        window.scrollTo(0, page.scrollHeight);
      }, 20);
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("chats/clearMessages");
    next();
  },
  destroyed() {
    this.$store.dispatch("chats/clearMessages");
  },
};
</script>
