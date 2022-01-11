<template>
  <button :type="submit ? 'submit':'' " :disabled="disabledState">
    <a id="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {{ buttonText }}
    </a>
  </button>
</template>

<script>
export default {
  name: 'ChButton',
  mounted() {
    const colorAux = this.fontColor.substring(5, this.fontColor.length - 1);
    const color = `rgba(${colorAux},0.4)`;
    const hoverColor = `rgba(${colorAux})`;
    const button = document.getElementById('button');
    button.style.setProperty('--color_btn', color);
    button.style.setProperty('--hoverColor_btn', hoverColor);
    button.style.setProperty('--background_btn', this.bgColor);
    button.style.setProperty('--border_btn', this.borderColor);
    this.width != '' ? (button.style.width = this.width) : null;
  },
  data() {
    return {};
  },
  props: {
    buttonText: {
      type: String,
      default: 'Button',
    },
    fontColor: {
      type: String,
      default: 'rgba(255,255,255)',
    },
    bgColor: {
      type: String,
      default: '#262c37',
    },
    borderColor: {
      type: String,
      default: 'rgb(17, 161, 250)',
    },
    width: {
      type: String,
      default: '',
    },
    submit: {
      type: Boolean,
      default: false,
    },
    disabledState: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#button {
  --background_btn: #1d2431;
  --color_btn: rgb(255, 255, 255, 0.4);
  --hoverColor_btn: rgb(255, 255, 255, 1);
  --border_btn: rgb(7, 161, 250);
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color_btn);
  background: var(--background_btn);
  letter-spacing: 2px;
  font-size: 1rem;
  transition: 0.4s;
}
button:disabled {
  background: var(--background_btn) !important;
  a span {
    background: rgb(241, 17, 17);
  }
  a {
    color: #5b5c5e !important;
  }
}
#button:hover {
  color: var(--hoverColor_btn);
}
a span {
  display: block;
  position: absolute;
  background: var(--border_btn);
}
a span:nth-child(1) {
  left: 0;
  bottom: 0;
  width: 3px;
  height: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s;
}
a:hover span:nth-child(1) {
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 0.25s;
}
a span:nth-child(2) {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s;
}
a:hover span:nth-child(2) {
  transform: scaleY(1);
  transform-origin: left;
  transition: transform 0.25s;
}
a span:nth-child(3) {
  right: 0;
  top: 0;
  width: 3px;
  height: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s;
  transition-delay: 0.25s;
}
a:hover span:nth-child(3) {
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 0.25s;
  transition-delay: 0.25s;
}
a span:nth-child(4) {
  right: 0;
  top: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s;
  transition-delay: 0.25s;
}
a:hover span:nth-child(4) {
  transform: scaleY(1);
  transform-origin: left;
  transition: transform 0.25s;
  transition-delay: 0.25s;
}
</style>
