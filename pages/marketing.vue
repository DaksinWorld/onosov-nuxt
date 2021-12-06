<template>
  <client-only>
    <line-chart :data="chartData"></line-chart>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: [
          "Social Media",
          "SEO",
          "Own marketing",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: ['30', 50, 20],
            backgroundColor: ['#df2358', '#fdce33' , '#7f5498'],
            borderColor: "rgb(255,255,255)",
            borderWidth: 2,
          },
        ],
        barChartOptions: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Marketing",
            fontSize: 24,
            fontColor: "#6b7280",
          },
          tooltips: {
            backgroundColor: "#17BF62",
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 7,
                  min: 0,
                  stepSize: 1,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        },
      }
    };
  }
}
</script>
<style scoped>
canvas {
  width: 900px !important;
  height: 900px !important;
}
</style>
