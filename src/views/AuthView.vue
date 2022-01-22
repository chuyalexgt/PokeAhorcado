<template>
    <div class="VPR-page">
    <section class="flex flex-col w-full align-center">
      <div class="flex flex-col w-full align-center">
        <button @click="toHome()" class="mb-5">
          <mdicon name="home" size="30" class="text-white" />
        </button>
        <h2 class="text-2xl font-bold text-white text-center">
          Autenticación de Usuarios
        </h2>
      </div>
      <p class="pt-4 text-white text-center w-4/5 min-w-[300px]">
        Esta practica tiene como objetivo conocer el procedimiento para
        realizar una autenticación de usuario utilizando los servicios
        de Firebase
      </p>
      <div class="divider" />
    </section>
    <section class="w-full h-[50vh] flex justify-center items-center"
    v-if="startPractice">
      <PrimaryBtn textBtn = 'Iniciar Prueba'
      @click="start()"/>
    </section>
    <section class="w-full min-h-[100vh] flex justify-center items-center
    practice-section relative"
    v-if="!startPractice">
      <router-view/>
    </section>
  </div>
</template>

<script>
import router from '../router';
export default {
  name: 'AuthView',
  created() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  },
  data() {
    return {
      startPractice: true,
    };
  },
  props: {},
  methods: {
    toHome() {
      router.push('/');
    },
    start() {
      this.startPractice = !this.startPractice;
      router.push('/Auth/login'); // cambiar a login cuando termines pruebas
    },
  },
};
</script>

<style lang="scss" scoped>
.VPR-page {
  background-color: #353535;
  min-height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 2rem 5px;
}
.divider {
  content: '';
  width: 80%;
  height: 1px;
  border-top: 3px solid rgb(255, 255, 255);
  margin: 15px;
}
.practice-section{
border-radius: 40px;
background: #cfcef8;
box-shadow: inset 22px 22px 44px #8f8eab,
            inset -22px -22px 44px #ffffff;
}
</style>
