<template id="modal_register-form">
  <!--TODO TABS NOT WORKING (module?)-->
  <div class="tabs register-form" id="register-form" data-tabs-container="reg-form">
    <div class="modal-preheader">
      <button data-tab="reg-form-1" class="tabs-item text-header-high is-active">Вход</button>
      <button data-tab="reg-form-2" class="tabs-item text-header-high">Регистрация</button>
    </div>
    <div data-tab-content="reg-form-1" class="tabs-item-content is-active modal-content-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-desc text text-center">
            Если Вы уже зарегистрированы в системе, введите свои данные.
          </div>
        </div>

        <div class="modal-body">
          <form action="" method="post">
            <div class="row">
              <div class="col-xs-12"><input required type="text" name="mailphone_send_msg"
                                            placeholder="Телефон или e-mail*"
                                            class="form-control"></div>
              <div class="col-xs-12"><input required type="password" name="pass"
                                            placeholder="Пароль*"
                                            class="form-control"></div>
            </div>
            <div class="modal-required-msg required-msg">*Все поля обязательны для заполнения</div>
            <div class="modal-bottom">
              <button type="submit" class="btn-bg-primary modal-btn">Войти</button>
              <a href="#" class="link-main">Забыли пароль?</a>
            </div>
          </form>

        </div>
      </div>
      <div class="modal-footer">
        <div class="text-center line-through"><span>Войти с помощью соцсетей</span></div>
        <slot name="social-icons"></slot>
      </div>
    </div>
    <div data-tab-content="reg-form-2" class="tabs-item-content">
      <div class="tabs" data-tabs-container="reg-extra-form">
        <div data-tab-content="reg-extra-form-1" class="tabs-item-content modal-content-wrapper is-active">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-desc text text-center">
                Регистрация нового пользователя на портале Stocker.ua
              </div>
            </div>

            <div class="modal-body">
              <form action="" method="post">
                <div class="row">
                  <div class="col-xs-12"><input required type="text" name="name"
                                                placeholder="Имя и фамилия*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="text" name="mailphone_send_msg"
                                                placeholder="Email*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="password" name="pass"
                                                placeholder="Пароль*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="password" name="pass_check"
                                                placeholder="Проверка пароля*"
                                                class="form-control"></div>
                </div>
                <div class="modal-required-msg required-msg">*Все поля обязательны для заполнения</div>
                <div class="modal-bottom">
                  <button type="submit" class="btn-bg-primary modal-btn">Регистрация</button>
                  <button type="button" data-tab="reg-extra-form-2" class="tabs-item btn-primary modal-btn">Я
                    представитель
                  </button>
                </div>
              </form>

            </div>
          </div>
          <div class="modal-footer">
            <div class="text-center line-through"><span>Войти с помощью соцсетей</span></div>
            <!--<slot name="social-icons"></slot>-->
          </div>
        </div>
        <div data-tab-content="reg-extra-form-2" class="tabs-item-content modal-content-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-desc text text-center">
                Регистрация нового партнера (представителя) на портале Stocker.ua
              </div>
            </div>

            <div class="modal-body">
              <form action="" method="post">
                <div class="row">
                  <div class="col-xs-12"><input required type="text" name="company"
                                                placeholder="Компания*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="text" name="name"
                                                placeholder="Представитель (имя и фамилия)*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="text" name="phone"
                                                placeholder="Телефон*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="text" name="mail"
                                                placeholder="Email*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="password" name="pass"
                                                placeholder="Пароль*"
                                                class="form-control"></div>
                  <div class="col-xs-12"><input required type="password" name="pass_check"
                                                placeholder="Проверка пароля*"
                                                class="form-control"></div>
                </div>
                <div class="modal-required-msg required-msg">*Все поля обязательны для заполнения</div>
                <div class="modal-bottom">
                  <button type="submit" class="btn-bg-primary modal-btn">Регистрация</button>
                  <button type="button" data-tab="reg-extra-form-1" class="tabs-item btn-primary modal-btn">Я
                    пользователь
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modal_register-form.js"></script>

