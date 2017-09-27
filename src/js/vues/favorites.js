import discount from '../components/discount/discount.vue';
import Vue from  'vue';
var favorites = new Vue({
  el: '#favorites',
  components: {
    'discount' : discount
  },
  data: {
    discounts: [
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      },
      {
        name: "Novus",
        endDate: "2017/02/14",
        img: "img/novus-example.png",
        starsNumber: 4,
        desc: "Описание и дата публикации каталога",
        hot: true,
        favorite: true,
        stars: 9,
        views: 9
      }

    ]
  },
  methods: {}
});
