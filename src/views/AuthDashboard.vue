<template>
  <section class="w-full flex-col md:flex-row flex justify-around items-center
  gap-2 py-7">
    <ToDoList/>
    <TaskMaker/>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'AuthDashboard',
  created() {
    this.loadUserTasks();
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    ...mapActions(['loadUserTasks']),
  },

};
</script>

<style lang="scss" scoped>

</style>
