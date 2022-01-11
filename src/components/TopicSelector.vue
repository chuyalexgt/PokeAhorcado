<template>
  <div
    class="card-container flex flex-col justify-start align-center flex-wrap"
  >
    <h1 class="p-10 text-3xl">Selecciona un tema</h1>
    <div class="flex w-full justify-center flex-wrap">
      <button
        class="topic-card"
        v-for="(topic, index) in topics"
        :key="index"
        :class="topic.color"
        @click="$emit('topicSelected', topic.name.toLowerCase())"
      >
        <mdicon :name="topic.icon" size="100" class="my-5" />
        {{ topic.name }}
      </button>
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
        {name: 'Vue', icon: 'vuejs', color: 'green-up'},
        {name: 'Firebase', icon: 'firebase', color: 'orange-up'},
        {name: 'Tailwind', icon: 'tailwind', color: 'blue-up'},
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
  background: #ffdde0;
  min-height: 100vh;
  padding: 70px 10px 35px 10px;
  @media screen and (min-height: 800px) {
    min-height: 30vh;
  }
}
.topic-card {
  @apply flex flex-col justify-center shadow-2xl rounded-3xl
  w-full sm:w-1/2 md:w-3/12 p-14 m-5 font-bold text-xl text-gray-700;
  align-items: center;
}
.green-up {
  background: linear-gradient(225deg, #0afd25, #08d420);
  transition: box-shadow 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.green-up:hover {
  box-shadow: -5px 5px 10px #06a519, 5px -5px 10px #0cff2e;
}
.green-up:active {
  background: linear-gradient(225deg, #08d420, #0afd25);
}
.orange-up {
  background: linear-gradient(225deg, #fda40a, #d48a08);
  transition: box-shadow 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.orange-up:hover {
  box-shadow: -5px 5px 10px #a56b06, 5px -5px 10px #ffc70c;
}
.orange-up:active {
  background: linear-gradient(225deg, #d48a08, #fda40a);
}
.blue-up {
  background: linear-gradient(225deg, #0accfd, #08acd4);
  transition: box-shadow 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.blue-up:hover {
  box-shadow: -5px 5px 10px #0686a5, 5px -5px 10px #0cf8ff;
}
.blue-up:active {
  background: linear-gradient(225deg, #08acd4, #0accfd);
}
</style>
