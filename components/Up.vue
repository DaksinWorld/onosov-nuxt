<template>
  <a class="back_to_top" href='#logo' title="Наверх">
    <img src='../static/img/up.svg' alt='up'>
  </a>
</template>

<script>
export default {
  mounted() {
    (function () {
      function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
          goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
          goTopBtn.classList.remove('back_to_top-show');
        }
      }

      const goTopBtn = document.querySelector('.back_to_top');

      window.addEventListener('scroll', trackScroll);
    })();
  }
}
</script>

<style scoped>
.back_to_top {
  position: fixed;
  bottom: 80px;
  right: 40px;
  z-index: 9999;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #444;
  cursor: pointer;
  display: none;
}

.back_to_top-show {
  display: block;
}
</style>
