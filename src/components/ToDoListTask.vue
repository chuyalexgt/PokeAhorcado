<template>
    <div class="w-full p-2 m-1 bg-zinc-200 border-l-4 border-blue-800
    hover:border-l-8 transition-all cursor-pointer"
    :class="{'line-through text-gray-500 bg-zinc-300' : information.isComplete,
    'bg-red-200 border-red-800 font-bold' : information.isImportant}"
    @click="taskStateSwitch(information.id)">
      {{information.text}}
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
    ...mapActions(['taskStateSwitch']),
  },
};
</script>

<style lang="scss" scoped></style>
