'use strict';

// variables, world wide ----------------
const resultsSection = document.getElementById('results-section');
const selectionSection = document.getElementById('selection-section');
const selectionGraphic = document.getElementById('graphic');
const selectionDescription = document.getElementById('description');

let clickCount = 3;

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
  selectionGraphic.innerHTML = '';
  resultsSection.innerHTML = `
    <p>Click the product you would most like to see in BusMall</p>
  `;
  let products = getRandomProductSet(howMany);
  for (let product of products) {
    let div = document.createElement('div');
    div.className = 'graphic';
    div.id = product.name;
    div.innerHTML = `
      <img id=${product.name} src=${product.imgPath}>
      <h2 id=${product.name}>${product.name}</h2>
    `;
    div.addEventListener('click', function() {
      product.favs++;
      clickCount--;
      if (clickCount > 0) {
        renderProductSet();
      } else {
        selectionGraphic.innerHTML = '';
        renderResults();
      }
    });
    selectionGraphic.appendChild(div);
    product.seen++;
  }
}

function renderResults() {
  resultsSection.innerHTML = '';
  let h2 = document.createElement('h2');
  h2.innerHTML = 'Results';
  resultsSection.appendChild(h2);
  let ul = document.createElement('ul');
  resultsSection.appendChild(ul);
  for (let product of Product.all) {
    let li = document.createElement('li');
    li.innerHTML = `${product.name} - Seen: ${product.seen} - Selected: ${product.favs}`;
    resultsSection.lastChild.appendChild(li);
  }
}

function renderDescription() {
  selectionDescription.innerHTML = `
    <p>Small batch 90's raw denim subway tile blog, marfa pitchfork lo-fi master cleanse PBR&B poke heirloom gluten-free fixie prism. Keytar food truck viral vice, pour-over cardigan austin raclette drinking vinegar. Umami portland marfa hashtag tacos cronut paleo swag prism jianbing authentic kinfolk synth hot chicken drinking vinegar. Shoreditch actually master cleanse, church-key mustache prism intelligentsia offal affogato glossier hell of adaptogen vegan. PBR&B hella bitters, williamsburg DIY freegan crucifix paleo shoreditch edison bulb plaid keffiyeh.</p>
  `;
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

// function calls -----------------------
factory();
renderProductSet();
renderDescription();
