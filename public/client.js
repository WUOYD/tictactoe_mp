//Sockets
var socket = io()

socket.on("click", data => {
  let formName = "form" + data
  let form = document.getElementById(formName);
  drawForm(data, form);
});

let grid = [0,0,0,0,0,0,0,0,0]
let player = 0

var tile0 = document.getElementById('tile0');
var tile1 = document.getElementById('tile1');
var tile2 = document.getElementById('tile2');
var tile3 = document.getElementById('tile3');
var tile4 = document.getElementById('tile4');
var tile5 = document.getElementById('tile5');
var tile6 = document.getElementById('tile6');
var tile7 = document.getElementById('tile7');
var tile8 = document.getElementById('tile8');

var form0 = document.getElementById('form0');
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');
var form6 = document.getElementById('form6');
var form7 = document.getElementById('form7');
var form8 = document.getElementById('form8');


tile0.addEventListener('click', function (event) {
  drawForm(0, form0);
  socket.emit("click", 0);
});
tile1.addEventListener('click', function (event) {
  drawForm(1, form1);
  socket.emit("click", 1);
});
tile2.addEventListener('click', function (event) {
  drawForm(2, form2);
  socket.emit("click", 2);
});
tile3.addEventListener('click', function (event) {
  drawForm(3, form3);
  socket.emit("click", 3);
});
tile4.addEventListener('click', function (event) {
  drawForm(4, form4);
  socket.emit("click", 4);
});
tile5.addEventListener('click', function (event) {
  drawForm(5, form5);
  socket.emit("click", 5);
});
tile6.addEventListener('click', function (event) {
  drawForm(6, form6);
  socket.emit("click", 6);
});
tile7.addEventListener('click', function (event) {
  drawForm(7, form7);
  socket.emit("click", 7);
});
tile8.addEventListener('click', function (event) {
  drawForm(8, form8);
  socket.emit("click", 8);
});

function drawForm(tile, elem){
  if(grid[tile] == 1 || grid[tile] == 2){
  }
  else{
    if(player % 2 == 0){
      elem.classList.add('circle')
      grid[tile] = 1
    }
    else if(player % 2 == 1){
      elem.classList.add('cross')
      grid[tile] = 2
    }
    else{console.log("Error")}
    player++
    checkWin()
  }
}

function checkWin(){
  //Circle
  if(grid[0] == 1 && grid[1] == 1 && grid[2] == 1 ){
    win("circle")
  }
  if(grid[0] == 1 && grid[3] == 1 && grid[6] == 1 ){
    win("circle")
  }
  if(grid[2] == 1 && grid[5] == 1 && grid[8] == 1 ){
    win("circle")
  }
  if(grid[6] == 1 && grid[7] == 1 && grid[8] == 1 ){
    win("circle")
  }
  if(grid[3] == 1 && grid[4] == 1 && grid[5] == 1 ){
    win("circle")
  }
  if(grid[1] == 1 && grid[4] == 1 && grid[7] == 1 ){
    win("circle")
  }
  if(grid[0] == 1 && grid[4] == 1 && grid[8] == 1 ){
    win("circle")
  }
  if(grid[2] == 1 && grid[4] == 1 && grid[6] == 1 ){
    win("circle")
  }

  //Cross
  if(grid[0] == 2 && grid[1] == 2 && grid[2] == 2 ){
    win("cross")
  }
  if(grid[0] == 2 && grid[3] == 2 && grid[6] == 2 ){
    win("cross")
  }
  if(grid[2] == 2 && grid[5] == 2 && grid[8] == 2 ){
    win("cross")
  }
  if(grid[6] == 2 && grid[7] == 2 && grid[8] == 2 ){
    win("cross")
  }
  if(grid[3] == 2 && grid[4] == 2 && grid[5] == 2 ){
    win("cross")
  }
  if(grid[1] == 2 && grid[4] == 2 && grid[7] == 2 ){
    win("cross")
  }
  if(grid[0] == 2 && grid[4] == 2 && grid[8] == 2 ){
    win("cross")
  }
  if(grid[2] == 2 && grid[4] == 2 && grid[6] == 2 ){
    win("cross")
  }
}

function win(winner){
  if(winner == "circle"){
    document.querySelector('#winner').innerHTML = "Circle Wins"
    document.getElementById("restart").style.visibility = "visible"
  }
  else if (winner == "cross"){
    document.querySelector('#winner').innerHTML = "Cross Wins"
    document.getElementById("restart").style.visibility = "visible"
  }
  else{}
}

document.getElementById("restartButton").addEventListener("click", ()=>{
  grid = [0,0,0,0,0,0,0,0,0]
  player = 0
  document.getElementById("restart").style.visibility = "hidden"

  const elements = document.getElementsByClassName('forms');

  Array.prototype.forEach.call(elements, function(el) {
    el.classList.remove('circle', 'cross');
  });
})



