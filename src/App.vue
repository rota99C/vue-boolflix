<template>
  <div id="app">
    <input
      v-model="queryUtente"
      type="text"
      placeholder="Digita il nome di un film"
    />
    <button @click="submitSearch">cerca</button>
    <div v-for="movie in movies" :key="movie.id">
      <img :src="startUrl + movie.poster_path" alt="" />
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.original_title }}</p>
      <p>
        {{ movie.original_language }}
        <!-- eccezione: UK, nella API registrata come EN, nel componente CountryFlag come GB -->
        <country-flag
          :country="
            movie.original_language == 'en' ? 'gb' : movie.original_language
          "
          size="normal"
        />
      </p>
      <p>{{ Math.ceil(movie.vote_average / 2) }}</p>
    </div>
    <!-- ! fine movies -->

    <div v-for="tvShow in tvShows" :key="tvShow.id">
      <img :src="startUrl + tvShow.poster_path" alt="" />
      <h1>{{ tvShow.name }}</h1>
      <p>{{ tvShow.original_name }}</p>
      <p>
        {{ tvShow.original_language }}
        <!-- eccezione: UK, nella API registrata come EN, nel componente CountryFlag come GB -->
        <country-flag
          :country="
            tvShow.original_language == 'en' ? 'gb' : tvShow.original_language
          "
          size="normal"
        />
      </p>
      <p>{{ Math.ceil(tvShow.vote_average / 2) }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CountryFlag from "vue-country-flag";

export default {
  name: "App",
  components: {
    CountryFlag,
  },
  data() {
    return {
      api_key: "7f9dcddd316d242d826f1a99e0924dcb",
      queryUtente: "",
      movies: [],
      tvShows: [],
      startUrl: "https://image.tmdb.org/t/p/w500/",
    };
  },
  methods: {
    submitSearch() {
      let reqMovie = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.queryUtente}`
      );
      let reqTvShow = axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.api_key}&query=${this.queryUtente}`
      );

      axios.all([reqMovie, reqTvShow]).then(
        axios.spread((...responses) => {
          this.movies = responses[0].data.results;
          /* console.log(this.movies); */
          this.tvShows = responses[1].data.results;
          /* console.log(this.tvShows); */
        })
        /* .catch((error) => {
            console.error(error);
          }) */
      );
    },
  },
};
</script>

<style lang="scss">
</style>
