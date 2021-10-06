<template>
  <div class="base-mobile">
    <div class="hd">
       <Logo />
    </div>
    <div class="ct">
      <div class="in">
        <div class="logo">
          <img src="../assets/images/major_logo.png" alt="">
        </div>
        <div class="group-list nav">
          <div class="ct">
            <ul>
              <li v-for="(item, idx) in menu" :key="idx">
                <a :href="item.path">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "@/components/module/simple-text_major-logo.vue";
export default {
  name: "base-mobile",
  components: {
     Logo,
  },
  props: {
    menu: Object,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base-mobile.scss";
</style>