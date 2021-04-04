export function getUser(state) {
  return (
    state.user &&
    Object.keys(state.user).length === 0 &&
    state.user.constructor === Object
  );
}

export function getUserDetails(state) {
  return state.user.name;
}

export function getUserId(state) {
  return state.user.id;
}
