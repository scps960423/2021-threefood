<template>
  <div class="base-header">
    <div class="in">
      <div class="group info">
        <div class="in">
          <div class="ct">
            <Logo />
            <div class="group msg-tool">
              <div class="in">
                <div class="ct">
                  <div class="div">
                    <listText_link :listText="menu" />
                    <listText_fontSize :dataFontSize="dataFontSize"/>
                  </div>
                  <areaForm_search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <groupList_nav :menu="menu" />
    </div>
  </div>
</template>
<script>
import Logo from "@/components/module/simple-text_major-logo.vue";
import groupList_nav from "@/components/module/group-list_nav.vue";
import listText_link from "@/components/module/list-text_link.vue";
import listText_fontSize from "@/components/module/list-text_font-size.vue";
import areaForm_search from "@/components/module/area-form_search.vue";
export default {
  name: "base-header",
  components: {
    Logo,
    groupList_nav,
    listText_link,
    listText_fontSize,
    areaForm_search,
  },
  props: {
    menu: Object,
    dataFontSize: String
  },
};
</script>
<style scoped lang="scss">
.base-header {
  background-color: $white;
  .info {
    > .in {
      @extend %center;
      > .ct {
        display: flex;
      }
    }
    .msg-tool {
      flex-grow: 1;
      display: flex;
      justify-content: end;
      align-items: center;
      .div {
        display: flex;
        justify-content: end;
        margin-bottom: 8px;
      }
    }
  }
}
</style>