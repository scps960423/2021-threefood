<template>
  <div class="simple-text major-logo" data-index="1" data-type="0">
    <div class="ct">
      <div class="in">
        <h1>
          <span><a href="#">哈瑪星科技股份有限公司</a></span>
        </h1>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.simple-text.major-logo {
  // background-color: $major-color;
  .ct {
    h1{
      margin: 0;
    }
    a {
      @extend %hide-text;
      display: block;
      background-image: url("../../assets/images/major_logo.png");
      background-repeat: no-repeat;
      height: 100px;
      width: 350px;
    }
  }
}
</style>