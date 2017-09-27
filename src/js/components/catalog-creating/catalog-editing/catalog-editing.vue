<template>
  <div class="main-data">
    <section class="top-content  text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <header-block>Редактирование каталога</header-block>
          </div>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 center">
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
<script src="./catalog-editing.js"></script>