<template id="discount">
  <div class="col-xl-4 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12 pull-left">
    <div class="discounts-item">
      <div class="discounts-item_zoom"></div>
      <div class="discounts-item-inner">
        <div class="row">
          <div class="col-lg-6 col-md-5 col-sm-5 col-xs-12">
            <div class="discounts-item-img">
              <img :src="discount.img" alt="Скидка">
            </div>
          </div>
          <div class="col-lg-6 col-md-7 col-sm-7 col-xs-12">
            <div class="discounts-item-info">
              <div class="discounts-item-info-inner">
                @@include("discount-status.html")
                <div class="discounts-item-info-name">{{discount.name}}</div>
                <div class="discounts-item-info-desc">
                  {{discount.desc}}
                </div>
                <div class="discounts-item-info-more">
                  <button class="btn-primary">Смотреть</button>
                </div>
                <div class="discounts-item-info-extra">
                 <span>
                   <svg class="icon icon-eye"><use xlink:href="svg/svg.svg#icon-eye"></use></svg>
                   {{discount.views}}
                 </span>
                  <span>
                   <svg class="icon icon-heart"><use xlink:href="svg/svg.svg#icon-heart"></use></svg>
                   {{discount.stars}}
                 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./discount.js"></script>
 