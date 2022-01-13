/* eslint-disable vue/no-multiple-template-root */
<template>
  <section>
    <header class="fixed w-full z-50" id="header">
      <div class="flex flex-row justify-center bg-transparent">
        <div
          class="flex flex-row justify-center align-center p-5
          rounded-b-2xl w-full lg:w-1/2
          bg-gradient-to-b from-blue-500 to-transparent shadow-2xl"
        >
          <img src="../assets/logo.png" alt="" class="w-10 h-10 mx-3" />
          <p
            class="py-2 tracking-wide font-extrabold text-xl font-mono
            text-black"
          >
            Vue 3 + Tailwind + Firebase Notes
          </p>
        </div>
      </div>
    </header>
    <CardContainer v-if="topic != ''" :topic="topic" @goBack="goBack()" />
    <TopicSelector v-if="topic == ''" @topicSelected="topic = $event" />
    <PracticeSelector />
  </section>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      topic: '',
    };
  },
  mounted() {
    const header = document.getElementById('header');
    window.onscroll = function() {
      window.scrollY !== 0 ?
      header.classList.add('scrolling') :
      header.classList.remove('scrolling');
    };
  },
  methods: {
    goBack() {
      this.topic = '';
    },
  },
};
</script>

<style lang="scss" scoped>
header{
  transition: opacity .9s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.scrolling{
  opacity: 0%;
}

</style>
