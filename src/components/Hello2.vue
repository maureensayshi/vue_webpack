<template>
  <div>
    <h2 style="margin-top: 60px">chat room</h2>
    <span>
    <input type="text" v-model="msg" @keyup.enter="submitMessage">
    </span>
    <div v-for="item in messages">
    <h3>{{ item.user}}</h3>
    <p>{{item.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hellotwo',
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
  methods:{
    submitMessage(){
      let ms = this;
      ms.messages.unshift({user: ms.user, message: ms.msg});
      ms.msg = "";
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
