import { createStore } from 'vuex';
import getters from './getters';

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters,
});
