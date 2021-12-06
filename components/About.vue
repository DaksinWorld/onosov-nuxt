<template>
  <div>
    <div class='second-container'>
      <a id='about'>
        <div class='about-cont'>
          <h3>About Us</h3>
          <h6>
            Here at Onosov Business, our mission goes beyond providing technology solutions.
            We help our clients achieve the highest level of operational excellence so they can focus on what matters - their core business.
            Through our comprehensive range of services, we ensure our clients stay ahead in the ever-changing technology landscape and maximize their overall success.
          </h6>
          <div class='photo' lazy-background="../static/img/codebg.webp">

          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.second-container {
  display: flex;
  justify-content: center;
}

.about-cont {
  width: 70%;
  padding: 25px 0;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  margin-top: 125px;
  margin-bottom: 125px;
}

h6 {
  margin-top: 20px;
  width: 60%;
}

.photo {
  position: absolute;
  background-attachment: fixed;
  background-size: cover;
  height: 470px;
  width: 44%;
  right: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 1630px) {
  .photo {
    right: 7px;
    width: 50%;
  }

}

@media screen and (max-width: 1024px) {
  h3 {
    font-size: 40px;
  }
  h6 {
    font-size: 23px;
  }
}

@media screen and (max-width: 768px) {
  h3 {
    font-size: 44px;
  }
  h6 {
    font-size: 26px;
    width: 83%;
  }
  .photo {
    display: none;
  }

  .about-cont {
    width: 100%;
  }
}

</style>
