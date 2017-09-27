<template id="instruction">
  <div class="instruction">
    <section class="top-content  text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <header-block>Инструкция</header-block>
            <div class="text-description">
              Добро пожаловать в раздел <b>загрузки каталога!</b><br>
              Здесть Вы можете загрузить и опубликовать<br>
              уже существующий каталог.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 center">
            <div class="instruction-list">
              <instruction-list-block :instruction="instruction"
                                      v-for="instruction in instructions"
                                      :key="instruction.id">

              </instruction-list-block>
            </div>
            <div class="instruction-after text-center">
              <div class="line-divide"></div>
              <div class="text-small">
                *Соблюдение правил ускорит процесс модерации и публикации Вашего каталога.
              </div>
              <button class="btn-bg-secondary" @click="changeStep">Приступить</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script src="./instruction.js"></script>