<template>
  <div class="VXP-page">
    <div class="flex flex-col w-full align-center justify-center">
      <button @click="toHome()" class=" mb-5 text-white">
        <mdicon name="home" size="30" />
      </button>
      <h2 class="text-2xl font-bold text-white">Práctica Vuex</h2>
    </div>
    <p class="pt-4 px-4 text-center text-white">
      Esta práctica se realizó en el curso de Ignacio Bluuweb con el objetivo de
      aprender a usar vuex
    </p>
    <div class="divider" />
    <div class="flex justify-start flex-col align-center practice-container">
      <h2 class="text-black text-4xl p-5 text-center">
        <span class="font-black letter-spacing">Vuex Store</span> 🏪
      </h2>
      <MyCart />
      <div class="flex flex-row flex-wrap justify-center py-5">
        <ProductCard
          v-for="(product,index) in products"
          :key="index"
          class="my-10 sm:m-10"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import router from '../router';

export default {
  name: 'VXP',
  created() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  },
  computed: {
    ...mapState([
      'products',
    ]),
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
.VXP-page {
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
.practice-container {
  background: #c2fff9;
  width: 100%;
  border-radius: 25px;
  min-height: 100vh;
}
.letter-spacing {
  letter-spacing: 2px;
  font-family: inherit;
}
</style>
