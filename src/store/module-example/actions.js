import firebaseDb from "src/boot/firebase";
import firebaseAuth from "src/boot/firebase";

export function registerUser({ commit }, form) {
  firebaseAuth.firebaseAuth
    .createUserWithEmailAndPassword(form.email, form.password)
    .then(response => {
      let userId = firebaseAuth.firebaseAuth.currentUser.uid;
      firebaseDb.firebaseDb.ref("users/" + userId).set({
        email: form.email,
        name: form.name,
        online: true
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export function loginUser({ commit }, form) {
  firebaseAuth.firebaseAuth.signInWithEmailAndPassword(
    form.email,
    form.password
  );
}

export function logoutUser() {
  firebaseAuth.firebaseAuth.signOut();
}

export function handleAuthStateChange({ commit, dispatch, getters }) {
  firebaseAuth.firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      const id = firebaseAuth.firebaseAuth.currentUser.uid;
      firebaseDb.firebaseDb.ref("users/" + id).once("value", snapshot => {
        const userDetails = snapshot.val();
        commit("SET_USER", { id: id, ...userDetails });
      });
      dispatch("dbUpdateUser", {
        id: id,
        updates: { online: true }
      });
      dispatch("users/fetchUsers", {}, { root: true });
      this.$router.push("/users");
    } else {
      dispatch("dbUpdateUser", {
        id: getters["getUserId"],
        updates: { online: false }
      });
      commit("CLEAR_USER");
      dispatch("users/removeUsers", {}, { root: true });
      this.$router.push("/auth");
    }
  });
}

export function dbUpdateUser({ commit }, context) {
  firebaseDb.firebaseDb.ref(`users/${context.id}`).update(context.updates);
}
