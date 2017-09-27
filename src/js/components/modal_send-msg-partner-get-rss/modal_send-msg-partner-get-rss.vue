<template id="modal_send-msg-partner-get-rss">
  <transition name="modal">
    <div class="modal-mask" @click="closeModal()">
      <div class="modal-container">
        <div class="partner-get-rss get-rss-form modal" id="get-rss-form" @click.stop>
          <div class="modal-content-wrapper">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title text-header-highest">Настроить рассылку</div>
              </div>

              <div class="modal-body">
                <form action="" method="post">
                  <div class="modal-body-block">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="text-big">Уведомлять меня</div>
                        <ul>
                          <!--todo SLOT:checkbox-->
                          <li v-for="notify in notifies" class="checkbox">
                            <input type="checkbox" :id="'get-rss-' + notify.alias">
                            <label :for="'get-rss-' + notify.alias">
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-circle"></use>
                              </svg>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-checked"></use>
                              </svg>
                              <span>{{notify.text}}</span>
                            </label>
                          </li>

                        </ul>
                      </div>
                      <div class="col-sm-8">
                        <div class="text-big">Дни рассылки</div>
                        <ul class="days-control">

                          <li v-for="day in days" class="checkbox">
                            <input type="checkbox" :id="day.alias">
                            <label :for="day.alias">
                              <span>{{day.text}}</span>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-circle"></use>
                              </svg>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-checked"></use>
                              </svg>
                            </label>
                          </li>

                        </ul>
                        <div class="text-big">Время рассылки</div>
                        <label for="form-control-time" class="form-control-time">
                          <select required name="day" id="form-control-time" class="form-control">
                            <option value="09:00" selected>09:00</option>
                            <option value="10:00">10:00</option>
                          </select>
                          <svg class='icon icon-arrow-down'>
                            <use xlink:href='svg/svg.svg#icon-arrow'></use>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn-primary modal-btn">Сохранить</button>
                </form>
              </div>
            </div>
          </div>
          <button class="modal-close" title="Close (Esc)" @click="closeModal()">×</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./modal_send-msg-partner-get-rss.js"></script>