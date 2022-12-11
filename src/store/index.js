import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/utils/formatDate';
import localeData from '@/utils/localeData';

import { fetchData } from '@/services/data';

Vue.use(Vuex);

function serializeData(dataArray) {
  return dataArray.map((item) => ({
    ...item,
    type: localeData(item.type.toLowerCase()),
    creationDate: formatDate(item.creationDate),
  }));
}
const store = new Vuex.Store({
  state: () => ({
    data: [],
  }),
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    deleteItem(state, id) {
      state.data = state.data.filter((item) => item.id !== id);
    },
  },
  actions: {
    async getData({ commit }) {
      const data = await fetchData();
      const serializedData = serializeData(data);
      commit('setData', serializedData);
      console.log(serializedData);
    },
  },
});

export default store;
