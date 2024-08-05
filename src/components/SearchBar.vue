<template>
  <input type="text" v-model="query" @input="search" placeholder="Search for TV shows..." />
  <button @click="search">Search</button>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}

input {
  flex: 1;
  margin-right: 10px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>