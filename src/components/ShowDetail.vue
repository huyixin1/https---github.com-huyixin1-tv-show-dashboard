<template>
  <div v-if="show">
    <h1>{{ show.name }}</h1>
    <img :src="show.image.original" alt="show name" />
    <p v-html="show.summary"></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      show: null
    };
  },
  created() {
    const { id } = this.$route.params;
    axios.get(`http://api.tvmaze.com/shows/${id}`).then(response => {
      this.show = response.data;
    });
  }
};
</script>
