<template>
  <div>
    <h2 style="margin-top: 60px">change user name</h2>
    <input type='text' @change='updateUser' v-model='user'/>
    <p>{{ user }}</p>

    <h3 style="font-weight:bold; margin-top:60px">狀態: {{ statusing }}</h3>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">pic</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, i) in listData" :class="{'bg': item.selected}">
      <th scope="row">{{ i }}</th>
      <td><img :src="item.picture.thumbnail"></td>
      <td>{{ item.name.title }}. {{ item.name.first }} {{ item.name.last }}</td>
      <td>{{ item.email }}</td>
      <td><button @click="clickMe(item)">click me</button></td>
    </tr>
  </tbody>
</table>


    <pre>{{ listData }}</pre>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ["statusing"],
  data () {
    return {
      msg: '',
      user: "Maureen",
      messages:[
        {
          user: "Maureen",
          message: "hello how are you"
        },
        {
          user: "po",
          message: "good morning"
        }
      ],
      listData:[]
    }
  },
  created(){
    this.getData();
  },
  methods:{
    submitMessage(){
      let ms = this;
      ms.messages.unshift({user: ms.user, message: ms.msg});
      ms.msg = "";
    },
    getData(){
      let vm = this
      //能使用 this 是因為在 main.js 裡有宣告 Vue.use(VueAxios, axios)
        this.axios.get('https://randomuser.me/api/?results=50')
          .then(function (response) {
            // 成功回應
            console.log(response.data)
            vm.listData = response.data.results;
            //預先設定每個 item 都多了一個屬性，建立方法，才能夠雙向綁定
            vm.listData.forEach((item)=>{
              vm.$set(item, 'selected', false);
            })
          })
          .catch(function (error) {
            // 失敗回應
            console.log(error);
          });
    },
    updateUser(){
      let self = this;
      self.$emit("getNewName", self.user);
      //self.$emit("綁定到父層的事件名稱", 要帶到父層的值)
    },
    clickMe(item){
      item.selected = !item.selected
      console.log(item.selected)
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
  background-color: yellow !important
}
</style>
