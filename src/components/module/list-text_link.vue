<template>
  <div class="list-text link" data-index="1" data-type="0">
    <div class="in">
      <div class="ct">
        <div class="in">
          <ul data-index="1" data-child="3">
            <li v-for="(item, idx) in listText" :key="idx">
              <span>
                <a :href="item.path">{{ item.name }}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list-text_link",
  props: {
    listText: Object,
  },
};
</script>
<style scoped lang="scss">
.list-text.link{
    .ct{
        ul{
            @extend %reset;
            li{
                display: inline-block;
                padding: 0 7px;
                +li{
                    border-left: $border;
                }
            }
        }
    }
}
</style>