<template>
  <section class="w-full flex justify-center items-center">

    <form v-if="loginSwitch"
    class="w-full md:w-2/3 lg:w-1/3 p-5 bg-slate-100 rounded-xl shadow-lg
    flex flex-col gap-5">
      <h2
      class="font-black text-xl font-sans text-center antialiased
      tracking-wide">
      Iniciar Sesión</h2>
      <div class="flex flex-col gap-1">
       <label for="username">Nombre De Usuario</label>
       <input name="username" type="text">
      </div>
      <div class="flex flex-col gap-1">
        <label for="password">Contraseña</label>
        <div class="relative">
          <input name="password" :type="passwordProps.visibility"
          class="w-full">
            <mdicon :name="passwordProps.icon" class="text-gray-700 flex
            justify-center items-center absolute z-10 top-0 right-0
            w-[37px] h-[32px] bg-slate-500/10 rounded-tr-md rounded-br-md
            shadow-md hover:shadow-lg cursor-pointer"
            @click="changePassState()" />
        </div>
      </div>
      <button type="submit" class="my-4 p-3 bg-blue-200 w-1/3 self-center
      rounded-lg shadow-lg hover:shadow-none transition-all focus:ring-2
      ring-blue-600 focus:bg-blue-400">
        Ingresar</button>
      <p>¿No tienes cuenta?
        <a @click="loginSwitch = !loginSwitch">Registrate</a>
      </p>
    </form>

    <form v-if="!loginSwitch"
    class="w-full md:w-2/3 lg:w-1/3 p-5 bg-slate-100 rounded-xl shadow-lg
    flex flex-col gap-5">
      <h2
      class="font-black text-xl font-sans text-center antialiased
      tracking-wide">
      Crear Cuenta</h2>
      <div class="flex flex-col gap-1">
       <label for="username">Nombre De Usuario</label>
       <input name="username" type="text">
      </div>
      <div class="flex flex-col gap-1">
        <label for="password">Contraseña</label>
        <div class="relative">
          <input name="password" :type="passwordProps.visibility"
          class="w-full">
            <mdicon :name="passwordProps.icon" class="text-gray-700 flex
            justify-center items-center absolute z-10 top-0 right-0
            w-[37px] h-[32px] bg-slate-500/10 rounded-tr-md rounded-br-md
            shadow-md hover:shadow-lg cursor-pointer"
            @click="changePassState()" />
        </div>
      </div>
      <button type="submit" class="my-4 p-3 bg-blue-200 w-1/3 self-center
      rounded-lg shadow-lg hover:shadow-none transition-all focus:ring-2
      ring-blue-600 focus:bg-blue-400">
        Registrar</button>
      <p>¿Ya tienes una cuenta?
        <a @click="loginSwitch = !loginSwitch">Inicia Sesión</a>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'AuthHome',
  created() {},
  data() {
    return {
      loginSwitch: true, // True -> login  false -> Sign in
      passwordProps: {
        icon: 'eye-outline',
        visibility: 'password',
        state: true,
      },
    };
  },
  props: {},
  methods: {
    changePassState() {
      if (this.passwordProps.state) {
        this.passwordProps.icon = 'eye-off-outline';
        this.passwordProps.visibility = 'text';
        this.passwordProps.state = false;
      } else {
        this.passwordProps.icon = 'eye-outline';
        this.passwordProps.visibility = 'password';
        this.passwordProps.state = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input{
  @apply focus:outline-4 outline-blue-600 shadow-sm p-1 rounded-md
}
label{
  @apply font-semibold
}
a{
  @apply underline text-blue-500 font-semibold cursor-pointer
}
</style>
