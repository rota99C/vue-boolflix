<template>
  <div class="singolo">
    <img :src="image" alt="" />
    <div class="info">
      <h2>{{ title }}</h2>
      <div class="flag">
        <country-flag
          :country="original_language == 'en' ? 'gb' : original_language"
          size="normal"
        />
      </div>
      <div class="vote_original">
        <p>{{ original_title }}</p>
        <p>{{ Math.ceil(vote / 2) }}</p>
      </div>

      <!-- {{ original_language }} -->
      <!-- eccezione: UK, nella API registrata come EN, nel componente CountryFlag come GB -->

      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag,
  },
  props: {
    image: String,
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    description: String,
  },
};
</script>

<style lang="scss">
.singolo {
  width: 200px;
  height: 290px;
  margin-bottom: 40px;
  position: relative;
  margin: 10px 10px;

  img {
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .info {
    position: absolute;
    width: 200px;
    height: 290px;
    background-color: black;
    visibility: hidden;
    padding: 10px 10px;
    .flag {
      position: absolute;
      width: 52px;
      height: 39px;
      top: -3px;
      right: -5px;
      margin-bottom: 5px;
    }
    h2 {
      margin-top: 10px;
      color: red;
    }
    .vote_original {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      color: lightgray;
    }
    .description {
      overflow-y: auto;
      height: 96px;
      color: white;
    }
  }
}
.singolo:hover .info {
  visibility: visible;
}
</style>