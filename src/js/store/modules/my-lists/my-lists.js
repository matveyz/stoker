const state = {
  listItems: [
    {
      list_id: 1, name: "12 сентября 2016", date: "12 сентября 2016", productsAmount: "4", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 2, name: "15 мая 2016", date: "15 мая 2016", productsAmount: "8", price: "352.40", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50}
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 31, name: "20 января 2016", date: "20 января 2016", productsAmount: "2", price: "80.00", active: false,
      stores: [
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 4, name: "3 января 2016", date: "3 января 2016", productsAmount: "18", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 5, name: "31 декабря 2015", date: "31 декабря 2015", productsAmount: "100", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 10, name: "20 сентября 2015", date: "20 сентября 2015", productsAmount: "100", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 21, name: "4 августа 2015", date: "4 августа 2015", productsAmount: "100", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 42, name: "31 июля 2015", date: "31 июля 2015", productsAmount: "100", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    },
    {
      list_id: 17, name: "1 июля 2015", date: "1 июля 2015", productsAmount: "100", price: "102000.10", active: false,
      stores: [
        { store_id: 1, name: 'Novus', link:'#', logo: "img/novus-logo.png", color: "#44d157",
          products: [
            { product_id: 123, name: "Чай Batik", date_end: "2017-12-28", price: 25, count: 2, total: 50},
            { product_id: 13, name: "Вино Pino Noir 2010 года", date_end: "2017-06-20", price: 250, count: 1, total: 250},
          ]
        },
        { store_id: 2, name: 'Велика кишеня', link: false, logo: "img/silpo-logo.png", color: "#ffdd65",
          products: [
            { product_id: 134, name: "La Pizzeria Formaggi Quattro", date_end: "31 сентября 2017", price: 52, count: 4, total: 208},
            { product_id: 133, name: "La Pizzeria Duo", date_end: "31 августа 2017", price: 52, count: 4, total: 208},
          ]
        },
        { store_id: 3, name: 'Сильпо', link:'http://silpo.ua', logo: "img/silpo-logo.png", color: "#ff9b1a",
          products: [
            { product_id: 16, name: "Батон", date_end: "18 марта 2018", price: 16, count: 4, total: 64},
            { product_id: 168, name: "Сыр Philadelfia", date_end: "16 августа 2017", price: 200, count: 4, total: 800},
          ]
        }
      ],
    }
  ],
};
const getters = {
  getListItems(state) {
    return state.listItems;
  },
  getActiveItem: (state) => {
    return state.listItems.find(item => item.active === true)
  }
};

const mutations = {
  activate(state, listItem) {
    listItem.active = !listItem.active
  },
  removeList(state){
    delete state.listItems;
  },
  calculateTotal(state, product){
    product.total = product.count * product.price
  }
};

const actions = {
  activateItem ({commit}, listItem) {
    commit('activate', listItem);
  },
  removeAllList ({commit}) {
    commit('removeList');
  },
  calculateTotal ({commit}, product) {
    commit('calculateTotal', product);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
