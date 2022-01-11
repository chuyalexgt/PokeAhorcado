<template>
  <div id="container">
    <div class="box">
      <span></span>
      <div class="content">
        <slot name="title" />
        <slot />
        <div class="action">
          <slot name="action" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChGlassCard',
  mounted() {
    const container = document.getElementById('container');
    container.style.setProperty('--width', this.width);
    container.style.setProperty('--height', this.height);
    container.style.setProperty('--gradient_one', this.gradient_1);
    container.style.setProperty('--gradient_two', this.gradient_2);
  },
  data() {
    return {};
  },
  props: {
    width: {
      type: String,
      default: '65vw',
    },
    height: {
      type: String,
      default: 'auto',
    },
    gradient_1: {
      type: String,
      default: '#0f84f1',
    },
    gradient_2: {
      type: String,
      default: '#0f44f1',
    },
  },
  methods: {},
  computed: {
    cardTitle() {
      return (
        this.title.charAt(0).toUpperCase() +
        this.title.substring(1, this.title.length)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  // --width: 400px;
  // --height: 300px;
  // --gradient_one: #ffffff00;
  // --gradient_two: #0ff180;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}
#container .box {
  position: relative;
  width: var(--width);
  height: var(--height);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
#container .box::before {
  position: absolute;
  content: '';
  top: 0;
  left: calc(var(--width) * 0.35);
  width: 30%;
  height: 100%;
  border-radius: 8px;
  transform: skewX(15deg);
  background: linear-gradient(315deg, var(--gradient_one), var(--gradient_two));
  transition: 0.5s;
}
#container .box::after {
  position: absolute;
  content: '';
  top: 0;
  left: calc(var(--width) * 0.35);
  width: 30%;
  height: 100%;
  background: linear-gradient(315deg, var(--gradient_one), var(--gradient_two));

  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
}
#container .box:hover:before,
#container .box:hover:after {
  transform: skewX(0deg);
  left: calc(var(--width) * 0.12);
  width: 75%;
}
#container .box span {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  pointer-events: none;
}
#container .box span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
#container .box:hover span::before {
  top: -35px;
  left: 5%;
  width: 7vw;
  min-width: 100px;
  min-height: 100px;
  height: 7vw;
  opacity: 1;
}
#container .box span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  animation-delay: -1s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
#container .box:hover span::after {
  bottom: -35px;
  right: 5%;
  width: 7vw;
  min-width: 100px;
  min-height: 100px;
  height: 7vw;
  opacity: 1;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}
#container .box .content {
  z-index: 1;
  width: var(--width);
  left: 0;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  position: relative;
  transform: 1s;
  color: #fff;
  .action {
    opacity: 0;
  }
}
#container .box:hover .content {
  left: -25px;
  padding: 4rem 3rem;
  width: calc(var(--width) * 0.75);
  .action {
    opacity: 1;
  }
}
</style>
