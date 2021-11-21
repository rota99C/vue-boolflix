<template>
  <div id="siteMain">
    <div class="containerProducts">
      <products
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :original_title="movie.original_title"
        :original_language="movie.original_language"
        :image="startUrl + movie.poster_path"
        :vote="movie.vote_average"
      />
      <products
        v-for="tvShow in tvShows"
        :key="tvShow.id"
        :title="tvShow.name"
        :original_title="tvShow.original_name"
        :original_language="tvShow.original_language"
        :image="startUrl + tvShow.poster_path"
        :vote="tvShow.vote_average"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "../event-bus";
import products from "./products.vue";
export default {
  components: {
    products,
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
  created() {
    EventBus.$on("submitSearch", this.submitSearch);
  },
  methods: {
    submitSearch(value) {
      this.queryUtente = value;
      console.log(this.queryUtente);
      let reqMovie = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.queryUtente}`
      );
      let reqTvShow = axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.api_key}&query=${this.queryUtente}`
      );
      axios
        .all([reqMovie, reqTvShow])
        .then(
          axios.spread((...responses) => {
            this.movies = responses[0].data.results;
            /* console.log(this.movies); */
            this.tvShows = responses[1].data.results;
            /* console.log(this.tvShows); */
            if (this.movies.length == 0 && this.tvShows.length == 0) {
              alert("Sorry, no results found!");
            }
          })
        )
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
#siteMain {
  background-color: #141414;
  width: 100%;
  padding: 30px;
  min-height: calc(100vh - 70px);
  .containerProducts {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
  }
}
</style>