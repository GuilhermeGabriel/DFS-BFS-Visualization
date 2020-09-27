import Graph from './graph.js';
let g = new Graph(6);

const canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const ctx = canvas.getContext('2d');

let points = [];
points.push({ letter: 'a', x: 5 * (canvas.width / 100), y: 7 * (canvas.height / 100) });
points.push({ letter: 'b', x: 10 * (canvas.width / 100), y: 57 * (canvas.height / 100) });
points.push({ letter: 'c', x: 15 * (canvas.width / 100), y: 30 * (canvas.height / 100) });
points.push({ letter: 'd', x: 25 * (canvas.width / 100), y: 10 * (canvas.height / 100) });
points.push({ letter: 'e', x: 30 * (canvas.width / 100), y: 68 * (canvas.height / 100) });
points.push({ letter: 'f', x: 35 * (canvas.width / 100), y: 84 * (canvas.height / 100) });
points.push({ letter: 'g', x: 40 * (canvas.width / 100), y: 30 * (canvas.height / 100) });
points.push({ letter: 'h', x: 45 * (canvas.width / 100), y: 50 * (canvas.height / 100) });
points.push({ letter: 'i', x: 50 * (canvas.width / 100), y: 14 * (canvas.height / 100) });
points.push({ letter: 'j', x: 55 * (canvas.width / 100), y: 87 * (canvas.height / 100) });
points.push({ letter: 'k', x: 60 * (canvas.width / 100), y: 58 * (canvas.height / 100) });
points.push({ letter: 'l', x: 65 * (canvas.width / 100), y: 10 * (canvas.height / 100) });
points.push({ letter: 'm', x: 70 * (canvas.width / 100), y: 30 * (canvas.height / 100) });
points.push({ letter: 'n', x: 75 * (canvas.width / 100), y: 60 * (canvas.height / 100) });
points.push({ letter: 'o', x: 80 * (canvas.width / 100), y: 77 * (canvas.height / 100) });
points.push({ letter: 'p', x: 85 * (canvas.width / 100), y: 42 * (canvas.height / 100) });
points.push({ letter: 'q', x: 90 * (canvas.width / 100), y: 55 * (canvas.height / 100) });
points.push({ letter: 'r', x: 95 * (canvas.width / 100), y: 17 * (canvas.height / 100) });

for (var i = 0; i < points.length; i++) {
  g.addVertex(points[i].letter);
}

ctx.beginPath();
ctx.lineTo(points[0].x, points[0].y);
ctx.lineTo(points[6].x, points[6].y);

g.addEdge(points[0].letter, points[6].letter);

ctx.lineTo(points[3].x, points[3].y);

g.addEdge(points[6].letter, points[3].letter);

ctx.lineTo(points[2].x, points[2].y);

g.addEdge(points[3].letter, points[2].letter);

ctx.lineTo(points[9].x, points[9].y);

g.addEdge(points[2].letter, points[9].letter);

ctx.lineTo(points[11].x, points[11].y);

g.addEdge(points[9].letter, points[11].letter);

ctx.lineTo(points[4].x, points[4].y);

g.addEdge(points[11].letter, points[4].letter);

ctx.lineTo(points[5].x, points[5].y);

g.addEdge(points[4].letter, points[5].letter);

ctx.lineTo(points[1].x, points[1].y);

g.addEdge(points[5].letter, points[1].letter);

ctx.lineTo(points[7].x, points[7].y);

g.addEdge(points[1].letter, points[7].letter);

ctx.lineTo(points[12].x, points[12].y);

g.addEdge(points[7].letter, points[12].letter);

ctx.lineTo(points[8].x, points[8].y);

g.addEdge(points[12].letter, points[8].letter);

ctx.lineTo(points[10].x, points[10].y);

g.addEdge(points[8].letter, points[10].letter);

ctx.lineTo(points[14].x, points[14].y);

g.addEdge(points[10].letter, points[14].letter);

ctx.lineTo(points[13].x, points[13].y);

g.addEdge(points[14].letter, points[13].letter);

ctx.lineTo(points[1].x, points[1].y);

