const state = {
  icons: [
    "fb","vk","gplus"
  ]
};

const getters = {
  icons(state) {
    return state.icons;
  }
};

const actions = {

};

const mutations = {
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}