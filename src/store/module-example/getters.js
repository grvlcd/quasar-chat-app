export function getUser(state) {
  return state.user != null;
}

export function getUserDetails(state) {
  return state.user.name;
}

export function getUserId(state) {
  return state.user.id;
}
