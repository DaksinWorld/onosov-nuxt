<template>
  <div class='fullwidth' id='services'>
    <div class='second-container'>
      <div class='card'>
        <h3>Feedback Form</h3>
        <form @submit.prevent>
          <label for='name'>Your name</label>
          <input v-model='name' type='text' id='name'>
          <label for='email'>Your email</label>
          <input v-model='email' type='text' id='email'>
          <label>What kind of work to do?</label>
          <div class='buttons'>
            <div v-for='(b,i) in ["SEO", "Front-end", "Site design", "Marketing", "HTML/CSS", "Online store"]'>
              <button :class='{"active": id === i}' @click='makeActive(i)'>{{ b }}</button>
            </div>
          </div>
          <button class='submit btn' @click='sendEmail'>Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: null,
      name: '',
      email: '',
    }
  },
  methods: {
    makeActive(i){
      console.log(this.id)
      console.log(i)
      this.id = i
    },
    async sendEmail(){
      let text;

      if(this.id === 0){
        text = 'seo'
      } else if(this.id === '1'){
        text = 'front-end'
      } else if(this.id === '2'){
        text = 'Site design'
      } else if(this.id === '3') {
        text = 'Marketing'
      } else if(this.id === '4') {
        text = 'Html/css'
      } else if(this.id === '5') {
        text = 'Online store'
      }

      await this.$axios.$post('https://vue-field-default-rtdb.europe-west1.firebasedatabase.app/req.json',{
        from: 'businessonosov@gmail.com',
        subject: 'work',
        text: `Новая заявка: От ${this.name} - ${this.email} Надо сделать ${text}`,
      })
    },
  }
}
</script>

<style scoped>
.fullwidth {
  width: 100%;
  background-color: #F6F89A;
  height: auto;
  padding: 20px 10px;
  display: flex;
  align-items: center;
}

.card {
  padding: 15px 30px;
  width: 100%;
  background: var(--white);
  border-radius: 31px;
}

h3 {
  font-weight: 800;
  font-family: 'Proxima Nova Lt',serif;
  color: #29334D;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  color: var(--black);
  margin-top: 15px;
  font-size: 25px;
}

input {
  border: 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  outline:none;
  transition: border .2s linear;
}

.buttons {
  display: flex;
  width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
}

.buttons > div > button {
  padding: 10px 45px;
  font-family: 'Proxima Nova Lt', serif;
  background-color: white;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 30px;
  font-size: 28px;
  margin-right: 10px;
  margin-bottom: 8px;
  margin-top: 8px;
  transition: color .3s ease-out, background-color .3s ease-in;
  color: #29334D;
  white-space: nowrap;
}

.buttons > div > button:hover {
  color: white;
  background-color: var(--dark);
  transition: color .3s ease-out, background-color .3s ease-in;
  box-shadow:
    1px 1px #F6F89A,
    2px 2px #F6F89A,
    3px 3px #F6F89A,
    4px 4px #F6F89A,
    5px 5px #F6F89A,
    6px 6px #F6F89A,
    7px 7px #F6F89A;
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
}

.submit {
  margin-top: 10px;
  font-size: 28px;
  width: 25%;
  background-color: #F6F89A;
  color: var(--black);
  border-radius: 20px;
  padding: 15px 20px;
  font-family: 'Proxima Nova Lt';
  transition: background-color .2s linear;
}

.submit:hover {
  background-color: #29334D;
  transition: background-color,color .2s linear;
  color: white;
}

@media screen and (max-width: 677px) {
  .submit {
    width: 100%;
  }
}
</style>
