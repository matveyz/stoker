const state = {
  catalogs: [
    {'id': 1, 'active': true, 'img': 'catalog-small-1.png', 'date': '05.04.17', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 2, 'active': true, 'img': 'catalog-small-1.png', 'date': '02.05.17', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 3, 'active': true, 'img': 'catalog-small-1.png', 'date': '16.01.17', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 4, 'active': true, 'img': 'catalog-small-1.png', 'date': '27.06.17', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 5, 'active': false, 'img': 'catalog-small-1.png', 'date': '22.10.16', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 6, 'active': true, 'img': 'catalog-small-1.png', 'date': '03.12.16', 'favorites':500, 'views': 100, 'external_views': 300},
    {'id': 7, 'active': false, 'img': 'catalog-small-1.png', 'date': '18.04.17', 'favorites':500, 'views': 100, 'external_views': 300},
  ]
};

const getters = {
  catalogs(state) {
    return state.catalogs;
  }
};

const mutations = {
  activate(state, catalog) {
    catalog.active = !catalog.active
  },
};

const actions = {
  activateCatalog ({commit}, catalog) {
    commit('activate', catalog);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}