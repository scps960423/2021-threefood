<template>
  <div :class="'group sys-root font-size-' + sysFontSize">
    <div class="in">
       <div class="base-wrapper">
      <baseHeader :menu="menu" :dataFontSize="sysFontSize" />
      <baseContent />
      <baseFooter />
    </div>
    </div>
   
  </div>
</template>
<script>
import baseHeader from "@/components/base-header.vue";
import baseContent from "@/components/base-content.vue";
import baseFooter from "@/components/base-footer.vue";
export default {
  components: {
    baseHeader,
    baseContent,
    baseFooter,
  },
  data: function () {
    return {
      sysFontSize: "small",
      menu: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sys-root {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: $body-font-size-m; //預設大小
  font-family: $base-font-style;
  color: $body-font-color;
  position: relative;
  >.in{
    background-color: $light;
  }
  &.font-size-large {
    //大字
    font-size: $body-font-size-l;
  }

  &.font-size-medium {
    //中字
    font-size: $body-font-size-m;
  }

  &.font-size-small {
    //小字
    font-size: $body-font-size-s;
  }
}
</style>
