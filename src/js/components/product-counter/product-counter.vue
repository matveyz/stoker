<template>
  <div class="product-counter">
    <button class="product-counter-btn product-counter__minus" @click="countMinus">-</button>
    <input type="text" class="product-counter__input" :name="name" :disabled="disabled" :value="count"
           @input="checkInput">
    <!--<input type="text" class="product-counter__input" :name="name" :disabled="disabled" :value="count"
           @input="checkInput">-->
    <button class="product-counter-btn product-counter__plus" @click="countPlus">+</button>
  </div>
</template>

<script>

  export default {
    props: ['disabled', 'value', 'name'],
    data(){
      return {
        count: this.value
      }
    },
    methods: {
      countMinus(){
        (this.count > 1 && !this.disabled) ? this.count-- : this.count = 1;
        this.$emit('countChange',this.count);
      },
      countPlus(){
        if (!this.disabled) this.count++;
        this.$emit('countChange',this.count);
      },
      checkInput(event){
        this.count = event.target.value;
        if (this.count <= 0)
          this.count = 1;
        this.$emit('countChange',this.count);
      }
    }
  }
</script>
