// https://github.com/Shieda1/Distance-between-Two-Points-Calculator/blob/master/app.js

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const slopeofaLineRadio = document.getElementById('slopeofaLineRadio');
const x1CoordinateRadio = document.getElementById('x1CoordinateRadio');
const y1CoordinateRadio = document.getElementById('y1CoordinateRadio');
const x2CoordinateRadio = document.getElementById('x2CoordinateRadio');
const y2CoordinateRadio = document.getElementById('y2CoordinateRadio');

let slopeofaLine;
let x1Coordinate = v1;
let y1Coordinate = v2;
let x2Coordinate = v3;
let y2Coordinate = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

slopeofaLineRadio.addEventListener('click', function() {
  variable1.textContent = 'X1 Coordinate';
  variable2.textContent = 'Y1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  x1Coordinate = v1;
  y1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

x1CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Slope of a Line';
  variable2.textContent = 'Y1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  slopeofaLine = v1;
  y1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

y1CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Slope of a Line';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  slopeofaLine = v1;
  x1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

x2CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Slope of a Line';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'Y1 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  slopeofaLine = v1;
  x1Coordinate = v2;
  y1Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

y2CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Slope of a Line';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'Y1 Coordinate';
  variable4.textContent = 'X2 Coordinate';
  slopeofaLine = v1;
  x1Coordinate = v2;
  y1Coordinate = v3;
  x2Coordinate = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(slopeofaLineRadio.checked)
    result.textContent = `Slope of a Line = ${computeSlopeofaLine().toFixed(2)}`;

  else if(x1CoordinateRadio.checked)
    result.textContent = `X1 Coordinate = ${computeX1Coordinate().toFixed(2)}`;

  else if(y1CoordinateRadio.checked)
    result.textContent = `Y1 Coordinate = ${computeY1Coordinate().toFixed(2)}`;

  else if(x2CoordinateRadio.checked)
    result.textContent = `X2 Coordinate = ${computeX2Coordinate().toFixed(2)}`;

  else if(y2CoordinateRadio.checked)
    result.textContent = `Y2 Coordinate = ${computeY2Coordinate().toFixed(2)}`;
})

// calculation

function computeSlopeofaLine() {
  return (Number(y2Coordinate.value) - Number(y1Coordinate.value)) / (Number(x2Coordinate.value) - Number(x1Coordinate.value));
}

function computeX1Coordinate() {
  return Number(x2Coordinate.value) - ((Number(y2Coordinate.value) - Number(y1Coordinate.value)) / Number(slopeofaLine.value));
}

function computeY1Coordinate() {
  return Number(y2Coordinate.value) - (Number(slopeofaLine.value) * (Number(x2Coordinate.value) - Number(x1Coordinate.value)));
}

function computeX2Coordinate() {
  return ((Number(y2Coordinate.value) - Number(y1Coordinate.value)) / Number(slopeofaLine.value)) + Number(x1Coordinate.value);
}

function computeY2Coordinate() {
  return (Number(slopeofaLine.value) * (Number(x2Coordinate.value) - Number(x1Coordinate.value))) + Number(y1Coordinate.value);
}