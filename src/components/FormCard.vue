<template>
  <div
    class="w-full sm:w-4/5 lg:w-3/5 m-5 lg:m-10 card-design flex flex-col
        justify-center align-center md:flex-row flex-wrap"
  >
    <div class="p-4 w-1/3 flex justify-center">
      <ion-icon
        name="person-circle-outline"
        class="profile-skeleton"
      ></ion-icon>
    </div>
    <div class="p-4 w-full md:w-2/3 flex flex-col self-start md:self-center">
      <h1
        class="text-white font-bold antialiased tracking-wider
            text-2xl py-4"
      >
        Registro de Usuario
      </h1>
      <p>Nombre: {{formData.name}}</p>
      <p>Fecha De Nacimiento: {{formData.date}}</p>
      <div class="flex flex-col lg:flex-row">
        <p class="w-full lg:w-1/2">Edad: {{`${formData.age} años`}}</p>
        <p class="w-full lg:w-1/2">Género: {{formData.genre}}</p>
      </div>
      <p>Ciudad: {{formData.city}}</p>
      <p>Profesión: {{formData.profession}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'FormCard',
  created() {},
  data() {
    return {
    };
  },
  props: {},
  methods: {},
  computed: {
    ...mapState(['formData']),
  },
};
</script>

<style lang="scss" scoped>
.card-design {
  border-radius: 25px;
  box-shadow: 0 0px 6px rgb(27, 26, 26);
}
div.card-design {
  background: #2d4263;
  min-height: 40vh;
}

.profile-skeleton {
  color: #fff;
  font-size: 8rem;
}
p {
  @apply text-white font-semibold antialiased  text-lg tracking-wide w-full;
  text-overflow: ellipsis;
  white-space: break;
  overflow: hidden;
}
</style>
