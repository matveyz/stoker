const state = {
  colors: [
    'f34135',
    'e91d62',
    '3e454b',
    '9b27b0',
    '9b27b5',
    '2095f2',
    '01bbd4',
    '019587',
    '4baf4f',
    '8ac149',
    'ccdb38',
    'fdc006',
  ],
  picked: {
    el: false,
    color: false
  },
  modalBtn: false,
  tooltip: false
};

const getters = {
  tooltip(state) {
    return state.tooltip;
  },
  colors(state) {
    return state.colors;
  },
  modalBtn(state) {
    return state.modalBtn;
  },
  pickedColor(state) {
    return state.picked.color;
  }
};

const mutations = {
  toggleColor(state, color) {
    state.picked.el ? state.picked.el.classList.remove('is-active') : '';
    if (state.picked.color === color) {
      state.picked.color = false;
      state.picked.el = false;
    }
    else {
      state.picked.color = color;
      state.picked.el = event.target;
      event.target.classList.add('is-active');
    }
  },
  setModalBtn(state) {
    state.modalBtn = event.target;
  },
  setModalBtnColor(state) {
    if (state.picked.color) {
      state.modalBtn.style.backgroundColor = '#' + state.picked.color;
    }
    else {
      state.modalBtn.style.backgroundColor = '';
    }
  },
  openTooltip() {
    state.tooltip = !state.tooltip;
  }
};

const actions = {
  toggleColor({commit}, color) {
    commit('toggleColor', color);
  },
  saveColor({commit}) {
    commit('setModalBtnColor');
  },
  setModalBtn({commit}) {
    commit('setModalBtn');
  },
  openTooltip({commit}) {
    commit('openTooltip');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}