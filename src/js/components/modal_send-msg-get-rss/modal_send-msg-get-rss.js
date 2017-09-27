export default {
    name: 'modal_send-msg-get-rss',
    data() {
        return {
            notifies: [
                {text: 'О новостях портала', alias: 'news'},
                {text: 'О специальных предложениях', alias: 'specials'},
                {text: 'О запуске новых каталогов', alias: 'catalogs'}
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
            /*searchItems : [
              {name:'Milka'},
              {name:'Куриное филе'},
              {name:'Куриное филе1'}
            ],*/
            productsList: {
                show: '',
                items: [
                    {name: 'Milka'},
                    {name: 'Куриное филе'},
                    {name: 'Куриное филе1'}
                ]
            },
            cityList: {
                show: '',
                items: [
                    {name: 'Ивано-франковск'},
                    {name: 'Симферополь'},
                    {name: 'Ивано-франковск'},
                    {name: 'Константиновка'},
                    {name: 'Белая-Церковь'},
                    {name: 'Днепросдержинск'},
                    {name: 'Каменец-Подольский'}
                ]
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
            var list = this.productsList.items;
            list.splice(list.indexOf(item), 1);
        },
        deleteCityItem: function (item) {
            var city = this.cityList.items;
            city.splice(city.indexOf(item), 1);
        },
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