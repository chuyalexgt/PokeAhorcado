<template>
  <div class="w-5/6 md:w-5/12 bg-zinc-100 drop-shadow-lg p-4 rounded-lg
  border-t-8 border-t-blue-800">
    <h2 class="font-bold tracking-wide">To-Do List 📓</h2>
    <div class="w-full border-t-4 border-blue-500 rounded-full mb-4"/>
    <ToDoListTask v-for="(item,index) in organizedToDoList" :key="index"
    :information = "item"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'ToDoList',
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {
  },
  computed: {
    ...mapGetters(['organizedToDoList']),
  },
};
</script>

<style lang="scss" scoped></style>
