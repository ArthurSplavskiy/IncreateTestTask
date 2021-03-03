
// webpcss
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();


const triger = document.querySelector('.animation-container__card')
const secondTriger = document.querySelector('.animation-container__card_second')
const firstFrame = document.querySelector('picture .firstFrame')
const secondFrame = document.querySelector('picture .secondFrame')
const plate = document.querySelector('.plate')
const bonny = document.querySelector('.bunny')
const $first = document.querySelector('.firstDish')
const $second = document.querySelector('.secondDish')
  
firstFrame.style.opacity = '1'
secondFrame.style.opacity = '1'

triger.addEventListener('mouseover', () => {
  firstFrame.style.opacity = '0'
  secondFrame.style.opacity = '0'
})
triger.addEventListener('mouseout', () => {
  firstFrame.style.opacity = '1'
  secondFrame.style.opacity = '1'
})

secondTriger.addEventListener('mouseover', () => {
  secondFrame.style.opacity = '0'
})
secondTriger.addEventListener('mouseout', () => {
  secondFrame.style.opacity = '1'
})

plate.addEventListener('click', () => {
  $first.classList.add('hide')
  plate.classList.add('second-dish-animate')
  setTimeout(() => {
    plate.classList.add('hide')
    $second.classList.remove('hide')
    bonny.classList.remove('hide')
    plate.classList.remove('second-dish-animate')
  }, 2000)
})

bonny.addEventListener('click', () => {
  $second.classList.add('hide')
  bonny.classList.add('second-dish-animate')
  setTimeout(() => {
    bonny.classList.add('hide')
    $first.classList.remove('hide')
    plate.classList.remove('hide')
    bonny.classList.remove('second-dish-animate')
  }, 2000)
})