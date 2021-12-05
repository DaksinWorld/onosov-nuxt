<template>
  <div class="sidebar" v-if="sidebar">
      <span class="sidebar-close" @click="close">&times;</span>
      <div class="sidebar-content">
        <p>Добро пожаловать в систему по учету заявок в нашем банке. Здесь вы найдете исчерпывающую информацию про систему и заявки</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: () => this.$store.commit('closeSidebar')
    }
  },
  computed: {
    sidebar(){
      return this.$store.state.sidebar
    }
  },
}
</script>

<style scoped>
.sidebar {
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #29334D;
  height: 0;
}

.sidebar:after{
  height: 100%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
