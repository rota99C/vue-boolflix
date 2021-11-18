<template>
  <div id="app">
    <input
      v-model="queryUtente"
      type="text"
      placeholder="Digita il nome di un film"
    />
    <button @click="submitSearch">cerca</button>
    <div v-for="movie in movies" :key="movie.id">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.original_title }}</p>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </div>
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
      movies: [],
    };
  },
  methods: {
    submitSearch() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=7f9dcddd316d242d826f1a99e0924dcb&language=it%3DIT&query=${this.queryUtente}`
        )
        .then((response) => {
          //console.log(response.data.results);
          //console.log(this.queryUtente);
          this.movies = response.data.results;
          //console.log(this.movies);
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
