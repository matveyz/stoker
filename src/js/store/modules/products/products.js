const state = {
  products: [
    {id: 123, name: "Чай Batik", price: "25", date_end: "2017-12-28", store_id: 1 },
    {id: 13, name: "Вино Pino Noir 2010 года", price: "250", date_end: "2017-06-20", store_id: 1 },
    {id: 134, name: "La Pizzeria Formaggi Quattro", price: "52", date_end: "31 сентября 2017", store_id: 2 },
    {id: 133, name: "La Pizzeria Duo", price: "152", date_end: "31 августа 2017", store_id: 2 },
    {id: 16, name: "Батон", price: "15", date_end: "18 марта 2018", store_id: 3 },
    {id: 168, name: "Сыр Philadelfia", price: "200", date_end: "16 августа 2017", store_id: 3 }
  ],
};
const getters = {
  getAllProducts: state => {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id === id)
  }
};

const mutations = {
  activate(state, product) {
    product.active = !product.active
  },
};

const actions = {
  activateProduct ({commit}, product) {
    commit('activate', product);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
