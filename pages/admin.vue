<template>
  <div class='container'>
    <div v-if='!id'>
      <div>
        <form @submit.prevent='onSubmit'>
          <label for='email'>Email</label>
          <input type='email' id='email' v-model='email'>
          <label for='password'>Password</label>
          <input type='password' id='password' v-model='password'>
          <button class='btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
    <div v-else-if='id === whitelist'>
       <Admin/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: '',
      whitelist: 'fIossiQ9vRQ9JDNRc0HuwSgv9Fm1',
      id: ''
    }
  },
  methods: {
    async onSubmit(){
      const response = await this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADztYrqrDz5DaWoX-GvMkIgzuq2OIaj1c`, {email: this.email, password: this.password, returnSecureToken: true})
      localStorage.setItem('_id', response.localId);
    }
  },
  mounted() {
    this.id = localStorage.getItem('_id')
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 200px;
}

label {
  font-family: 'NAMU 1600';
  font-size: 25px;
  margin-top: 10px;
}

button {
  font-family: 'NAMU 1600';
  font-size: 20px;
  margin-top: 5px;
  border-radius: 5px;
}
</style>
