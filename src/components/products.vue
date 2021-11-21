<template>
  <div class="singolo">
    <img :src="image" alt="" />
    <div class="info">
      <h1>{{ title }}</h1>
      <p>{{ original_title }}</p>
      <p>
        {{ original_language }}
        <!-- eccezione: UK, nella API registrata come EN, nel componente CountryFlag come GB -->
        <country-flag
          :country="original_language == 'en' ? 'gb' : original_language"
          size="normal"
        />
      </p>
      <p>{{ Math.ceil(vote / 2) }}</p>
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
  },
};
</script>

<style lang="scss">
.singolo {
  width: 200px;
  height: 290px;
  margin-bottom: 40px;
  position: relative;
  margin: 0px 10px;

  img {
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .info {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: yellow;
    visibility: hidden;
  }
}
.singolo:hover .info {
  visibility: visible;
}
</style>