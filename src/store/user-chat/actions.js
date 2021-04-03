import firebaseDb from "src/boot/firebase";
import firebaseAuth from "src/boot/firebase";
let messagesRef;
export function fetchMessages({ commit, rootGetters }, id) {
  let user_id = rootGetters["example/getUserId"];
  messagesRef = firebaseDb.firebaseDb.ref(`chats/${user_id}/${id}`);
  messagesRef.on("child_added", snapshot => {
    commit("SET_MESSAGE", { id: snapshot.key, ...snapshot.val() });
  });
}

export function sendMessage({ commit, rootGetters }, payload) {
  let user_id = rootGetters["example/getUserId"];
  let user_details = rootGetters["example/getUserDetails"];
  firebaseDb.firebaseDb.ref(`chats/${user_id}/${payload.id}`).push({
    from: payload.from,
    text: payload.text
  });
  firebaseDb.firebaseDb.ref(`chats/${payload.id}/${user_id}`).push({
    from: user_details,
    text: payload.text
  });
}

export function clearMessages({ commit }) {
  if (messagesRef) {
    messagesRef.off("child_added");
    commit("CLEAR_MESSAGES");
  }
}
