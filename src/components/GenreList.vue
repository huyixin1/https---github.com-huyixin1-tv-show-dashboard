<template>
  <div>
    <h2>{{ genre }}</h2>
    <div class="show-list">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<script>
import ShowCard from './ShowCard.vue';

export default {
  props: ['genre', 'shows'],
  components: {
    ShowCard
  }
};
</script>

<style scoped>
.show-list {
  display: flex;
  overflow-x: auto;
}
</style>
