export default {
  name: 'modal_send-msg-partner-get-rss',
  data() {
    return {
      notifies: [
        {text: 'О просмотрах каталогов', alias: 'news'},
        {text: 'Уведомлять за 5 дней до окончания срока действия каталога', alias: 'specials'},
        {text: 'О переходах в каталоги', alias: 'catalogs'}
      ],
      days: [
        {text: 'Пн', alias: 'Mon'},
        {text: 'Вт', alias: 'Tue'},
        {text: 'Ср', alias: 'Wed'},
        {text: 'Чт', alias: 'Thu'},
        {text: 'Пт', alias: 'Fri'},
        {text: 'Сб', alias: 'Sat'},
        {text: 'Вс', alias: 'Sun'}
      ],
      searchItems : [
        {name:'Milka'},
        {name:'Куриное филе'},
        {name:'Куриное филе1'}
      ],
      productsList: {
        show: ''
      },
    }
  },
  methods: {
    closeModal: function () {
      if (this.$root.modal.show === true) {
        this.$root.modal.show = false;
        $('html').removeAttr("style");
      }
    },
    deleteSearchItem: function (item) {
      /*TODO: Переделать в массив который сортировать по вводу и уже из готового массива удалять на лету!*/
      var list = this.searchItems;
      list.splice(list.indexOf(item), 1);
    }
  },
  mounted: function () {
    const self = this;
    document.addEventListener('keydown', function () {
      if (event.keyCode === 27) { //on ESC
        self.closeModal();
      }
    });

  }
};