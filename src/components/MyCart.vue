<template>
  <div class="space">
    <div class="w-1/2 my-cart flex justify-between align-center px-5 my-5">
      <button class="w-full flex justify-between align-center btn">
        <div class="flex justify-around">
          <mdicon name="cart" size="30" class="pr-5" />
          <span class="text-white text-lg">My cart</span>
        </div>
        <span class="dot-counter text-white flex justify-center align-center">{{
      cartItemsCounter
        }}</span>
      </button>
      <div class="cart-summary" v-if="cartLength > 0">
        <div
          v-for="(item,index) in cart"
          :key="index"
          class="flex justify-between align-center h-20 "
        >
          <div class="flex justify-start align-center w-1/2">
            <mdicon :name="item.icon" size="40" class="mr-5" />
            <span
              class="text-white font-semibold text-xl
          capitalize tracking-wider elipsis"
            >
              {{item.title}}
            </span>
          </div>
          <div class="w-1/2 flex justify-center aligm-center">
            {{item.amount}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'MyCart',
  created() {
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartItemsCounter', 'cartLength']),
  },
  props: {},
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.space {
  width: 100%;
  height: 100px;
  position: relative;
  @apply flex justify-center;
}
.cart-summary {
  display: none;
}
.elipsis {
  text-overflow: ellipsis;
}
.my-cart {
  position: absolute;
  z-index: 99999;
  height: 50px;
  min-width: 350px;
  background: linear-gradient(145deg, #00a8ba, #008d9d);
  box-shadow: 16px 16px 32px #a5d9d4, -16px -16px 32px #dfffff;
  border-radius: 25px;
  transition: height 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  @media (max-width: 400px) {
    width: 95%;
    min-width: 0;
  }
}
.my-cart:focus-within {
  align-content: center;
  justify-content: start;
  height: 100vh;
  flex-flow: column;
  box-shadow: none;

  .btn {
    width: 40%;
    @media (max-width: 800px) {
      width: 100%;
    }
    margin: 1rem 0;
  }
  .cart-summary {
    display: flex;
    width: 100%;
    flex-flow: column;
  }
}
.my-cart:hover {
  background: linear-gradient(145deg, #008d9d, #00a8ba);
}
.dot-counter {
  background: #ff5252;
  width: 35px;
  height: 35px;
  border-radius: 25px;
}
</style>
