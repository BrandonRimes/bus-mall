'use strict';

// variables, world wide ----------------
const resultsSection = document.getElementById('results-section');
const selectionSection = document.getElementById('selection-section');
const selectionGraphic = document.getElementById('graphic');
const selectionDescription = document.getElementById('description');

// functions, world wide ----------------
function getRandomProductSet(howMany=3) {
  let numberSet = [];
  let productSet = [];
  while (howMany > 0) {
    let rando = Math.floor(Math.random() * Product.all.length);
    if (!(numberSet.includes(rando))) {
      numberSet.push(rando);
      productSet.push(Product.all[rando]);
      howMany--;
    }
  }
  return productSet;
}

function renderProductSet(howMany=3) {
  let products = getRandomProductSet(howMany);
  for (let product of products) {
    let div = document.createElement('div');
    div.className = 'graphic';
    div.innerHTML = `
      <img src=${product.imgPath}>
      <h2>${product.name}</h2>
    `;
    selectionGraphic.appendChild(div);
  }
}

// construction junction ----------------
function Product(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.seen = 0;
  this.favs = 0;

  Product.all.push(this);
}

Product.all = [];

// 'proto' is Czech for 'therefore' -----


// create objects -----------------------
function factory() {
  for (let [name, imgPath] of productDirectory) {
    new Product(name, imgPath);
  }
}

const productDirectory = [
  ['bag','./img/bag.jpg'],
  ['banana','./img/banana.jpg'],
  ['bathroom','./img/bathroom.jpg'],
  ['boots','./img/boots.jpg'],
  ['breakfast','./img/breakfast.jpg'],
  ['bubblegum','./img/bubblegum.jpg'],
  ['chair','./img/chair.jpg'],
  ['cthulhu','./img/cthulhu.jpg'],
  ['dog-duck','./img/dog-duck.jpg'],
  ['dragon','./img/dragon.jpg'],
  ['pen','./img/pen.jpg'],
  ['pet-sweep','./img/pet-sweep.jpg'],
  ['scissors','./img/scissors.jpg'],
  ['shark','./img/shark.jpg'],
  ['sweep','./img/sweep.png'],
  ['tauntaun','./img/tauntaun.jpg'],
  ['unicorn','./img/unicorn.jpg'],
  ['water-can','./img/water-can.jpg'],
  ['wine-glass','./img/wine-glass.jpg'],
];

// LISTEN! ------------------------------


// function calls -----------------------
factory();
renderProductSet();

console.log();
