<template>
  <div class="group-list nav">
    <div class="in">
      <div class="ct">
        <ul>
          <li v-for="(item, idx) in menu" :key="idx">
            <a :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "group-list_nav",
  props: {
    menu: Object,
  },
};
</script>
<style scoped lang="scss">
.group-list.nav {
    background-color: $major-color;
    >.in{
        @extend %center;
        .ct{
            ul{
                @extend %reset;
                display: flex;
                li{
                    flex: 0 20%;
                    a{
                        display: block;
                        color: $white;
                        padding: 10px;
                        text-decoration: none;
                        transition: $transition;
                        &:hover{
                            background-color: darken($major-color,3);
                        }
                    }
                }
            }
        }
    }
}
</style>