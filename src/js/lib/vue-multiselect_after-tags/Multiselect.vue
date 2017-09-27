<template>
  <div
      :tabindex="searchable ? -1 : 0"
      :class="{ 'multiselect--active': isOpen, 'multiselect--disabled': disabled, 'multiselect--above': !hasEnoughSpace }"
      @focus="activate()"
      @blur="searchable ? false : deactivate()"
      @keydown.self.down.prevent="pointerForward()"
      @keydown.self.up.prevent="pointerBackward()"
      @keydown.enter.tab.stop.self="addPointerElement($event)"
      @keyup.esc="deactivate()"
      class="multiselect">
    <slot name="carret">
      <div @mousedown.prevent="toggle()" class="multiselect__select"></div>
    </slot>
    <div ref="tags" class="search-block multiselect__tags">

      <template v-if="internalValue && internalValue.length > limit">
        <strong v-text="limitText(internalValue.length - limit)"></strong>
      </template>
      <transition name="multiselect__loading">
        <slot name="loading">
          <div v-show="loading" class="multiselect__spinner"></div>
        </slot>
      </transition>
      <input
          ref="search"
          type="text"
          autocomplete="off"
          :placeholder="placeholder"
          v-if="searchable"
          :value="isOpen ? search : currentOptionLabel"
          :disabled="disabled"
          @input="updateSearch($event.target.value)"
          @focus.prevent="activate()"
          @blur.prevent="deactivate()"
          @keyup.esc="deactivate()"
          @keydown.down.prevent="pointerForward()"
          @keydown.up.prevent="pointerBackward()"
          @keydown.enter.prevent
          @keydown.enter.tab.stop.self="addPointerElement($event)"
          @keydown.delete="removeLastElement()"
          class="form-control multiselect__input"/>
      <svg class='icon icon-search'>
        <use xlink:href='svg/svg.svg#icon-search'></use>
      </svg>
      <span
          v-if="!searchable"
          class="multiselect__single"
          v-text="currentOptionLabel">
        </span>
    </div>
    <transition name="multiselect">
      <ul
          :style="{ maxHeight: maxHeight + 'px' }"
          ref="list"
          v-show="isOpen"
          class="multiselect__content">
        <!--<vue-scrollbar>-->
          <slot name="beforeList"></slot>
          <li v-if="multiple && max === internalValue.length">
            <span class="multiselect__option">
              <slot name="maxElements">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>
            </span>
          </li>
          <template v-if="!max || internalValue.length < max">
            <li class="multiselect__element" v-for="(option, index) of filteredOptions" :key="index">
              <button
                  tabindex="0"
                  v-if="!option.$isLabel"
                  :class="optionHighlight(index, option)"
                  @mousedown.prevent="select(option)"
                  @mouseenter="pointerSet(index)"
                  :data-select="option.isTag ? tagPlaceholder : selectLabelText"
                  :data-selected="selectedLabelText"
                  :data-deselect="deselectLabelText"
                  class="multiselect__option">
                <slot name="option" :option="option" :search="search">
                  <span>{{ getOptionLabel(option) }}</span>
                </slot>
              </button>
              <span
                  v-if="option.$isLabel"
                  :class="optionHighlight(index, option)"
                  class="multiselect__option multiselect__option--disabled">
                {{ option.$groupLabel }}
              </span>
            </li>
          </template>
          <li v-show="filteredOptions.length === 0 && search && !loading">
            <span class="multiselect__option">
              <slot name="noResult">No elements found. Consider changing the search query.</slot>
            </span>
          </li>
          <slot name="afterList"></slot>
        <!--</vue-scrollbar>-->
      </ul>
    </transition>
    <div v-if="visibleValue.length != 0" class="search-products-list">
      <div class="search-products-list-block">
        <button
            type="button"
            v-for="option of visibleValue"
            @mousedown.prevent
            class="btn-search-item multiselect__tag">
          {{getOptionLabel(option)}}
          <span
              aria-hidden="true"
              tabindex="1"
              @keydown.enter.prevent="removeElement(option)"
              @mousedown.prevent="removeElement(option)"
              class="multiselect__tag-icon">
              <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="svg/svg.svg#icon-cross">
              </use></svg>
            </span>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import multiselectMixin from './multiselectMixin'
  import pointerMixin from './pointerMixin'

//  import ScrollBar from 'vue2-scrollbar/src/js/components/vue-scrollbar.vue'

  export default {
    name: 'vue-multiselect',
    mixins: [multiselectMixin, pointerMixin],
//    components: {'vue-scrollbar': ScrollBar},
    props: {
      /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
      selectLabel: {
        type: String,
        default: 'Press enter to select'
      },
      /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
      selectedLabel: {
        type: String,
        default: 'Selected'
      },
      /**
       * String to show when pointing to an alredy selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
      deselectLabel: {
        type: String,
        default: 'Press enter to remove'
      },
      /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
      showLabels: {
        type: Boolean,
        default: true
      },
      /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 'label'
       * @type {String}
       */
      limit: {
        type: Number,
        default: 99999
      },
      /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
      maxHeight: {
        type: Number,
        default: 300
      },
      /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
      limitText: {
        type: Function,
        default: count => `and ${count} more`
      },
      /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
      loading: {
        type: Boolean,
        default: false
      },
      /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      visibleValue () {
        return this.multiple
          ? this.internalValue.slice(0, this.limit)
          : []
      },
      deselectLabelText () {
        return this.showLabels
          ? this.deselectLabel
          : ''
      },
      selectLabelText () {
        return this.showLabels
          ? this.selectLabel
          : ''
      },
      selectedLabelText () {
        return this.showLabels
          ? this.selectedLabel
          : ''
      }
    }
  }
</script>