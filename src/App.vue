<template>
  <div id="app">
    <input type="text" placeholder="Digita il nome di un film" />
    <button @click="submitSearch">cerca</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  methods: {
    submitSearch() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=7f9dcddd316d242d826f1a99e0924dcb&language=it%3DIT&query=venom&page=1&include_adult=false"
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  /*   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
}
</style>
