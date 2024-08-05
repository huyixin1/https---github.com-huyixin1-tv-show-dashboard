<template>
  <div>
    <GenreList v-for="(shows, genre) in groupedShows" :key="genre" :genre="genre" :shows="shows" />
  </div>
</template>

<script>
import axios from 'axios';
import GenreList from './GenreList.vue';

export default {
  components: {
    GenreList
  },
  data() {
    return {
      shows: []
    };
  },
  computed: {
    groupedShows() {
      const groups = {};
      this.shows.forEach(show => {
        show.genres.forEach(genre => {
          if (!groups[genre]) groups[genre] = [];
          groups[genre].push(show);
        });
      });
      return groups;
    }
  },
  created() {
    axios.get('http://api.tvmaze.com/shows').then(response => {
      this.shows = response.data;
    });
  }
};
</script>