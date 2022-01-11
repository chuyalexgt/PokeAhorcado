<template>
    <button
    class="w-fit px-4 py-2 bg-blue-300 font-mono text-lg rounded-lg
    font-extrabold tracking-wide transition-all hover:bg-blue-500
    hover:ring-4 shadow-lg shadow-blue-200/40 hover:shadow-none text-white"
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
