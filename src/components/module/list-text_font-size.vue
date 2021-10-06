<template>
  <div class="list-text font-size">
    <div class="in">
      <div class="ct">
        <div class="in">
          <ul data-index="1" data-child="3">
            <li
              data-index="1"
              :class="'small ' + (dataFontSize == 'small' ? ' is-active' : '')"
            >
              <span
                ><a href="#" v-on:click.stop="fontSize('small')">小</a></span
              >
            </li>
            <li
              data-index="2"
              :class="
                'medium ' + (dataFontSize == 'medium' ? ' is-active' : '')
              "
            >
              <span
                ><a href="#" v-on:click.stop="fontSize('medium')"
                  >中{{ dataFontSize }}</a
                ></span
              >
            </li>
            <li
              data-index="3"
              :class="'large ' + (dataFontSize == 'large' ? ' is-active' : '')"
            >
              <span><a href="#"  v-on:click.stop="fontSize('large')">大</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list-text_font-size",
  props: {
    dataFontSize: String,
  },
  methods: {
    fontSize: function (size) {
      // this.$parent.dataFontSize="123485";
      console.log(size, this.$root.sysFontSize);
      this.$root.sysFontSize = size;
      console.log(size, this.$root.sysFontSize);
    },
  },
};
</script>

<style scoped lang="scss">
.list-text.font-size {
  .ct {
    ul {
      @extend %reset;
    }

    li {
      display: inline-block;
      vertical-align: middle;

      &.small {
        a {
          background-image: url("../../assets/images/font-smail.png");
        }
      }

      &.medium {
        a {
          background-image: url("../../assets/images/font-medium.png");
        }
      }

      &.large {
        a {
          background-image: url("../../assets/images/font-large.png");
        }
      }

      &.is-active {
        a {
          border-bottom-color: $minor-color;
        }
      }
    }

    span {
      display: block;
    }

    a {
      @extend %hide-text;
      display: block;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      background-position: center;
      border-bottom: 2px solid transparent;
      transition: $transition;

      &:hover {
        border-bottom-color: $major-color;
      }
    }
  }
}
</style>