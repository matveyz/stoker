import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import colorPick from './modules/company/colorPick'
import citiesStreetsSearch from './modules/company/cities-streets-search'
import socialIcons from './modules/social-icons/social-icons'
import partnerCatalogs from './modules/catalogs/partner-catalogs'
import catalogCreateInstruction from './modules/catalog-create/catalog-create-instruction'
import categories from './modules/categories/categories'
import stores from './modules/stores/stores'
import products from './modules/products/products'
import myListItems from './modules/my-lists/my-lists'
/*import cart from './modules/cart'
import products from './modules/products'*/

Vue.use(Vuex);

/*
const debug = process.env.NODE_ENV !== 'production'
*/

export default new Vuex.Store({
  actions: {

  },
  getters: {

  },
  modules: {
    colorPick,
    socialIcons,
    citiesStreetsSearch,
    partnerCatalogs,
    catalogCreateInstruction,
    categories,
    stores,
    products,
    myListItems
  },
/*  strict: debug,
  plugins: debug ? [createLogger()] : []*/
})
