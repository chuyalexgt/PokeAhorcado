<template>
    <div class="w-5/6 md:w-5/12 bg-zinc-100 drop-shadow-lg p-4 rounded-lg
    border-t-8 border-t-blue-800 flex flex-col">
      <h2 class="font-bold tracking-wide">Add New Task ✏️</h2>
      <div class="w-full border-t-4 border-blue-500 rounded-full mb-4"/>
      <input type="text" name="task" placeholder="Some Task" class="w-full mb-4"
      v-model="task.text" @keydown.enter="addNewTask()">
      <div class="flex justify-start items-center gap-1">
        <label for="priority" class="p-1">Important Task</label>
        <input type="checkbox" value="yes" name="priority" class="accent-blue-800"
        v-model="task.isImportant">
      </div>
      <div class="text-center bg-red-200 p-2 rounded-r-full rounded-l-full text-sm
      italic w-2/3 self-center ring-2 ring-red-600 mt-4 shadow-lg shadow-red-300"
      v-if="isEmpty">
        No se puede añadir una tarea vacia
      </div>
      <ChButton class="self-center mt-4 mb-2 shadow-lg" buttonText = 'Add Task' fontColor = 'rgba(0,0,0)'
      bgColor = '#fff' borderColor = 'rgb(30 64 175)' @click="addNewTask()"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {nanoid} from 'nanoid';
export default {
  name: 'TaskMaker',
  created() {},
  data() {
    return {
      task: {
        text: '',
        isImportant: false,
      },
      isEmpty: false,
    };
  },
  props: {},
  methods: {
    ...mapActions(['newTask']),
    addNewTask() {
      if (this.task.text !== '') {
        setTimeout(() => {
          this.newTask({...this.task, id: nanoid(), isComplete: false});
          this.task = {
            text: '',
            isImportant: '',
          };
        }, 500);
      } else {
        this.isEmpty = true;
        setTimeout(() => {
          this.isEmpty = false;
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input{
  @apply focus:outline-4 outline-blue-600 shadow-sm p-1 rounded-md;
}
</style>
