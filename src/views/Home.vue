<template>
  <!-- <baseMobile :menu="menu" /> -->
  <div class=" base-wrapper">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>12456798 TEST</div>
    <div v-for="(item, idx) in PL" :key="idx" style="margin: 10px">
    
      <HelloWorld :ar="item.ar" :sna="item.sna" :sarea="item.sarea" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import baseMobile from "@/components/base-mobile.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    baseMobile
  },
  data: function () {
    return {
      msg: "123",
      PL: null,
      info: null,
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
  methods: {
    getData: function () {
      //init 畫面的時候要先取得資料
      let _url =
        "/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview";

      this.$http
        .get(_url)
        .then((res) => {
          // this.initData(res);
          this.PL = res.data;
          console.log(res.data, this.PL[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.base-wrapper {
  // background-color: $mainColor;
}
</style>
