const state = {
  instructions: [
    {
      'id': 1,
      'desc': 'Все скидки на товары / услуги в каталоге должны действовать в одинаковый период времени. Если временные периоды несовпадают, создайте несколько отдельных каталогов.'
    },
    {'id': 2, 'desc': 'Описание должно соответствовать изображению в рекламном блоке.'},
    {
      'id': 3,
      'desc': 'Для того, чтобы добавить описание рекламному блоку, выделите область и введите соответсвенные данные...'
    },
    {'id': 4, 'desc': 'Описание должно соответствовать изображению в рекламном блоке.'},
    {
      'id': 5,
      'desc': 'Для того, чтобы добавить описание рекламному блоку, выделите область и введите соответсвенные данные...'
    },
  ],
  steps: [
    {'id': 1, 'component': 'instruction', 'name': 'Инструкция', 'active': true},
    {'id': 2, 'component': 'main-data', 'name': 'Основные данные', 'active': false},
    /*{'id': 3, 'component': 'catalog-editing', 'name': 'Редактирование каталога', 'active': false},*/
    {'id': 3, 'component': 'view-and-publish', 'name': 'Просмотр и публикация', 'active': false},
  ],
  currentStep: 1,
};

let resetStep = (state) => state.steps.forEach(step => step.active = false);

const getters = {
  instructions(state) {
    return state.instructions;
  },
  steps(state) {
    return state.steps;
  },
  currentStep(state) {
    return state.steps[state.currentStep - 1];
  },
  nextStep(state) {
    return (state.currentStep >= state.steps.length) ? state.steps[state.steps.length - 1] : state.steps[state.currentStep];
  },
  prevStep(state) {
    return (state.currentStep <= 1) ? state.steps[0] : state.steps[state.currentStep - 2];
  }
};

const mutations = {
  changeStep (state, step) {
    resetStep(state);
    state.currentStep = step.id;
    step.active = !step.active;
  },
  prevStep (state) {
    resetStep(state);
    state.currentStep--;
    state.steps[state.currentStep - 1].active = !state.steps[state.currentStep - 1].active;
  },
  nextStep (state) {
    resetStep(state);
    state.currentStep++;
    state.steps[state.currentStep - 1].active = !state.steps[state.currentStep - 1].active;
  }
};

const actions = {
  changeStep ({commit}, step) {
    return new Promise((resolve, reject) => {
      commit('changeStep', step);
      resolve(step.component);
    })
  },
  prevStep ({commit}) {
    commit('prevStep');
  },
  nextStep ({commit}) {
    commit('nextStep');
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}