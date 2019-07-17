<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" v-for="(column, i) in columns" :key="`columns-${i}`">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in listData"
          :key="i"
          :class="{'bg': item.selected}"
          @click="$emit('change-bg', item)"
        >
          <th scope="row">{{ i }}</th>
          <td>
            <img :src="item.picture.thumbnail" />
          </td>
          <td>{{ item.name.title }}. {{ item.name.first }} {{ item.name.last }}</td>
          <td>
            <slot name="item-content" :item="item"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "table",
  props: ["columns", "listData"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color: yellow !important;
}
</style>
