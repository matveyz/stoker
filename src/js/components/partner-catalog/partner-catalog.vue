<template id="partner-catalog">
  <div class="partner-catalog my-lists-item-wrapper">
    <div class="my-lists-item">
      <span :class="'partner-catalog-img pull-left' + deactivate(partnerCatalog)">
        <img :src="'/app/img/' + partnerCatalog.img" :alt="'каталог ' + partnerCatalog.id">
      </span>

      <span class="partner-catalog-date">{{partnerCatalog.date}}</span>
      <!--TODO сделать v-if DRY-->
      <span class="partner-catalog-status" v-show="!show"
            v-if="!dateCheck(partnerCatalog)">Срок действия каталога истек</span>

      <span class="partner-catalog-status" v-show="!show" v-else-if="partnerCatalog.active"> Осталось

          <b
          v-if="typeof dateCheck(partnerCatalog) === 'object'">{{dateCheck(partnerCatalog).daysLeft}} дней {{dateCheck(partnerCatalog).hoursLeft}} часов</b>

          <b v-else>меньше {{dateCheck(partnerCatalog)}} часов</b>

        </span>

      <span class="partner-catalog-status" v-show="!show" v-else-if="!partnerCatalog.active">Каталог неактивен</span>

      <span class="pull-right">
          <span :class="'partner-catalog-statistics' + deactivate(partnerCatalog)" v-show="!show">
            <svg class='icon icon-star'>
              <use xlink:href='svg/svg.svg#icon-star'></use>
            </svg>
            <span>{{partnerCatalog.favorites}}</span>
            <svg class='icon icon-eye'>
              <use xlink:href='svg/svg.svg#icon-eye'></use>
            </svg>
            <span>{{partnerCatalog.views}}</span>
            <svg class='icon icon-pointer'>
              <use xlink:href='svg/svg.svg#icon-pointer'></use>
            </svg>
            <span>{{partnerCatalog.external_views}}</span>
          </span>

          <button class="partner-catalog-more" v-show="!show" @click="showExtra(true)">
            <svg class="icon icon-circle">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-circle"></use>
            </svg>
            <svg class="icon icon-circle">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-circle"></use>
            </svg>
            <svg class="icon icon-circle">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-circle"></use>
            </svg>
          </button>
        </span>
      <span class="partner-catalog-extra pull-right" v-show="show">
            <a>Просмотреть</a>
            <button class="partner-catalog-activate" @click="activateCatalog(partnerCatalog)"
                    v-if="partnerCatalog.active">Неактивный</button>
            <button class="partner-catalog-activate" @click="activateCatalog(partnerCatalog)"
                    v-else>Активировать</button>
            <a>Редактировать</a>
            <button class="partner-catalog-less pull-right" @click="showExtra(false)">
              <svg class="icon icon-cross">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-cross"></use>
              </svg>
            </button>
          </span>
    </div>
  </div>
</template>

<script src="./partner-catalog.js"></script>