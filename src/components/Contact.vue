<template>
  <div>
    <nav>
      <a class="link" @click="tab = 'with-email-and-mobile'">Table with email and mobile</a>
      <a class="link" @click="tab = 'with-address'">Table with address</a>
    </nav>
    <h6 style="margin-top: 60px">change title:</h6>
    <input type="text" @change="updateTitle" v-model="title" />

    <div v-if="tab === 'with-email-and-mobile'">
      <tableFormat
        :columns="columnsForEamilAndMobile"
        :list-data="listData"
        @change-bg="changeItemBg"
      >
        <template slot="item-content" slot-scope="{ item }">
          <div>{{ item.email }}</div>
          <div>{{ item.phone }}</div>
          <div>{{ item.cell }}</div>
        </template>
      </tableFormat>
    </div>

    <div v-if="tab === 'with-address'">
      <tableFormat :columns="columnsForAddress" :list-data="listData">
        <template slot="item-content" slot-scope="{ item }">
          <div>{{ item.location.state }}</div>
          <div>{{ item.location.city }}</div>
          <div>{{ item.location.street }}</div>
        </template>
      </tableFormat>
    </div>
  </div>
</template>

<script>
import TableFormat from "./utils/TableFormat.vue";
export default {
  name: "table-one",
  props: ["title"],
  components: {
    TableFormat
  },
  data() {
    return {
      listData: [],
      columnsForEamilAndMobile: ["id", "pic", "name", "email and mobile"],
      columnsForAddress: ["id", "pic", "name", "address"],
      tab: "with-email-and-mobile"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let vm = this;
      //能使用 this 是因為在 main.js 裡有宣告 Vue.use(VueAxios, axios)
      this.axios
        .get("https://randomuser.me/api/?results=50")
        .then(function(response) {
          // 成功回應
          console.log(response.data);
          vm.listData = response.data.results;
          //預先設定每個 item 都多了一個屬性，建立方法，才能夠雙向綁定
          vm.listData.forEach(item => {
            vm.$set(item, "selected", false);
          });
        })
        .catch(function(error) {
          // 失敗回應
          console.log(error);
        });
    },
    updateTitle() {
      this.$emit("update-title", this.title);
      // this.$emit("綁定到父層的事件名稱", 要帶到父層的值)
    },
    changeItemBg(item) {
      item.selected = !item.selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color: yellow !important;
}

.link {
  width: 100px;
  height: 5px;
  border: 1px solid black;
  padding: 5px;
  margin: 3px;
  cursor: pointer;
}
</style>
