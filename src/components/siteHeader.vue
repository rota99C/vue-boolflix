<template>
  <div id="siteHeader">
    <div class="logo">
      <img
        src="https://fontmeme.com/permalink/211121/c072857f28ffed69c9266a55183f4c20.png"
        alt="logo-boolflix"
      />
    </div>
    <div class="searchbar">
      <input
        v-model="queryUtente"
        type="text"
        placeholder="Digita il nome di un film"
        @keyup.enter="search"
      />
      <button @click="search">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EventBus from "../event-bus";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      api_key: "7f9dcddd316d242d826f1a99e0924dcb",
      queryUtente: "",
    };
  },
  methods: {
    search() {
      EventBus.$emit("submitSearch", this.queryUtente);
    },
  },
};
</script>

<style lang="scss">
#siteHeader {
  background-color: #141414;
  height: 70px;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 100%;
    img {
      height: 100%;
    }
  }
  .searchbar {
    input {
      width: 150px;
      height: 30px;
    }
    button {
      height: 30px;
      margin-left: 10px;
      background-color: red;
      width: 30px;
      color: white;
    }
  }
}
</style>