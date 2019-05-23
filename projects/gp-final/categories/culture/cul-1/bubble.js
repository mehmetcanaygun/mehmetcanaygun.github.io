var width = 1366;
var height = 600;

var isSplit = false;

var infoBox = document.getElementById("info-box");

var svg = d3
  .select("#chart")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(0,0)");

var radiusScale = d3
  .scaleSqrt()
  .domain([1, 80])
  .range([5, 50]);

var forceXSeparate = d3
  .forceX(function(d) {
    switch (d.region) {
      case "marmara":
        return width / 2 - 600;
        break;
      case "ege":
        return width / 2 - 400;
        break;
      case "akdeniz":
        return width / 2 - 200;
        break;
      case "icAnadolu":
        return width / 2;
        break;
      case "karadeniz":
        return width / 2 + 200;
        break;
      case "doguAnadolu":
        return width / 2 + 400;
        break;
      case "guneydoguAnadolu":
        return width / 2 + 600;
        break;
    }
  })
  .strength(0.03);
var forceXCombine = d3.forceX(width / 2).strength(0.03);

var forceCollide = d3.forceCollide(function(d) {
  return radiusScale(d.pop) + 1;
});

var simulation = d3
  .forceSimulation()
  .force("x", forceXCombine)
  .force("y", d3.forceY(height / 2).strength(0.03))
  .force("collide", forceCollide);

d3.queue()
  .defer(d3.csv, "data.csv")
  .await(ready);

function ready(error, datapoints) {
  var circles = svg
    .selectAll(".name")
    .data(datapoints)
    .enter()
    .append("circle")
    .attr("id", function(d) {
      return d.name;
    })
    .attr("class", "name")
    .attr("r", function(d) {
      return radiusScale(d.pop);
    })
    .attr("fill", function(d) {
      return d.color;
    })
    .on("click", function(d) {
      // return console.log(d.name);
      infoBox.innerHTML = `<h1>Total Population: 82.003.882</h1>
                          <h2>${d.name.toUpperCase()}: ${d.totPop}</h2>`;
    });

  // console.log(circles._groups[0][0]);

  // Tooltip
  // var tooltip = d3
  //   .select("#chart")
  //   .append("div")
  //   .style("position", "absolute")
  //   .style("visibility", "hidden")
  //   .style("z-index", "5")
  //   .text("hey");

  // d3.select(".name")
  //   .on("mouseover", function() {
  //     return tooltip.style("visibility", "visible");
  //   })
  //   .on("mousemove", function() {
  //     return tooltip
  //       .style("top", event.pageY - 800 + "px")
  //       .style("left", event.pageX - 800 + "px");
  //   })
  //   .on("mouseout", function() {
  //     return tooltip.style("visibility", "hidden");
  //   });

  simulation.nodes(datapoints).on("tick", ticked);

  d3.select("#split").on("click", function() {
    simulation
      .force("x", forceXSeparate)
      .alphaTarget(0.5)
      .restart();
  });
  d3.select("#combine").on("click", function() {
    simulation
      .force("x", forceXCombine)
      .alphaTarget(0.5)
      .restart();
  });
  function ticked() {
    circles
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }
}
