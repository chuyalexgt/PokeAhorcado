<template>
  <div class="container align-center p-5">
    <div class="flex flex-col gap-5">
      <h1 class="text-white text-4xl text-center">
        Buscar ID en JsonPlaceholder</h1>
      <div class="flex flex-row justify-around">
        <input
          type="number"
          min="1"
          max="200"
          v-model="input"
          @keypress.enter="loadRoute()"
          class="number-input"
        />
        <ChButton
          buttonText="Buscar"
          fontColor="rgba(15,15,0)"
          bgColor="rgb(240,240,240)"
          @click="loadRoute()"
        />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PRHome',
  created() {},
  updated() {
    console.log(this.input);
  },
  data() {
    return {
      input: undefined,
    };
  },
  computed: {
    selectedId() {
      if ((this.input === undefined) || (this.input < 1)) return '';
      return `/VRP/home/${this.input}`;
    },
  },
  props: {},
  methods: {
    loadRoute() {
      this.$router.push(this.selectedId);
    },
  },
  watch: {
    input(prev) {
      if (prev < 0) {
        this.input = prev * -1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 120vh;
  background: #343435;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  @apply shadow-2xl rounded-3xl p-6 flex justify-around flex-col;
}
.number-input{
  width: 50%;
  padding: 0.5rem 1.4rem;
  border-radius: 25px;
}
</style>
