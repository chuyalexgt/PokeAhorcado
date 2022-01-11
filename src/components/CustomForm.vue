<template>
  <form
    class="w-full lg:w-3/5 m-5 lg:m-10 card-design"
    @submit.prevent="submitAction()"
  >
    <input
      type="text"
      id="name"
      v-model.trim="name"
      placeholder="Nombre"
      required
    />
    <input
      type="date"
      id="date"
      v-model="formData.date"
      placeholder="Fecha de nacimiento"
      required
    />
    <input
      type="number"
      id="age"
      v-model="formData.age"
      placeholder="Edad"
      max="120"
      min="0"
      maxlength="3"
      required
    />
    <div class="flex justify-around">
      <div class="radio-input align-center">
        <input
          type="radio"
          id="male"
          v-model="formData.genre"
          value="Masculino"
          required
        />
        <label for="male" class="mt-3 text-white px-2">Masculino</label>
      </div>
      <div class="radio-input align-center">
        <input
          type="radio"
          id="female"
          v-model="formData.genre"
          value="Femenino"
          required
        />
        <label for="male" class="mt-3 text-white px-2">Femenino</label>
      </div>
      <div class="radio-input align-center">
        <input
          type="radio"
          id="other"
          v-model="formData.genre"
          value="Otro"
          required
        />
        <label for="male" class="mt-3 text-white px-2">Otro</label>
      </div>
    </div>
    <input
      type="text"
      id="city"
      v-model="formData.city"
      placeholder="Ciudad de Residencia"
      required
    />
    <input
      type="text"
      id="profession"
      v-model="formData.profession"
      placeholder="Profesión"
      required
    />
    <ChButton :buttonText="actionText" class="mt-5" :submit="true" />
  </form>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'CustomForm',
  mounted() {
    this.loadLocalData();
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapState(['formData', 'action']),
    actionText() {
      let message;
      this.action == 'create' ? (message = 'Registrar') : null;
      this.action == 'edit' ? (message = 'Editar') : null;
      return message;
    },
    name: {
      get() {
        return this.formData.name;
      },
      set(value) {
        this.updateName(value);
      },
    },
    date: {
      get() {
        return this.formData.date;
      },
      set(value) {
        this.updateDate(value);
      },
    },
    age: {
      get() {
        return this.formData.age;
      },
      set(value) {
        this.updateAge(value);
      },
    },
    genre: {
      get() {
        return this.formData.genre;
      },
      set(value) {
        this.updateGenre(value);
      },
    },
    city: {
      get() {
        return this.formData.city;
      },
      set(value) {
        this.updateCity(value);
      },
    },
    profession: {
      get() {
        return this.formData.profession;
      },
      set(value) {
        this.updateProfession(value);
      },
    },
  },
  methods: {
    ...mapActions([
      'updateName',
      'updateDate',
      'updateAge',
      'updateGenre',
      'updateCity',
      'updateProfession',
      'clearData',
      'loadLocalData',
    ]),
    submitAction() {
      this.clearData();
    },
  },
};
</script>

<style lang="scss" scoped>
.card-design {
  border-radius: 25px;
  box-shadow: 0 0px 6px rgb(27, 26, 26);
}
form.card-design {
  @apply flex flex-col justify-start p-5;
}
form.card-design {
  background: #191919;
  min-height: 60vh;
}
.radio-input {
  @apply flex flex-row justify-center;
}
input {
  @apply mt-3 block px-3 py-2 border border-gray-300 rounded-md text-sm
  shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500
  focus:ring-1 focus:ring-blue-500;
  &:disabled {
    @apply bg-gray-50 text-gray-500 border-gray-200 shadow-none;
  }
}
</style>
