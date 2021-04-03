import firebaseDb from "src/boot/firebase";

export function fetchUsers({ commit }) {
  firebaseDb.firebaseDb.ref("users").on("child_added", snapshot => {
    commit("SET_USERS", { id: snapshot.key, ...snapshot.val() });
  });
  firebaseDb.firebaseDb.ref("users").on("child_changed", snapshot => {
    commit("UPDATE_USERS", { id: snapshot.key, ...snapshot.val() });
  });
}

export function setUser({ commit }, payload) {
  commit("SET_USER", payload);
}

export function removeUsers({ commit }) {
  commit("CLEAR_USERS");
}
