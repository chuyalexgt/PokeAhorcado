<template>
  <div class="VPR-page">
    <div class="flex flex-col w-full align-center">
      <button @click="toHome()" class="mb-5">
        <mdicon name="home" size="30" class="text-white" />
      </button>
      <h2 class="text-2xl font-bold text-white">Práctica Vue Router</h2>
    </div>
    <p class="pt-4 text-white text-center">
      Esta práctica se realizó en el curso de Ignacio Bluuweb con el objetivo de
      aprender a usar vue-router
    </p>
    <div class="divider" />
    <div class="w-full flex justify-center">
      <Router-view></Router-view>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'VRP',
  created() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    toHome() {
      router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.VPR-page {
  background-color: #353535;
  min-height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 2rem 5px;
}
.divider {
  content: '';
  width: 80%;
  height: 1px;
  border-top: 3px solid rgb(255, 255, 255);
  margin: 15px;
}
</style>
