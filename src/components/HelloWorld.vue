<template>
  <div class="openData">

    <div>
      <span>地址:  {{ ar }}</span>
      <span>名稱: {{ sna }}</span>
      <span>區域: {{ sarea }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'base',
  props: {
    msg: String,
    ar:String,
    sna:String,
    sarea:String
  }
}
</script>

<style scoped lang="scss">
.openData{
  >div{
    display: flex
  }
  span{
    border: $border;
    flex: 1;
    padding: 10px;
  }
}
</style>

<!--
<template>
  <div>
    <article v-for="(district, idx) in districts" :key="idx">
      <h1>{{ district }}</h1>
      <ul>
        <li>City: {{ district.city }}</li>
        <li>Population: {{ district.population }}</li>
      </ul>
    </article>
  </div>
</template>

<script>
import { db } from '../db'

export default {
  name: 'HelloWorld',
  data () {
    return {
      districts: []
    }
  },
  firestore () {
    return {
      districts: db.collection('threefood-cb5cf-default-rtdb')
    }
  },created: function () {
    this.districts = db.collection('threefood-cb5cf-default-rtdb')
    console.log(this.districts)
  },
  firestore () {
    return {
      districts: db.collection('threefood-cb5cf-default-rtdb')
    }
    console.log(districts);
  }
  ,
   created: function () {
    this.districts=db.collection('threefood-cb5cf-default-rtdb').get();
       
    console.log(this.districts);
  }
}
</script>


-->