<template>
  <div class="menu">
    <div class="toggle">
      <ion-icon name="add-outline"></ion-icon>
    </div>
    <li style="--i:0;">
      <a href="">
        <ion-icon name="home-outline"></ion-icon>
      </a>
    </li>
    <li style="--i:1;">
      <a href="">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </li>
    <li style="--i:2;">
      <a href="">
        <ion-icon name="logo-slack"></ion-icon>
      </a>
    </li>
    <li style="--i:3;">
      <a href="">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
    </li>
    <li style="--i:4;">
      <a href="">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>
    <li style="--i:5;">
      <a href="">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  name: 'CircularMenu',
  mounted() {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    toggle.onclick = function() {
      menu.classList.toggle('active');
    };
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-icon {
  color: #000;
}
.menu {
  position: relative;
  min-width: 200px;
  min-height: 200px;
  width: 25vw;
  height: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    position: absolute;
    z-index: 9998;
    left: 0;
    list-style: none;
    transform-origin: 12.5vw;
    font-size: 2rem;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform: rotate(0deg) translateX(10vw);
    @media (max-width: 800px) {
      font-size: 1.5rem;
      transform-origin: 100px;
      transform: rotate(0deg) translateX(80px);
    }
  }
}
.menu.active li {
  transform: rotate(calc(360deg / 6 * var(--i)));
}
.menu li a {
  background: #fff;
  min-width: 40px;
  min-height: 40px;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(calc(360deg / -6 * var(--i)));
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
}
.toggle {
  position: absolute;
  z-index: 9999;
  min-width: 60px;
  min-height: 60px;
  width: 7.5vw;
  height: 7.5vw;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  transition: 1s;
  font-size: 3rem;
}
.menu.active .toggle {
  transform: rotate(315deg);
}
</style>
