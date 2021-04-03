export function SET_USERS(state, payload) {
  state.users.push(payload);
}

export function UPDATE_USERS(state, payload) {
  const index = state.users.findIndex(item => item.id == payload.id);
  if (index != -1) {
    state.users.splice(index, 1, payload);
  }
}

export function SET_USER(state, payload) {
  state.user = state.users.filter(item => item.id == payload);
}

export function CLEAR_USERS(state) {
  state.users = [];
}
