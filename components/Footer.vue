<template>
  <footer id='contact'>
    <img class='logo' width='450px' height='120px' src='../static/img/logo.svg' alt='logo'>
    <div class='cont'>
      <h6>Info</h6>
      <h6><nuxt-link to='/marketing'>Marketing</nuxt-link></h6>
      <h6>Support</h6>
    </div>
    <div class='icons'>
      <a href='#' target='_blank'>
        <img width='60px' height='60px' src='../static/img/instagram.svg' alt='instagram'>
      </a>
      <a href='#' target='_blank'>
        <img width='60px' height='60px' src='../static/img/telegram.svg' alt='telegram'>
      </a>
    </div>
    <h6 class='footer-info'>
      @ {{ new Date().getFullYear() }} Onosov Business <br> businessonosov@gmail.com
    </h6>
    <h6 class='footer-info'>
      Designed by Danil Onosov
    </h6>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
  background-color: #29334D;
  padding: 10px 15px 60px 15px;
  width: 100%;
}

.footer-info {
  font-size: 18px;
  font-weight: 300;
  margin: 5px 0;
  text-align: center;
}

a {
  color: white;
}

img {
  margin-top: 25px;
}

.icons {
  margin-top: 10px;
  margin-bottom: 15px;
}

.icons > a {
  margin-left: 8px;
  margin-right: 8px;
}

h6 {
  font-family: 'Montserrat', serif;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 400;
  color: white;
}

.cont {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 550px){
  .logo {
    width: 100%;
  }

  h6 {
    font-size: 24px;
  }
}
</style>
