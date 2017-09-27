const state = {
  citiesList: {
    show: null,
    items: [
      {'id': 1, 'name': 'Ивано-Франковск'},
      {'id': 2, 'name': 'Киев'},
      {'id': 3, 'name': 'Чернигов'},
      {'id': 4, 'name': 'Днепродзержинск'},
      {'id': 5, 'name': 'Кривой Рог'},
      {'id': 6, 'name': 'Николаев'},
      {'id': 7, 'name': 'Мукачево'},
      {'id': 8, 'name': 'Никополь'},
      {'id': 9, 'name': 'Белая Церковь'},
      {'id': 10, 'name': 'Ровно'},
      {'id': 11, 'name': 'Кременчуг'},
      {'id': 12, 'name': 'Светловодск'}
    ],
  },
  streetsList: {
    show: null,
    items: [
      {'id': 1, 'city': 2, 'name': 'улица 1 в Киев'},
      {'id': 2, 'city': 1, 'name': 'улица 1 в Ивано-Франковск'},
      {'id': 3, 'city': 2, 'name': 'улица 2 в Киев'},
      {'id': 4, 'city': 3, 'name': 'улица 1 в Чернигов'},
      {'id': 5, 'city': 4, 'name': 'улица 1 в Днепродзержинск'},
      {'id': 6, 'city': 5, 'name': 'улица 1 в Кривой Рог'},
      {'id': 7, 'city': 5, 'name': 'улица 2 в Кривой Рог'},
      {'id': 8, 'city': 6, 'name': 'улица 1 в Николаев'},
      {'id': 9, 'city': 6, 'name': 'улица 2 в Николаев'},
      {'id': 10, 'city': 7, 'name': 'улица 1 в Мукачево'},
      {'id': 11, 'city': 8, 'name': 'улица 1 в Никополь'},
      {'id': 12, 'city': 9, 'name': 'улица 1 в Белая Церковь'},
      {'id': 13, 'city': 10, 'name': 'улица 1 в Ровно'},
      {'id': 14, 'city': 11, 'name': 'улица 1 в Кременчуг'},
      {'id': 15, 'city': 11, 'name': 'улица 2 в Кременчуг'},
      {'id': 16, 'city': 12, 'name': 'улица 1 в Светловодск'},
    ],
    filteredItems: []
  },
  delete: false,
  deleteCitiesStreets: {}
};

const getters = {
  citiesList(state) {
    return state.citiesList;
  },
  streetsList(state) {
    return state.streetsList;
  },
  delete(state) {
    return state.delete;
  },
  deleteCitiesStreets(state) {
    return state.deleteCitiesStreets;
  }
};

const mutations = {
  updateValue (state, arr) {
    let list = arr[0];
    let showingItems = arr[1];
    state[list].show = showingItems;
    if (list == "citiesList") mutations.filterStreetsByCities(state, list);
  },
  filterStreetsByCities(state, list) {
    let showingItemsIds = [];
    for (let i = 0; i < state[list].show.length; ++i) {
      showingItemsIds[i] = state[list].show[i].id
    }
    state.streetsList.filteredItems = state.streetsList.items.filter(function (item) {
      return showingItemsIds.indexOf(item.city) !== -1;
    })
  },
  confirmDelete (state) {
    state.delete = true;
  }
};

const actions = {
  updateValueAction ({commit}, arr) {
    commit('updateValue', arr)
  },
  filterStreetsByCities({commit}) {
    commit('filterStreetsByCities');
  },
  confirmDelete ({commit}) {
    commit('confirmDelete');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}