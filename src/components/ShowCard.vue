<template>
  <div class="show-card" @click="goToDetail">
    <img :src="show.image.medium" alt="show name" />
    <h3>{{ show.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    goToDetail() {
      this.$router.push(`/show/${this.show.id}`);
    }
  }
};
</script>

<style scoped>
.show-card {
  cursor: pointer;
  margin: 10px;
}
</style>
