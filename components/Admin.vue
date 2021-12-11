<template>
  <div>
    <nav>
      <h3 @click='$router.push("/")'>Back</h3>
    </nav>
    <h1 class="text-3xl font-bold underline">Admin</h1>
    <input type='search' v-model='search'>
    <button class='update' @click='update'>Обновить</button>
    <button class='update' @click='maxMin = !maxMin'>Сортировать по цене</button>
    <table v-for='(d,i) in req'>
      <thead>
        <th>№</th>
        <th>Имя</th>
        <th>Почта</th>
        <th>Бюджет</th>
        <th>Действие</th>
        <th>Время создания</th>
      </thead>
      <tbody>
        <td>{{i}} {{d.id}}</td>
        <td>{{ d.name }}</td>
        <td>{{ d.email }}</td>
        <td>{{ d.price }}.00 $</td>
        <td>{{ d.createdAt }}</td>
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
      },
      maxMin: false
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
    },
    async update() {
      const request = await this.$axios.$get(`${DATABASE_URL}/req.json`)
      this.data = Object.keys(request).map(id => ({...request[id], id}))
    }
  },
  computed: {
    req() {
      return Object.values(this.data)
      .filter((req) => {
        if (this.search) {
          return this.search.toLowerCase().includes(req.email.toLowerCase())
        }
        return req
      })
      .sort((a,b) => {
        if(this.maxMin){
          return parseFloat(b.price, 10) - parseFloat(a.price, 10)
        } else {
          return parseFloat(a.price, 10) - parseFloat(b.price, 10)
        }
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

.update {
  border: 1px solid black;
  background-color: #5628b4;
  color: white;
}

/*Nav*/
nav {
  margin-top: 20px;
  position: -webkit-sticky;
  width: 100%;
  background-color: #F8F9FB;
  height: 120px;
  border: 3px solid #717696;
  display: flex;
  align-items: center;
}

nav > h3 {
  font-family: Montserrat;
  color: black;
  padding-left: 5px;
}
</style>
