<template>
  <div class="main-data">
    <section class="top-content  text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <header-block>Основные данные</header-block>
          </div>
        </div>
      </div>
    </section>
    <form action="/catalog_creating" method="post" @submit.prevent="onSubmit()"
          @keydown="form.errors.clear($event.target.name)">
      <section class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 center">
              <label class="load-photo" for="logo">
                <span class="load-photo__img vcenter"><img :src="form.logo.path" alt=""></span>
                <span class="load-photo__text vcenter">
                <span class="load-photo__header load-photo__header_lg">Загрузить фото</span>
                <span class="load-photo__main load-photo__main_lg text-small">В данное окно можно переташить файл с необходимым <br>
изображением логотипа Вашей компании</span>
              </span>
                <input @change="onLogoChange" type="file" name="logo" id="logo" accept="image/*">
                <div class="text-small load-photo__text-extra">
                  *Загружаемое изображение должно быть не меньше, чем 200X200
                  пикселей. Если Вы не можете создать
                  изображение нужного разрешения, обратитесь в нашу <a href="#" class="link">службу поддержки.</a>
                </div>
                <span class="help is-danger" v-if="form.errors.has('logo')" v-text="form.errors.get('logo')"></span>
              </label>
              <input v-model="form.name_ru" required type="text" name="name_ru" placeholder="Название каталога (рус)*"
                     class="form-control form-control_block form-control__input ">
              <span class="help is-danger" v-if="form.errors.has('name_ru')" v-text="form.errors.get('name_ru')"></span>

              <input v-model="form.name_ua" required type="text" name="name_ua" placeholder="Название каталога (укр)*"
                     class="form-control form-control_block form-control__input ">
              <span class="help is-danger" v-if="form.errors.has('name_ua')" v-text="form.errors.get('name_ua')"></span>

              <input v-model="form.website" type="text" name="website" placeholder="http://"
                     class="form-control form-control_block form-control__input ">
              <span class="help is-danger" v-if="form.errors.has('website')" v-text="form.errors.get('website')"></span>
              <date-range
                  :is-disabled="true"
                  :date-start="form.date_start"
                  @changed-date-start="changeDateStart"
                  :date-end="form.date_end"
                  @changed-date-end="changeDateEnd">
                <label slot="title" class="date-range__label">Период действия каталога</label>
              </date-range>
              <label for="discount" class="form-control-discount">
                Максимальный размер скидки в каталоге (%)
                <input v-model="form.discount" type="text" name="discount" id="discount" placeholder="0"
                       class="form-control form-control__input form-control-discount__input">
                <span class="help is-danger" v-if="form.errors.has('discount')"
                      v-text="form.errors.get('discount')"></span>
              </label>
              <file-loader icon="icon-xls" @file-loaded="onFileChange">
                <div class="file-loader__main-text" slot="text-main">Загрузить файл Excel с информацией о товарах в систему Stocker</div>
                <div class="file-loader__small-text" slot="text-small">
                  или <a href="#" class="file-loader__link">Скачать пример Excel</a>
                  для правильного заполнения информации о товарах.
                </div>
              </file-loader>
            </div>
          </div>
        </div>
      </section>
      <section class="secondary-content secondary-content_small">
        <div class="container">
          <div class="row col-lg-11 center">
            <div class="text-header-bigger">Охват городов</div>
            <div class="text-small">Города, в которых будет показан Ваш каталог</div>
            <cities-streets-search></cities-streets-search>

            <div class="line-divide line-divide_lg"></div>
            <choose-category @category-changed="changeCategory"></choose-category>

            <div class="btn-group text-center main-data-btns">
              <button class="btn-primary" @click="goPrevStep"><svg class="icon icon-arrow-left" ><use xlink:href="svg/svg.svg#icon-arrow"></use></svg> <span>Вернуться</span></button>
              <button class="btn-primary" @click="goNextStep"><span>Загрузка</span> <svg class="icon icon-arrow-right" ><use xlink:href="svg/svg.svg#icon-arrow"></use></svg></button>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>
<script src="./main-data.js"></script>
