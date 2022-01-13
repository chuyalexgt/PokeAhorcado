<template>
  <router-view />
</template>
<script>
import './assets/tailwind.css';
export default {
  name: 'App',
  data() {
    return {
      topic: '',
    };
  },
  created() {},
  methods: {
    goBack() {
      this.topic = '';
    },
  },
};
</script>
<style lang="scss">
body{
  background: #3f3f3f;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Ubuntu', sans-serif;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*::-webkit-scrollbar {
  width: 0.8rem;
}
*::-webkit-scrollbar-track {
  background: linear-gradient(
    180deg,
    #ffdde0 0%,
    #d7a7b6 41%,
    #f4b3a4 59%,
    #ffdde0 89%
  );
}
*::-webkit-scrollbar-thumb {
  border-radius: 7px;
  width: 0.6rem;
  background-color: #1a3c5f;
}
.align-center {
  align-items: center;
}
</style>
