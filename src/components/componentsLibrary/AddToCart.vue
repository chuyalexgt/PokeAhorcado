<template>
  <div>
    <div class="flex justify-center" v-show="itemAmount > 0">
      <button class="btn text-white" id="btn-" @click="remove()">
        -
      </button>
      <span class="count text-center">{{itemAmount}}</span>
      <button class="btn text-white" id="btn+" @click="add()">
        +
      </button>
    </div>
    <div
      class="flex justify-center w-full"
      @click="addNewToCart()"
      v-show="itemAmount == 0"
    >
      <button class="add-to-cart text-white">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'AddToCart',
  created() {
  },
  mounted() {
    const btn1 = document.getElementById('btn-');
    btn1.addEventListener('click', () => {
      btn1.classList.add('pulse');
      setTimeout(() => btn1.classList.remove('pulse'), 50);
    });
    const btn2 = document.getElementById('btn+');
    btn2.addEventListener('click', () => {
      btn2.classList.add('pulse');
      setTimeout(() => btn2.classList.remove('pulse'), 50);
    });
    // console.log(this.product);
    this.itemAmount = this.initialValue;
  },
  data() {
    return {
      itemAmount: 0,
    };
  },
  computed: {
    productRegister() {
      return {
        ...this.product,
        amount: this.itemAmount,
      };
    },
  },
  props: {
    product: {
      require: true,
      type: Object,
    },
    initialValue: {
      require: false,
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions([
      'addNew', 'removeItem', 'addStock', 'removeStock',
    ]),
    addNewToCart() {
      this.add();
    },
    add() {
      if (this.product.stock != 0) {
        this.itemAmount++;
        this.removeItem(this.product.id);
        this.addNew(this.productRegister);
        this.removeStock(this.productRegister);
      }
    },
    remove() {
      this.itemAmount--;
      this.removeItem(this.product.id);
      this.addNew(this.productRegister);
      this.addStock(this.productRegister);
      if (this.itemAmount < 1) this.removeItem(this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: #008d9d;
  width: 35px;
  height: 35px;
  border-radius: 25px;
  margin: 0 10px;
}
.pulse {
  animation: pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1);
}
.count {
  width: 50px;
  font-size: 1.3rem;
}
.add-to-cart {
  background: #008d9d;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
