<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :pl=PL />
    UserID: {{ $route.params.userId }}
    {{ msg }}
    {{ info }}
    {{ PL[0].sno }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      msg: "123",
      PL:null,
      info: null,
    };
  },
  methods: {
    getData: function () {
      //init 畫面的時候要先取得資料
      let _url = '/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview';

      this.$http
        .get(_url)
        .then((res) => {
          // this.initData(res);
           this.PL = res.data;
          console.log(res.data,this.PL[0]);
     
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  // mounted() {
  //   fetch("/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // },
  created: function () {
    this.getData();
  },
};
</script>