g.addEdge(points[13].letter, points[1].letter);

ctx.lineTo(points[6].x, points[6].y);

g.addEdge(points[1].letter, points[6].letter);

ctx.lineTo(points[13].x, points[13].y);

g.addEdge(points[6].letter, points[13].letter);

ctx.lineTo(points[15].x, points[15].y);

g.addEdge(points[13].letter, points[15].letter);

ctx.lineTo(points[17].x, points[17].y);

g.addEdge(points[15].letter, points[17].letter);

ctx.lineTo(points[8].x, points[8].y);

g.addEdge(points[17].letter, points[8].letter);

ctx.lineTo(points[10].x, points[10].y);

g.addEdge(points[8].letter, points[10].letter);

ctx.lineTo(points[14].x, points[14].y);

g.addEdge(points[10].letter, points[14].letter);

ctx.lineTo(points[15].x, points[15].y);

g.addEdge(points[14].letter, points[15].letter);

ctx.lineTo(points[0].x, points[0].y);

g.addEdge(points[15].letter, points[0].letter);

ctx.lineTo(points[3].x, points[3].y);

g.addEdge(points[0].letter, points[3].letter);

ctx.lineTo(points[2].x, points[2].y);

g.addEdge(points[3].letter, points[2].letter);

ctx.lineTo(points[9].x, points[9].y);

g.addEdge(points[2].letter, points[9].letter);

ctx.lineTo(points[11].x, points[11].y);

g.addEdge(points[9].letter, points[11].letter);

ctx.lineTo(points[4].x, points[4].y);

g.addEdge(points[11].letter, points[4].letter);

ctx.lineTo(points[5].x, points[5].y);

g.addEdge(points[4].letter, points[5].letter);

ctx.lineTo(points[16].x, points[16].y);

g.addEdge(points[5].letter, points[16].letter);

ctx.lineTo(points[7].x, points[7].y);

g.addEdge(points[16].letter, points[7].letter);

ctx.lineTo(points[12].x, points[12].y);

g.addEdge(points[7].letter, points[12].letter);

ctx.lineTo(points[17].x, points[17].y);

g.addEdge(points[12].letter, points[17].letter);


g.printGraph();

ctx.lineWidth = 3;
ctx.strokeStyle = '#b34e91';
ctx.stroke();
ctx.closePath();

for (let point of points) {
  drawPoint(point.x, point.y, 'white', point.letter);
}

const pontoDeInicioSelect = document.getElementById('pontoinicial');
const tipoBuscaSelect = document.getElementById('tipodebusca');
const btnFind = document.getElementById('btn-find');

btnFind.addEventListener('click', () => {
  let result = [];
  let tipoDeBusca = tipoBuscaSelect.value;
  let pontoInical = pontoDeInicioSelect.value;

  for (let point of points) {
    drawPoint(point.x, point.y, 'white', point.letter);
  }

  clearTimeOuts();

  let delayMillis = 0;
  let taxaAtualizacao = 1000;

  if(tipoDeBusca == 0){
    g.dfs(pontoInical, result);
    for (let l of result) {
      let indexInPoints = findWithAttr(points, 'letter', l)
      showBuscaComDelay(delayMillis, points[indexInPoints]);
      delayMillis+=taxaAtualizacao;
    }
  }else{
    g.bfs(pontoInical, result);
    for (let l of result) {
      let indexInPoints = findWithAttr(points, 'letter', l)
      showBuscaComDelay(delayMillis, points[indexInPoints]);
      delayMillis+=taxaAtualizacao;
    }
  }
});

let timeouts = [];

function clearTimeOuts(){
  for (var i=0; i<timeouts.length; i++) {
    window.clearTimeout(timeouts[i]);
  }
}

function showBuscaComDelay(delay, point){
  let timeout = setTimeout(()=> {
    drawPoint(point.x, point.y, 'blue',  point.letter);      
  }, delay);
  timeouts.push(timeout);
}

function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}

function drawPoint(x, y, color, letter) {
  var radius = 15;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 5;

  ctx.font = "20px Georgia";
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(letter, x, y+35);
}
