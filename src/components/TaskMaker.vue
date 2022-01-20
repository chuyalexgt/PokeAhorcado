<template>
    <div class="w-5/6 md:w-5/12 bg-zinc-100 drop-shadow-lg p-4 rounded-lg
    border-t-8 border-t-blue-800 flex flex-col">
      <h2 class="font-bold tracking-wide">Add new task ✏️</h2>
      <div class="w-full border-t-4 border-blue-500 rounded-full mb-4"/>
      <input type="text" name="task" placeholder="Some Task" class="w-full mb-4"
      v-model="task.text" @keydown.enter="addNewTask()">
      <div class="flex justify-start items-center gap-1">
        <label for="priority" class="p-1">Important Task</label>
        <input type="checkbox" value="yes" name="priority" class="accent-blue-800"
        v-model="task.isImportant">
      </div>
      <ChButton class="self-center mt-4 mb-2 shadow-lg" buttonText = 'Add Task' fontColor = 'rgba(0,0,0)'
      bgColor = '#fff' borderColor = 'rgb(30 64 175)' @click="addNewTask()"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'TaskMaker',
  created() {},
  data() {
    return {
      task: {
        text: '',
        isImportant: '',
      },
    };
  },
  props: {},
  methods: {
    ...mapActions(['newTask']),
    addNewTask() {
      setTimeout(() => {
        this.newTask(this.task);
        this.task = {
          text: '',
          isImportant: '',
        };
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
input{
  @apply focus:outline-4 outline-blue-600 shadow-sm p-1 rounded-md;
}
</style>
