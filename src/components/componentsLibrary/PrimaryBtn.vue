<template>
    <button
    class="w-fit px-8 py-4 text-xl bg-blue-400 rounded-lg
    font-extrabold tracking-widest transition-all hover:bg-blue-500
    hover:ring-4 shadow-lg shadow-blue-200/20 hover:shadow-none text-white"
  >
    {{textBtn}}
  </button>
</template>

<script>
// Estos componentes requieren de tailwind 3.0.7//
export default {
  name: 'PrimaryBtn',
  created() {},
  data() {
    return {};
  },
  props: {
    textBtn: {
      require: false,
      default: 'Aceptar',
      type: String,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
