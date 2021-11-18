<template>
  <div id="app">
    <input
      v-model="queryUtente"
      type="text"
      placeholder="Digita il nome di un film"
    />
    <button @click="submitSearch">cerca</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      queryUtente: "",
      films: [],
    };
  },
  methods: {
    submitSearch() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=7f9dcddd316d242d826f1a99e0924dcb&language=it%3DIT&query=${this.queryUtente}&page=1&include_adult=false`
        )
        .then(function (response) {
          //console.log(response.data.results);
          this.films = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
