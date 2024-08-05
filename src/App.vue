<template>
  <div id="app">
  
    <header>
      <h1>TV Show Dashboard</h1>
      <SearchBar @search="handleSearch" />
    </header>
    <h1>{{ message }}</h1>
    <router-view :key="$route.fullPath" />
    
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';

export default {
  data() {
    return {
      message: null
    };
    },
  components: {
    SearchBar
  },
  methods: {
    async handleSearch(query) {
      try {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
        if (response.data.length > 0) {
          const show = response.data[0].show; // Get the first show in the results
          this.$router.push(`/show/${show.id}`);
        } else {
          this.message = "There is no show";
        }
      } catch (error) {
        console.error('Error searching for show:', error);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  margin: 0;
}
</style>
