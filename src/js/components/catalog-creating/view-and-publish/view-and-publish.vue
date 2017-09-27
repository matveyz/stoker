<template>
  <div class="main-data">
    <section class="header-content header-content_thin text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <header-block :type="'catalog'">
              <div class="header-block__pre-text" slot="pre-text">Каталог торговой сети</div>
              <div class="header-block__title" slot="title">Novus</div>
              <div class="header-block__company-info" slot="info_link">Информация о компании</div>
              <div class="header-block__rating rating">
                <span class="rating-item checked"><svg class="icon"><use xlink:href="svg/svg.svg#icon-star"></use></svg> </span>
                <span class="rating-item checked"><svg class="icon"><use xlink:href="svg/svg.svg#icon-star"></use></svg> </span>
                <span class="rating-item checked"><svg class="icon"><use xlink:href="svg/svg.svg#icon-star"></use></svg> </span>
                <span class="rating-item checked"><svg class="icon"><use xlink:href="svg/svg.svg#icon-star"></use></svg> </span>
                <span class="rating-item"><svg class="icon"><use xlink:href="svg/svg.svg#icon-star"></use></svg> </span>
              </div>
              <template class="timer" slot="timer">
                <countdown date="2017/05/12" :countdown_pretext="true"></countdown>
              </template>
            </header-block>

            <div class="line-divide"></div>

            <header-extra>
              <template slot="side-left">
                <button class="btn-empty btn-disabled btn-icon">
                <svg class="icon icon-bookmark-circle">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-bookmark-circle"></use>
                </svg>
                <span class="vcenter">Добавить в избранное</span>
              </button>
              </template>
              <template slot="side-right">

                <button class="share btn-primary btn-disabled">
                  <svg class="icon icon-share">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-share"></use>
                  </svg>
                  <span>Поделиться</span>
                </button>

                <button class="share btn-primary btn-disabled btn-icon btn-icon_lg">
                  <svg class="icon icon-cart-mini">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-cart-mini"></use>
                  </svg>
                  <span class="vcenter">Онлайн магазин</span>
                </button>
              </template>

            </header-extra>
          </div>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 center">
            <div class="text-center main-data-btns">
              <header-extra>
                <template slot="side-left">
                  <button class="btn-primary btn-icon" @click="goPrevStep">
                    <svg class="icon icon-arrow-left" ><use xlink:href="svg/svg.svg#icon-arrow"></use></svg>
                    <span>Вернуться</span>
                  </button>
                </template>
                <template slot="side-right">
                  <button class="btn-primary" @click="openModalCatalogSaved">
                    <span>Сохранить</span>
                  </button>
                  <modal ref="modalCatalogSaved" slot="modal">
                    <modal_catalog-saved slot="modal-content"></modal_catalog-saved>
                  </modal>

                  <button class="btn-bg-secondary" @click="openModalCatalogPublished">Опубликовать</button>
                  <modal ref="modalCatalogPublished" slot="modal">
                    <modal_catalog-published slot="modal-content"></modal_catalog-published>
                  </modal>
                </template>
              </header-extra>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="./view-and-publish.js"></script>