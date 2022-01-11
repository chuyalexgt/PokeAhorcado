<template>
  <ChGlassCard gradient_1="#77ACF1" gradient_2="#3EDBF0">
    <template v-slot:title>
      <h2 class="text-2xl font-bold capitalize my-5">{{ response.id }}</h2>
    </template>
    <template v-slot:default>
      <p class="text-lg">
        {{ response.title }}
      </p>
    </template>
  </ChGlassCard>
</template>

<script>
export default {
  name: 'DinamicView',
  created() {
    this.fetchApi();
  },
  data() {
    return {
      response: {id: '', title: ''},
    };
  },
  props: {},
  methods: {
    async fetchApi() {
      try {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`,
        );
        if (!response.ok) throw Error(response.status);
        response = await response.json();
        this.response = response;
      } catch (error) {
        this.response = {
          id: 'Not found',
          title: 'we couldn\'t find an item with that id',
        };
      }
    },
  },
  watch: {
    $route() {
      this.fetchApi();
    },
  },
};
</script>

<style lang="scss" scoped></style>
