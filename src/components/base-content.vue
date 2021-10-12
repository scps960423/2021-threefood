<template>
  <div class="base-content">
    <div class="in">
      <div class="ct">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-content {
  padding: $interval-l 0;
  margin-bottom: $interval-xl;
  > .in {
    @extend %center;
    background-color: $white;
    border: $border;
    text-align: center;
  }
}
</style>