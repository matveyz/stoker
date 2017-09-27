<template id="partner-settings-company">
  <section class="settings-company">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 center">
          <div class="text-header-bigger">Информация о компании</div>
          <form action="">
            <input required type="text" name="name" placeholder="Название*"
                   class="settings-control form-control">
            <label class="load-photo form-control settings-control" for="load_photo">
              <span class="load-photo-text-header">Загрузить логотип</span>
              <span class="load-photo-text-main text-small">В данное окно можно переташить файл с необходимым
изображением логотипа Вашей компании</span>
              <input type="file" name="load_photo" id="load_photo" accept="image/*">
            </label>
            <div class="text-small load-photo-text-extra">*Загружаемое изображение должно быть не меньше, чем 200X200
              пикселей. Если Вы не можете создать
              изображение нужного разрешения, обратитесь в нашу <a href="#" class="link">службу поддержки.</a>
            </div>
            <input required type="text" name="name" placeholder="http://"
                   class="form-control settings-control">
            <textarea placeholder="О компании" class="form-control settings-control" name="about-company"
                      id="comments-item-message-text">
          </textarea>
            <div class="settings-control company-color">
              <button type="button" @click="openModal()" class="vcenter form-control company-color-picker"></button>
              <modal ref="modal" slot="modal">
                <modal_company-color-pick slot="modal-content"></modal_company-color-pick>
              </modal>
              <span class="vcenter text company-color-extra-text">Выберите корпоративный цвет вашего бренда, который будет отображатся на
                <button type="button" class="link" @mouseover="openTooltip()" @mouseleave="openTooltip()">карточке товара.</button>
                <span v-if="tooltip" class="company-color-tooltip">
                  <img src="img/tooltip.png" alt="пример карточки товара">
                  <span :style="'background-color: #' + pickedColor"></span>
                </span>
              </span>
            </div>
            <input type="submit" class="btn-primary" value="Сохранить">
          </form>
        </div>
        <div class="line-divide"></div>
        <div class="col-lg-11 center">
          <div class="text-highest">Адрес точек и представительств</div>
          <div class="text-small">Данные адреса будут отображаться на странице ваших каталогов.</div>

          <slot name="cities-streets-search"></slot>


          <button class="btn-primary">Сохранить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./partner-settings-company.js"></script>