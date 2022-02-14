/* eslint-disable max-len */
<template>
  <section class="w-full bg-gray-400/50 z-50 absolute top-0 left-0
  before:blur-lg h-full flex justify-center items-center rounded-[40px]"
  v-if="modalSwitch">
    <div class="bg-zinc-100 w-5/6 md:w-1/3 min-h-[30%] rounded-xl p-4
    border-t-8 flex justify-center items-center" :class="borderColor">

      <div v-if="requestState === 'loading'" class="flex flex-col
      justify-center items-center gap-5">
        <div class="rounded-full w-5 h-5 animate-ping bg-blue-400"/>
        <p class="text-center">Cargando...</p>
      </div>

      <div v-if="requestState?.state === 'success'" class="flex flex-col
      justify-center items-center">
        <mdicon name="check" class="text-2xl"></mdicon>
        <p class="text-center p-3 font-semibold">{{successManager}}</p>
        <primaryBtn @click="changeRequestState(null)" v-if="requestState?.message !== 'USER_AUTH'"/>
      </div>

      <div v-if="requestState?.state === 'error'" class="flex flex-col
      justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <mdicon name="sad" class="text-2xl"></mdicon>
          <h2 class="font-bold text-xl pt-2">Error</h2>
        </div>
        <p class="text-center p-3 font-semibold">{{errorManager}}</p>
        <primaryBtn @click="changeRequestState(null)"/>
      </div>

    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: 'requestStateModal',
  mounted() {
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    ...mapActions(['changeRequestState']),
  },
  computed: {
    ...mapState(['requestState']),
    borderColor() {
      let colorState = 'border-yellow-500';
      (this.requestState?.state == 'success') && (colorState = 'border-green-500');
      (this.requestState == 'loading') && (colorState = 'border-blue-500');
      (this.requestState?.state == 'error') && (colorState = 'border-red-500');
      return colorState;
    },
    modalSwitch() {
      let state;
      (this.requestState === null) ?
      state = false :
      state = true;
      return state;
    },
    errorManager() {
      let modalInfo;
      if (this.requestState?.message == 'unknown_error') {
        modalInfo = 'No se ha podido establecer una conexion con el servidor';
        return modalInfo;
      }
      if (this.requestState?.message == 'EMAIL_NOT_FOUND') {
        modalInfo = 'El e-mail no se encuentra registrado en el servidor';
        return modalInfo;
      }
      if (this.requestState?.message == 'INVALID_PASSWORD') {
        modalInfo = 'La contraseña ingresada es incorrecta';
        return modalInfo;
      }
      if (this.requestState?.message == 'EMAIL_EXISTS') {
        modalInfo = `El correo ingresado ya se encuentra registrado en el servidor`;
        return modalInfo;
      }
      modalInfo = 'Error desconocido, espere un momento y vuelva a intentarlo';
      return modalInfo;
    },
    successManager() {
      let modalInfo;
      if (this.requestState?.message == 'USER_AUTH') {
        modalInfo = 'Inicio de sesión exitoso, en breve serás redirigido al dashboard';
      }
      if (this.requestState?.message == 'NEW_USER') {
        modalInfo = 'El e-mail ha sido registrado correctamente';
      }
      return modalInfo;
    },
  },
};
</script>

<style lang="scss" scoped></style>
