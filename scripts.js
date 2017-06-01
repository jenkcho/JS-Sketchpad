function paintCell(color) {
  $(".col").hover(function() {
    $(this).css("background-color", color);
  });
}

function createGrid(gridSize, color){
  var cellSize = 600/gridSize;
  $("#grid").empty();
  for (var i = 0; i < gridSize; i += 1){
    $("#grid").append("<div class='row'></div>");
  }
  for (var j = 0; j < gridSize; j += 1){
    $(".row").append("<div class='col'></div>");
  }
  $(".col").height(cellSize).width(cellSize);
  paintCell(color);
  changeColor();
}
//why is this so slow in mozilla???

function rand() {
   return (Math.floor((Math.random() * 250) + 1));
}
/*
function changeColor(){
  $("#color").click(function() {
    $('span').text("Rainbow");
    color = 'rgb('+ rand() + ',' + rand() + ',' + rand() + ')';
    console.log(color);
  });
}
*/
$(document).ready(function() {
var color = '#000';
var gridSize = 16;
//initialize grid
createGrid(gridSize, color);
changeColor();
//reset grid color
$("#reset").click(function() {
  $(".col").css("background-color", "transparent");
});
//change number of grid cells
$('#size').keypress(function (e) {
  if (e.which == 13) {
    gridSize = parseInt($("#size").val());
    console.log(gridSize);
    createGrid(gridSize, color);
    return false;
  }
});

$("#set-size").click( function() {
  gridSize = parseInt($("#size").val());
  console.log(gridSize);
  createGrid(gridSize, color);
});

});
