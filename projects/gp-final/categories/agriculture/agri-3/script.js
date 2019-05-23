Chart.defaults.global.aspectRatio = 1;
var data = [
  {
    dataset: [14237372, 3835019, 300220, 534844, 832],
    width: 300,
    title: "Konya"
  },
  { dataset: [4753453, 2986122, 14126, 40181, 0], width: 290, title: "Sivas" },
  {
    dataset: [7907800, 3201356, 422974, 289715, 312],
    width: 280,
    title: "Ankara"
  },
  {
    dataset: [2381944, 1000415, 9407, 17336, 17],
    width: 270,
    title: "Erzurum"
  },
  { dataset: [2131177, 977526, 17808, 54233, 0], width: 260, title: "Van" },
  {
    dataset: [2044376, 390870, 490730, 739474, 5510],
    width: 255,
    title: "Antalya"
  },
  {
    dataset: [8830851, 1549086, 204450, 1230508, 45],
    width: 250,
    title: "Şanlıurfa"
  },
  {
    dataset: [3656144, 1579152, 347176, 195427, 0],
    width: 245,
    title: "Kayseri"
  },
  {
    dataset: [1784948, 256286, 338174, 1316449, 527],
    width: 240,
    title: "Mersin"
  },
  {
    dataset: [5270477, 89079, 136740, 256172, 0],
    width: 230,
    title: "Diyarbakır"
  },
  {
    dataset: [2708666, 204021, 276883, 941187, 496],
    width: 228,
    title: "Balıkesir"
  },
  {
    dataset: [2357385, 429712, 97183, 561095, 19],
    width: 226,
    title: "Kahramanmaraş"
  },
  {
    dataset: [3640445, 851058, 69379, 176581, 6],
    width: 224,
    title: "Afyonkarahisar"
  },
  {
    dataset: [3579652, 2013798, 110620, 42124, 34],
    width: 222,
    title: "Eskişehir"
  },
  {
    dataset: [3831221, 89352, 309269, 683976, 515],
    width: 220,
    title: "Adana"
  },
  { dataset: [4402174, 1543318, 32483, 79070, 0], width: 218, title: "Yozgat" },
  {
    dataset: [2450666, 115557, 348690, 2008530, 868],
    width: 216,
    title: "Manisa"
  },
  {
    dataset: [1099796, 285688, 56599, 98216, 44],
    width: 214,
    title: "Kastamonu"
  },
  {
    dataset: [784352, 159932, 190884, 1158643, 291],
    width: 212,
    title: "Muğla"
  },
  { dataset: [3520740, 1778864, 83958, 104736, 0], width: 210, title: "Çorum" }
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
      labels: [
        "Sown Area",
        "Fallow Land",
        "Vegetables",
        "Fruits & Spices",
        "Ornamental PLants"
      ],
      datasets: [
        {
          label: "# of Votes",
          data: data[i].dataset,
          backgroundColor: [
            "#b9942d",
            "#70412e",
            "#3c6d30",
            "#4c3575",
            "#7c3434"
          ],
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
      cutoutPercentage: 50,
      legend: {
        display: false
      }
    }
  });
}
