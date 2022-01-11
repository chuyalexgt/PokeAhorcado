<template>
  <div
    class="
      w-full
      sm:w-5/6
      card-design
      flex flex-col
      mt-3
      justify-center
      align-center
      flex-nowrap
    "
  >
    <h1
      class="px-4 pt-4 w-full title text-center text-3xl
      font-black tracking-wide antialiased"
    >
      Tabla de Registros
    </h1>
    <div class="divider" />
    <div class="py-4 w-full table">
      <ol>
        <li class="table-element"
        v-for="(item, index) in formRegister" :key="index">
          <div class="w-full sm:w-3/4 flex flex-row">
            <div>{{ item.name }}</div>
            <div>{{ `${item.age} Años` }}</div>
            <div>{{ item.genre }}</div>
          </div>
          <div class="w-full sm:w-1/4 flex
          justify-center sm:justify-end my-3 sm:my-0">
            <button class="edit-btn p-2" @click="editRegister(item.id)">
              <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button class="delete-btn p-2" @click="deleteRegister(item.id)">
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'FormRegisterTable',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    ...mapActions(['editRegister', 'deleteRegister']),
  },
  computed: {
    ...mapState(['formRegister']),
  },
};
</script>

<style lang="scss" scoped>
.card-design {
  border-radius: 10px;
  box-shadow: 0 0px 6px rgb(27, 26, 26);
  overflow-y: scroll;
  padding-left: 0.8rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    width: 0.6rem;
    background-color: #1a3c5f;
  }
}
div.card-design {
  background: #f5f4f4;
  height: 70vh;
}

.profile-skeleton {
  color: #fff;
  font-size: 8rem;
}
.title {
  position: sticky;
}
.table {
  height: 80%;
}
.divider {
  content: "";
  width: 80%;
  height: 1px;
  border-top: 3px solid rgb(0, 0, 0);
  margin: 15px;
}
.table-element {
  @apply even:bg-white odd:bg-gray-300 w-full p-3 rounded-md flex
  justify-start items-center flex-nowrap flex-col sm:flex-row;
  div div {
    @apply mx-3 w-1/3 text-center;
  }
}
button {
  @apply rounded-lg shadow-lg mx-5;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:active {
    box-shadow: none;
  }
  ion-icon {
    font-size: 1.5rem;
    @apply flex justify-center items-center;
  }
}
.edit-btn {
  background: rgb(241, 255, 41);
}
.delete-btn {
  background: rgb(255, 1, 1);
}
</style>
