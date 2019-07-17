<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-view :title="title" @update-title="updateTitleInParent" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Initail Title"
    };
  },
  methods: {
    updateTitleInParent(newTitle) {
      this.title = newTitle;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px;
}
</style>

<style  lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>


