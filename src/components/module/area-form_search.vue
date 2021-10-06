<template>
  <div class="area-form search">
    <div class="in">
      <div class="ct">
        <div class="fieldset">
          <span class="search"
            ><input type="search" placeholder="Search"
          /></span>
          <span class="submit"><a href="#">搜尋</a></span>
        </div>
      </div>
      <div class="ft">
          <span><a href="#">進階搜尋</a></span>
       
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.area-form.search {
  .ct {
    display: inline-block;
    vertical-align: middle;

    .fieldset {
      position: relative;

      @include js(false) {
        display: none;
      }

      span {
        $icon-width: 36px;

        display: block;

        &.search {
          display: block;
          padding-right: $icon-width;
          width: 200px;

          input {
            display: block;
            width: 100%;
            border: $border;
            border-radius: $border-radius;
            line-height: 2;
          }
        }

        &.submit {
          a {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: $icon-width;
            background-color: $minor-color;
            transition: $transition;
            @extend %hide-text;
            // @include bg-to-pic("icon-pic/icon-w-search.png", false);
            background-image: url('../../assets/images/icon-w-search.png');
            background-repeat: no-repeat;
            background-position: center;
            &:hover {
              background-color: deeper($minor-color);
            }
          }
        }
      }
    }

    .list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: none;

      ul {
        margin-top: $interval-m;
      }

      li {
        + li {
          margin-top: $interval-s;
        }
      }

      span {
        display: block;
      }

      a {
        display: block;
        padding: $btn-padding;
        box-shadow: $box-shadow;
        background-color: $white;
        transition: $transition;

        &:hover {
          background-color: $light;
        }
      }
    }
  }

  .ft {
    display: inline-block;
    vertical-align: middle;
    padding-left: $interval-s;

    a {
      font-size: $font-size-s;

      @include js(false) {
        @extend %btn;
      }
    }
  }
}
</style>