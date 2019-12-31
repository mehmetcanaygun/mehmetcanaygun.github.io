Chart.defaults.global.aspectRatio = 1;
var data = [
  { dataset: [87203, 85987], width: 346, title: "İstanbul<br> Üniversitesi" },
  { dataset: [80544, 75017], width: 310, title: "Atatürk<br> Üniversitesi" },
  { dataset: [32991, 46236], width: 160, title: "Selçuk<br> Üniversitesi" },
  { dataset: [32819, 44721], width: 152, title: "Sakarya<br> Üniversitesi" },
  { dataset: [37446, 38330], width: 150, title: "Gazi<br> Üniversitesi" },
  { dataset: [37728, 37136], width: 148, title: "Marmara<br> Üniversitesi" },
  { dataset: [29753, 43936], width: 146, title: "Kocaeli<br> Üniversitesi" },
  { dataset: [30656, 36547], width: 132, title: "DE<br> Üniversitesi" },
  { dataset: [28205, 37015], width: 130, title: "SD<br> Üniversitesi" },
  { dataset: [34330, 30139], width: 128, title: "Ankara<br> Üniversitesi" },
  { dataset: [29463, 30593], width: 118, title: "Uludağ<br> Üniversitesi" },
  { dataset: [22834, 34082], width: 112, title: "Akdeniz<br> Üniversitesi" },
  { dataset: [26317, 30399], width: 112, title: "Ege<br> Üniversitesi" },
  { dataset: [24598, 29779], width: 108, title: "KT<br> Üniversitesi" },
  { dataset: [23675, 30046], width: 106, title: "Erciyes<br> Üniversitesi" },
  { dataset: [21599, 27193], width: 96, title: "Dumlupınar<br> Üniversitesi" },
  { dataset: [24127, 24233], width: 96, title: "19 Mayıs<br> Üniversitesi" },
  { dataset: [22788, 24770], width: 94, title: "Pamukkale<br> Üniversitesi" },
  { dataset: [20800, 26443], width: 94, title: "Çukurova<br> Üniversitesi" },
  { dataset: [21610, 23318], width: 88, title: "Cumhuriyet<br> Üniversitesi" }
];
for (var i = 0; i < data.length; i++) {
  var gercekI = i + 1;
  var chartName = "myChart" + gercekI;
  var title = "title" + gercekI;
  var titleBox = document.getElementById(title);
  titleBox.innerHTML = data[i].title;
  var ctx = document.getElementById(chartName).getContext("2d");
  document.getElementById(chartName).width = data[i].width;

  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Female", "Male"],
      datasets: [
        {
          label: "# of Votes",
          data: data[i].dataset,
          backgroundColor: ["rgb(245, 140, 162)", "rgb(130, 200, 247)"],
          borderColor: [
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      }
    }
  });
}
