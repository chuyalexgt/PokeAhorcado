<template>
  <div class="card-container flex justify-center align-center
  flex-wrap flex-row md:flex-nowrap">
    <button
      class="btn order-2 md:order-1"
      :class="{ disabled: position == 0, prev: position != 0 }"
      :disabled="position == 0"
      @click="position--"
    >
      <mdicon name="arrow-left" class="flex justify-center" />
    </button>
    <Card
      :position="position"
      :topic="topic"
      @goBack="this.$emit('goBack')"
      @lastCard="isTheLastCard = $event"
      class="order-1 md:order-2"
    />
    <button
      class="btn order-3 md:order-3"
      :class="{ disabled: isTheLastCard, next: !isTheLastCard }"
      :disabled="isTheLastCard"
      @click="position++"
    >
      <mdicon name="arrow-right" class="flex justify-center" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  created() {},
  data() {
    return {
      position: 0,
      isTheLastCard: false,
    };
  },
  props: {
    topic: {
      type: String,
      default: '',
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  z-index: 5;
  background: #ffdde0;
  min-height: 100vh;
  padding: 70px 10px 35px 10px;
  width: 100%;

}
.btn {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  @apply my-4 mx-8 md:my-0 md:mx-0;
  -webkit-box-shadow: 3px 4px 28px -2px rgba(133, 133, 133, 0.6);
  box-shadow: 3px 4px 28px -2px rgba(133, 133, 133, 0.6);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.disabled {
  box-shadow: none;
  -webkit-box-shadow: none;
  color: gray;
  transition: none;
}
.next:hover {
  transform: translateX(5px);
}

.prev:hover {
  transform: translateX(-5px);
}
</style>
