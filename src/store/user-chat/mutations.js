export function SET_MESSAGE(state, payload) {
  state.messages.push(payload);
}

export function CLEAR_MESSAGES(state) {
  state.messages = [];
}
