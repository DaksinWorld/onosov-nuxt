<template>
  <div>
    <div class="container">
      <nav>
        <img class="logo" id='logo' src="../static/img/blacklogo.svg" alt="black-logo">
        <div class="h3" @click=''>
          <h6 tabindex='1'><a href='#home'>Home</a></h6>
          <h6 tabindex='1'><a href='#about'>About</a></h6>
          <h6 tabindex='1'><a href='#services'>Services</a></h6>
          <h6 tabindex='1'><a href='#contact'>Contact</a></h6>
        </div>
        <div class='menu'>
          <input type="checkbox" id="toggler"/>
          <label for="toggler"><img src='../static/img/menu.svg' alt='menu'></label>
          <div class="sidebarMenu" @click='closeSidebar'>
            <h6 tabindex='1'><a href='#home'>Home</a></h6>
            <h6 tabindex='1'><a href='#about'>About</a></h6>
            <h6 tabindex='1'><a href='#services'>Services</a></h6>
            <h6 tabindex='1'><a href='#contact'>Contact</a></h6>
          </div>
        </div>
      </nav>
    </div>
    <div class="picture" id='home'>
      <a class="photo">
        <h1>Welcome to Onosov Business</h1>
        <h4>We Get the IT Job Done</h4>
        <button class='btn'>Book Now</button>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      closeSidebar() {
        document.querySelector('#toggler').checked = false
      }
    }
  }
</script>
<style lang="css" scoped>
@import "static/font/stylesheet.css";

h6, h6 > a {
  font-family: 'Proxima Nova Lt',serif;
  font-weight: 200;
  margin-left: 60px;
  transition: color .2s linear;
}

h1 {
  color: var(--white);
  font-family: 'Times New Roman', serif;
}


h6:hover {
  transition: color .2s linear;
  color: var(--primary);
}

.logo {
  grid-area: logo;
}

.h3 {
  grid-area: h3;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

h4 {
  color: white;
  font-weight: 400;
  text-align: center;
}

.btn {
  font-size: 40px;
  margin-top: 40px;
}

.photo {
  background-attachment: fixed;
  background-image: url("../static/img/kid.webp");
  background-size: cover;
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: radial-gradient(50% 50% at 50% 50%, rgba(242, 245, 105, 0.21) 0%, #F4FF69 100%);
}

nav {
  padding: 70px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: none;
}

@media screen and (max-width: 1331px) {
  .h3 > h6 {
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .h3 {
    display: none;
  }

  .menu {
    display: block;
    position: -webkit-sticky;
  }

  .photo {
    height: 600px;
  }

  h1 {
    font-size: 70px;
  }
}

@media screen and (max-width: 670px) {
  .logo {
    width: 60%;
  }

  h1 {
    text-align: center;
  }
}

input[type="checkbox"] {
  /* display: none не будет работать в ie11 */
  position: absolute;
  left: -9999em;
  background-image: url("../static/img/menu.svg");
}

.sidebarMenu > h6 > a {
  color: white;

}

.sidebarMenu {
  position: fixed;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  margin: 0 -20px;
  padding: 15px 0;
  box-sizing: border-box;
  background: rgba(41,51,77, 0.95);
  color: white;
  z-index: 10;
  transition: transform ease-out 0.3s;
  transform: translateX(-100%);
}

input[type="checkbox"]:checked ~ .sidebarMenu {
  transform: translateX(0);
}

</style>
