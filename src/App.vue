<template>
  <div id="app">
   <p>Hello, {{username}}</p>
   <nav class="nav">
      <a class="nav-link" href="#">Active</a>
      <a class="nav-link active"><router-link :to="'/'">HELLO1</router-link></a>
      <a class="nav-link"><router-link :to="'/2'">HELLO2</router-link></a>
      <a class="nav-link"><router-link :to="'/List'">List</router-link></a>
      <select @change="changeStatus" v-model="status">
      <option value="線上">線上</option>
      <option value="線下">線下</option>
   </select>
   </nav>
   
 <router-view :statusing="mystatus" @getNewName="updateNewName"/> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      status: '線上',
      mystatus: '線上',
      username: 'Maureen'
    }
  },
  methods:{
    changeStatus(){
      this.mystatus = this.status
    },
    updateNewName(newName){
      console.log(newName)
      let self = this;
      self.username = newName;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px;
}

</style>

<style  lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>


