<template>
  <div class="VPR-page">
    <section class="flex flex-col w-full align-center">
      <div class="flex flex-col w-full align-center">
        <button @click="toHome()" class="mb-5">
          <mdicon name="home" size="30" class="text-white" />
        </button>
        <h2 class="text-2xl font-bold text-white">Creacion de formularios</h2>
      </div>
      <p class="pt-4 text-white text-center w-4/5 min-w-400">
        Esta practica tiene como unico objetivo el conocer los distintos tipos
        de entrada de datos en los formularios, ademas de comprender como se
        realiza un submit, validaciones de datos y uso de v-model. Despues se
        almacenanran los registros en local storage
      </p>
      <div class="divider" />
    </section>
    <section
      class="w-full flex flex-col flex-nowrap lg:flex-row justify-center
       align-center"
    >
      <FormCard />
      <CustomForm />
    </section>
    <FormRegisterTable />
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'VRP',
  created() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  },
  data() {
    return {
      formData: {
        name: '',
        date: '',
        age: '',
        genre: '',
        city: '',
        profession: '',
      },
    };
  },
  props: {},
  methods: {
    toHome() {
      router.push('/');
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
.min-w-400 {
  min-width: 300px;
}
</style>
