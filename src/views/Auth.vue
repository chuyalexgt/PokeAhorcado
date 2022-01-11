<template>
    <div class="VPR-page">
    <section class="flex flex-col w-full align-center">
      <div class="flex flex-col w-full align-center">
        <button @click="toHome()" class="mb-5">
          <mdicon name="home" size="30" class="text-white" />
        </button>
        <h2 class="text-2xl font-bold text-white text-center">Autenticación de Usuarios</h2>
      </div>
      <p class="pt-4 text-white text-center w-4/5 min-w-[300px]">
        Esta practica tiene como objetivo conocer el procedimiento para realizar una
        autenticación de usuario utilizando los servicios de Firebase
      </p>
      <div class="divider" />
    </section>
    <section>
      <PrimaryBtn/>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Auth',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
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
</style>
