<template>
  <div>
    <label for="file-loader" class="file-loader">
    <span class="file-loader__btn vcenter">
      <span class="btn-bg-primary btn-file">
        <svg class="icon icon-xls btn-file__icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'svg/svg.svg#'+icon"></use>
        </svg>
        <span class="btn-file__text vcenter">Загрузить файл</span>
      </span>
    </span>
      <slot name="text-main">
        <span class="file-loader__main-text">Загрузить файл Excel с информацией о товарах в систему Stocker</span>
      </slot>
      <input @change="onFileChange" type="file" name="file-loader" id="file-loader" :accept="accept" class="hidden">
    </label>
    <slot name="text-small"></slot>
  </div>
</template>

<script>
  export default {
    props:{
      icon: {
        type: String,
        default: 'icon-pdf'
      },
      accept: {
        type: String,
        default: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }
    },
    data(){
      return {
        path: ''
      }
    },
    methods: {
      onFileChange(e){
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;

        let reader = new FileReader();
        let vm = this;

        reader.onload = (e) => {
          this.path = e.target.result;
          vm.$emit('file-loaded',this.path);
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }
</script>