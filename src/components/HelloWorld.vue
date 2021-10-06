<template>
  <div class="hello">
    <div>地址:  {{ ar }},名稱: {{ sna }},區域: {{ sarea }}</div>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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