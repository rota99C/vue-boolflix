<template>
  <div id="app">
    <siteHeader />
    <siteMain />

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
import siteHeader from "./components/siteHeader.vue";
import siteMain from "./components/siteMain.vue";

export default {
  name: "App",
  components: {
    CountryFlag,
    siteHeader,
    siteMain,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
