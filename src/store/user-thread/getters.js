export function getUsers(state, getters, rootState, rootGetters) {
  if (rootGetters["example/getUserId"]) {
    const users = state.users.filter(
      user => user.id !== rootGetters["example/getUserId"]
    );
    return users;
  }
}

export function getDynamicUser(state) {
  return state.user;
}
