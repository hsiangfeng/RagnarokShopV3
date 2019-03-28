export default {
  strict: true,
  namespace: true,
  state: {
    messages: [],
  },
  mutations: {
    UPDATAMESSAGES(state, payload) {
      state.messages.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp,
      });
    },
    REMOVEMESSAGES(state, payload) {
      state.messages.splice(payload, 1);
    },
    REMOVEMESSAGESWITEHTIMING(state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    },
  },
  actions: {
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATAMESSAGES', { timestamp, message, status });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessages(context, num) {
      context.commit('REMOVEMESSAGES', num);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGESWITEHTIMING', timestamp);
      }, 5000);
    },
  },
  getters: {
    messages(state) {
      return state.messages;
    },
  },
};
