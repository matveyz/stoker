<template id="modal_send-msg">
  <transition name="modal">
      <div class="modal-mask" @click="closeModal()">
        <div class="modal-container">
          <div class="send-msg-form modal" id="send-msg-form" @click.stop>
            <div class="modal-content-wrapper">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title text-header-highest">
                    Отправить нам сообщение
                  </div>
                  <div class="modal-desc text-small">
                    Если Вы хотите узнать больше о нашей платформе или о нас - будем рады ответить на все Ваши вопросы.
                  </div>
                </div>
                <div class="modal-body">
                  <form action="mail.php" method="post">
                    <div class="row">
                      <div class="col-sm-6"><input required type="text" name="name_send_msg" placeholder="Имя*"
                                                   class="form-control"></div>
                      <div class="col-sm-6"><input required type="text" name="mailphone_send_msg"
                                                   placeholder="Телефон или e-mail*"
                                                   class="form-control pull-right"></div>
                      <div class="col-xs-12"><textarea required class="form-control" name="text_send_msg" id=""
                                                       cols="30"
                                                       rows="10"
                                                       placeholder="Текст*"></textarea></div>
                    </div>
                    <button type="submit" class="btn-primary modal-btn">Отправить сообщение</button>
                    <span class="modal-required-msg required-msg">*Все поля обязательны для заполнения</span>
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

<script src="./modal_send-msg.js"></script>