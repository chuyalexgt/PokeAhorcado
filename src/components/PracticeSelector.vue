<template>
  <div
    class="card-container flex flex-col justify-start align-center flex-wrap"
  >
    <h1 class="p-10 text-3xl text-white">Selecciona una Práctica</h1>
    <div class="flex w-full justify-center flex-wrap">
      <router-link
        v-for="(topic, index) in topics"
        :to="topic.url"
        :key="index"
        class="topic-card"
      >
        <mdicon :name="topic.icon" size="100" class="my-5" />
        {{ topic.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicSelector',
  created() {},
  data() {
    return {
      topics: [
        {name: 'Vue-Router', icon: 'vuejs', url: '/VRP/home'},
        {name: 'Vuex', icon: 'vuejs', url: '/VXP'},
        {name: 'Formularios', icon: 'note', url: '/FormsView'},
        {name: 'Autenticación', icon: 'account', url: '/Auth'},
        {name: 'Proximamente', icon: 'caution', url: '/404'},
        {name: 'Proximamente', icon: 'caution', url: '/404'},
        {name: 'Proximamente', icon: 'caution', url: '/404'},
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  z-index: 5;
  background: #3f3f3f;
  min-height: 100vh;
  padding: 0 10px 35px 10px;
  @media screen and (min-height: 800px) {
    min-height: 30vh;
  }
}
.topic-card {
  @apply flex flex-col justify-center shadow-2xl rounded-3xl
  w-full sm:w-1/2 md:w-3/12 p-14 m-5 font-bold text-xl text-gray-700;
  align-items: center;
  background: linear-gradient(225deg, #eeeeee, #ffffff);
  transition: box-shadow 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.topic-card:hover {
  box-shadow: -5px 5px 10px #ece5e5, 5px -5px 10px #edf8ee;
}
.topic-card:active {
  background: linear-gradient(225deg, #edf8ee, #e5ece6);
}
</style>
