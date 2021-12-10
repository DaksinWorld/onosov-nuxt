<template>
  <div>
    <h1 class="text-3xl font-bold underline">Admin</h1>
    <input type='search' v-model='search'>
    <table v-for='(d,i) in req'>
      <thead>
        <th>№</th>
        <th>Текст</th>
        <th>Действие</th>
      </thead>
      <tbody>
        <td>{{i}} {{d.id}}</td>
        <td>{{ d.text }}</td>
        <td @click="remove(d.id)">
          <button class='btn'>Удалить</button>
        </td>
      </tbody>
    </table>
    <button @click='logout'>Выйти</button>
  </div>
</template>

<script>
import { DATABASE_URL } from '~/utils/const'

export default {
  data(){
    return{
      data: [],
      search: '',
      logout: () => {
        localStorage.removeItem('_id')
        location.reload()
      }
    }
  },
  async mounted(){
    const request = await this.$axios.$get(`${DATABASE_URL}/req.json`)
    this.data = Object.keys(request).map(id => ({...request[id], id}))
  },
  methods: {
    async remove(i){
      await this.$axios.$delete(`${DATABASE_URL}/req/${i}.json`)
      const request = await this.$axios.$get(`${DATABASE_URL}/req.json`)
      this.data = Object.keys(request).map(id => ({...request[id], id}))
    }
  },
  computed: {
    req() {
      return Object.values(this.data).filter((req) => {
        if (this.search) {
          return req.text.toLowerCase().includes(this.search.toLowerCase())
        }
        return req
      })
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #29334D;
  color: white;
  padding: 10px 15px;
}

h1, td, tr, th, button {
  font-family: "NAMU Pro";
}

table {
  width: 50%;
  border: none;
  margin-bottom: 20px;
}
table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #717696;
  font-size: 14px;
}
table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}
table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}
table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
table tbody tr:nth-child(even){
  background: #b3adc8;
}
table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}
table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>
