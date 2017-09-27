<template id="choose-category">
  <div>
    <slot name="header-name">
      <div class="text-header-bigger">Выбрать категорию</div>
    </slot>
    <div class="filter-category">
      <div class="">
        <ul class="filter-category_theme-teal filter-category__inner">
          <li class="col-md-4 filter-category__item checkbox" v-for="category in getCategories">
            <input type="checkbox" :checked="category.active" :name="'category['+category.id+']'" :id="'category['+category.id+']'">
            <label class="checkbox__label" @click="activateCategory(category);categoryChanged(category)" :for="'category['+category.id+']'">
              <svg class="icon checkbox__icon checkbox__icon_theme-teal" >
                <use xlink:href="svg/svg.svg#icon-circle"></use>
              </svg>
              <svg class="icon checkbox__icon checkbox__icon_theme-teal">
                <use xlink:href="svg/svg.svg#icon-checked"></use>
              </svg>
              {{category.name}}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./choose-category.js"></script>