<template>
  <div class="flex flex-col justify-center align-center p-5 product-card">
    <mdicon :name="data.icon" size="60" class="my-5" />
    <h4 class="text-black font-semibold text-xl mb-4 capitalize tracking-wider">
      {{data.title}}
    </h4>
    <p class="text-center mb-4 text-black">
      {{data.info}}
    </p>
    <span class="pb-5">Stock: {{data.stock}}</span>
    <AddToCart :product="data" />
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  created() {},

  data() {
    return {};
  },
  props: {
    data: {
      require: true,
      type: Object,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 25%;
  min-width: 320px;
  height: 400px;
  background: #71dfe7;
  border-radius: 0 0 15px 15px;
}
.product-card::before {
  content: '';
  position: absolute;
  top: -25px;
  width: 100%;
  height: 15px;
  margin: 10px 0 0 0;
  background: #008d9d;
  border-radius: 15px 15px 0 0;
}
</style>
