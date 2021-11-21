<template>
  <div id="siteMain">
    <div @submitSearch="searchMovie"></div>
  </div>
</template>

<script>
export default {
  methods: {
    searchMovie(value) {
      this.queryUtente = value;
      console.log(value);
    },
  },
};
</script>

<style lang="scss">
#siteMain {
  background-color: #141414;
  width: 100%;
  height: calc(100vh - 70px);
}
</style>