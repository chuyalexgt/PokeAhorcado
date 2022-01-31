<template>
    <div class="w-full p-2 m-1 flex flex-row relative bg-zinc-200 border-l-4
    border-blue-800 hover:border-l-8 transition-all cursor-pointer"
    :class="{'line-through text-gray-500 bg-zinc-300' : information.isComplete,
    'bg-red-200 border-red-800 font-bold' : information.isImportant}"
    >
      <span class="w-5/6" @click="taskStateSwitch(information.id)">
      {{information.text}}</span>
      <mdicon name = 'close' class="absolute right-2 cursor-pointer"
      @click="deleteTask(information.id)"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'toDoListTask',
  created() {},
  data() {
    return {
    };
  },
  props: {
    information: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(['taskStateSwitch', 'deleteTask']),
  },
};
</script>

<style lang="scss" scoped></style>
