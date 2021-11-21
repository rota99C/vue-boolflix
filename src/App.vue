<template>
  <div id="app">
    <siteHeader />
    <siteMain />
  </div>
</template>

<script>
import siteHeader from "./components/siteHeader.vue";
import siteMain from "./components/siteMain.vue";

export default {
  name: "App",
  components: {
    siteHeader,
    siteMain,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
