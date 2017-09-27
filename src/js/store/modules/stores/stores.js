const state = {
  stores: [
    {id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157", active: true },
    {id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65", active: true },
    {id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a", active: true },
  ],
};
const getters = {
  getStores(state) {
    return state.stores;
  },
  getStoreById: (state) => (id) => {
    return state.stores.find(store => store.id === id)
  }
};

const mutations = {
  activate(state, store) {
    store.active = !store.active
  },
};

const actions = {
  activateStore ({commit}, store) {
    commit('activate', store);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
