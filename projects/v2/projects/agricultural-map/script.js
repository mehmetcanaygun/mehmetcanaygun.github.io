var selector = document.getElementById('selector');

$("#showBtn").click(function() {

  if(selector.style.visibility != "hidden") {
    selector.style.visibility = "hidden";
    $("#showBtn").attr("value","Another");
    $("#info-wrapper").css("display", "block");
  } else {
    selector.style.visibility = "visible";
    $("#showBtn").attr("value","Show");
    $("#info-wrapper").css("display", "none");
  }

  if(selector.value == "corn") {
    corn1Arr = $(".corn1Arr");
    corn2Arr = $(".corn2Arr");
    corn3Arr = $(".corn3Arr");
    corn1Arr.toggleClass("corn1");
    corn2Arr.toggleClass("corn2");
    corn3Arr.toggleClass("corn3");
    $("#info1").html("<5k");
    $("#info2").html("5k-100k");
    $("#info3").html("100k-500k");
    $("#info4").html(">500k");
    $("#info2").css("background-color", "rgba(194, 203, 20, 0.3)");
    $("#info3").css("background-color", "rgba(194, 203, 20, 0.6)");
    $("#info4").css("background-color", "rgba(194, 203, 20, 0.9)");
  } else if(selector.value == "cherry") {
    cherry1Arr = $(".cherry1Arr");
    cherry2Arr = $(".cherry2Arr");
    cherry3Arr = $(".cherry3Arr");
    cherry1Arr.toggleClass("cherry1");
    cherry2Arr.toggleClass("cherry2");
    cherry3Arr.toggleClass("cherry3");
    $("#info1").html("<1k");
    $("#info2").html("1k-4k");
    $("#info3").html("4k-20k");
    $("#info4").html(">20k");
    $("#info2").css("background-color", "rgba(232, 29, 29, 0.3)");
    $("#info3").css("background-color", "rgba(232, 29, 29, 0.6)");
    $("#info4").css("background-color", "rgba(232, 29, 29, 0.9)");
  } else if(selector.value == "grape") {
    grape1Arr = $(".grape1Arr");
    grape2Arr = $(".grape2Arr");
    grape3Arr = $(".grape3Arr");
    grape1Arr.toggleClass("grape1");
    grape2Arr.toggleClass("grape2");
    grape3Arr.toggleClass("grape3");
    $("#info1").html("<5k");
    $("#info2").html("5k-50k");
    $("#info3").html("50k-200k");
    $("#info4").html(">200k");
    $("#info2").css("background-color", "rgba(225, 57, 233, 0.3)");
    $("#info3").css("background-color", "rgba(225, 57, 233, 0.6)");
    $("#info4").css("background-color", "rgba(225, 57, 233, 0.9)");
  } else if(selector.value == "orange") {
    orange1Arr = $(".orange1Arr");
    orange2Arr = $(".orange2Arr");
    orange3Arr = $(".orange3Arr");
    orange1Arr.toggleClass("orange1");
    orange2Arr.toggleClass("orange2");
    orange3Arr.toggleClass("orange3");
    $("#info1").html("<1k");
    $("#info2").html("1k-30k");
    $("#info3").html("30k-100k");
    $("#info4").html(">100k");
    $("#info2").css("background-color", "rgba(232, 131, 38, 0.3)");
    $("#info3").css("background-color", "rgba(232, 131, 38, 0.6)");
    $("#info4").css("background-color", "rgba(232, 131, 38, 0.9)");
  } else if(selector.value == "tea") {
    tea1Arr = $(".tea1Arr");
    tea2Arr = $(".tea2Arr");
    tea3Arr = $(".tea3Arr");
    tea1Arr.toggleClass("tea1");
    tea2Arr.toggleClass("tea2");
    tea3Arr.toggleClass("tea3");
    $("#info1").html("<0.08k");
    $("#info2").html("0.08k-29k");
    $("#info3").html("29k-166k");
    $("#info4").html(">166k");
    $("#info2").css("background-color", "rgba(73, 228, 34, 0.3)");
    $("#info3").css("background-color", "rgba(73, 228, 34, 0.6)");
    $("#info4").css("background-color", "rgba(73, 228, 34, 0.9)");
  }
  console.log(selector.value);
});
