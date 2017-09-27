const state = {
  categories: [
    {id: 1, name: 'Продукты питания', active: false },
    {id: 2, name: 'Бытовая техника и электроника', active: false },
    {id: 3, name: 'Косметика краста и здоровье', active: false },
    {id: 4, name: 'Доставка еды', active: false },
    {id: 5, name: 'Кафе, бары, рестораны', active: false },
    {id: 6, name: 'Автомобили, автотовары, топливо и услуги', active: false },
    {id: 7, name: 'Одежда, обувь и аксессуары', active: false },
    {id: 8, name: 'Подарки', active: false },
    {id: 9, name: 'Товары, услуги для дома и ремонта', active: false },
    {id: 10, name: 'Недвижимость', active: false },
    {id: 11, name: 'Фитнес-клубы и спортивные товары', active: false },
    {id: 12, name: 'Товары для детей', active: false },
    {id: 13, name: 'Финансы', active: false },
    {id: 14, name: 'Кино, театры, развлечения', active: false },
    {id: 15, name: 'Интернет, TV и IT-услуги', active: false },
    {id: 16, name: 'Образование и развитие, книги', active: false },
    {id: 17, name: 'Билеты, путешествия и отдых', active: false },
    {id: 18, name: 'Охота и рыбалка', active: false },
  ],
};
const getters = {
  getCategories(state) {
    return state.categories;
  }
};

const mutations = {
  activate(state, catalog) {
    catalog.active = !catalog.active
  },
};

const actions = {
  activateCategory ({commit}, catalog) {
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
