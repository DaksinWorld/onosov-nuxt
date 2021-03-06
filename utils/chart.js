import Vue from 'vue'
import { Doughnut } from 'vue-chartjs'

Vue.component('line-chart', {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
