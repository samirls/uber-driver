//back to the top page button
let backButton = document.getElementById("voltarTopo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the bottom of page
function scrollToBottom(){
  document.body.scrollTop = 5000;
  document.documentElement.scrollTop = 5000;
}

//Open and close modal
const modal = document.querySelector(".fullscreen-container");
const openModal = document.querySelector('#buttonContato');
const closeModal = document.querySelector('#close-page');

openModal.addEventListener('click', ()=>{
    modal.setAttribute('style',"display:flex")
    });

closeModal.addEventListener('click', ()=>{
        modal.setAttribute('style',"display: none");

    });

document.addEventListener("click", (e) => {
        if (e.target == modal) {
          modal.setAttribute("style", "display:none");
        }
      });

//Open and close modal2
const modal2 = document.querySelector(".fullscreen-container2");
const openModal2 = document.querySelector('#buttonFormasDePagamento');
const closeModal2 = document.querySelector('#close-page2');

openModal2.addEventListener('click', ()=>{
    modal2.setAttribute('style',"display:flex")
    });

closeModal2.addEventListener('click', ()=>{
        modal2.setAttribute('style',"display: none");

    });

document.addEventListener("click", (e) => {
        if (e.target == modal2) {
          modal2.setAttribute("style", "display:none");
        }
    });

//carousel
let carousel = 1;

const photoForward = document.getElementById("photoForward");
const photoBack = document.getElementById("photoBack");

photoForward.addEventListener("click", forward);
photoBack.addEventListener("click", back);

function forward() {
  carousel += 1;
  if (carousel === 1) {
    document.getElementById("carouselImage9").setAttribute('style',"display: none");
    document.getElementById("carouselImage1").setAttribute('style',"display: block");
    document.getElementById("carouselImage2").setAttribute('style',"display: none");
  }
  if (carousel === 2) {
    document.getElementById("carouselImage1").setAttribute('style',"display: none");
    document.getElementById("carouselImage2").setAttribute('style',"display: block");
    document.getElementById("carouselImage3").setAttribute('style',"display: none");
  }
  if (carousel === 3) {
    document.getElementById("carouselImage2").setAttribute('style',"display: none");
    document.getElementById("carouselImage3").setAttribute('style',"display: block");
    document.getElementById("carouselImage4").setAttribute('style',"display: none");
  }
  if (carousel === 4) {
    document.getElementById("carouselImage3").setAttribute('style',"display: none");
    document.getElementById("carouselImage4").setAttribute('style',"display: block");
    document.getElementById("carouselImage5").setAttribute('style',"display: none");
  }
  if (carousel === 5) {
    document.getElementById("carouselImage4").setAttribute('style',"display: none");
    document.getElementById("carouselImage5").setAttribute('style',"display: block");
    document.getElementById("carouselImage6").setAttribute('style',"display: none");
  }
  if (carousel === 6) {
    document.getElementById("carouselImage5").setAttribute('style',"display: none");
    document.getElementById("carouselImage6").setAttribute('style',"display: block");
    document.getElementById("carouselImage7").setAttribute('style',"display: none");
  }
  if (carousel === 7) {
    document.getElementById("carouselImage6").setAttribute('style',"display: none");
    document.getElementById("carouselImage7").setAttribute('style',"display: block");
    document.getElementById("carouselImage8").setAttribute('style',"display: none");
  }
  if (carousel === 8) {
    document.getElementById("carouselImage7").setAttribute('style',"display: none");
    document.getElementById("carouselImage8").setAttribute('style',"display: block");
    document.getElementById("carouselImage9").setAttribute('style',"display: none");
  }
  if (carousel === 9) {
    document.getElementById("carouselImage8").setAttribute('style',"display: none");
    document.getElementById("carouselImage9").setAttribute('style',"display: block");
    document.getElementById("carouselImage1").setAttribute('style',"display: none");
  }
  if (carousel === 10) {
    carousel = 1;
    document.getElementById("carouselImage9").setAttribute('style',"display: none");
    document.getElementById("carouselImage1").setAttribute('style',"display: block");
  }
  return document.getElementById("photoNumber").innerText = carousel;
}
function back() {
  carousel -= 1;
  if (carousel === 1) {
    document.getElementById("carouselImage9").setAttribute('style',"display: none");
    document.getElementById("carouselImage1").setAttribute('style',"display: block");
    document.getElementById("carouselImage2").setAttribute('style',"display: none");
  }
  if (carousel === 2) {
    document.getElementById("carouselImage1").setAttribute('style',"display: none");
    document.getElementById("carouselImage2").setAttribute('style',"display: block");
    document.getElementById("carouselImage3").setAttribute('style',"display: none");
  }
  if (carousel === 3) {
    document.getElementById("carouselImage2").setAttribute('style',"display: none");
    document.getElementById("carouselImage3").setAttribute('style',"display: block");
    document.getElementById("carouselImage4").setAttribute('style',"display: none");
  }
  if (carousel === 4) {
    document.getElementById("carouselImage3").setAttribute('style',"display: none");
    document.getElementById("carouselImage4").setAttribute('style',"display: block");
    document.getElementById("carouselImage5").setAttribute('style',"display: none");
  }
  if (carousel === 5) {
    document.getElementById("carouselImage4").setAttribute('style',"display: none");
    document.getElementById("carouselImage5").setAttribute('style',"display: block");
    document.getElementById("carouselImage6").setAttribute('style',"display: none");
  }
  if (carousel === 6) {
    document.getElementById("carouselImage5").setAttribute('style',"display: none");
    document.getElementById("carouselImage6").setAttribute('style',"display: block");
    document.getElementById("carouselImage7").setAttribute('style',"display: none");
  }
  if (carousel === 7) {
    document.getElementById("carouselImage6").setAttribute('style',"display: none");
    document.getElementById("carouselImage7").setAttribute('style',"display: block");
    document.getElementById("carouselImage8").setAttribute('style',"display: none");
  }
  if (carousel === 8) {
    document.getElementById("carouselImage7").setAttribute('style',"display: none");
    document.getElementById("carouselImage8").setAttribute('style',"display: block");
    document.getElementById("carouselImage9").setAttribute('style',"display: none");
  }
  if (carousel === 9) {
    document.getElementById("carouselImage8").setAttribute('style',"display: none");
    document.getElementById("carouselImage9").setAttribute('style',"display: block");
    document.getElementById("carouselImage1").setAttribute('style',"display: none");
  }
  if (carousel === 0) {
    carousel = 9;
    document.getElementById("carouselImage8").setAttribute('style',"display: none");
    document.getElementById("carouselImage1").setAttribute('style',"display: none");
    document.getElementById("carouselImage9").setAttribute('style',"display: block");
  }
  return document.getElementById("photoNumber").innerText = carousel;
}



//Code to pause and play buttons
let isPaused = false;
const statusPaused = document.getElementById("statusPaused");

let interval = setInterval(function() {
  if(!isPaused) {
    statusPaused.setAttribute("style", "display: none");
    forward();
  }
  if(isPaused) {
    statusPaused.setAttribute('style',"display: block");
  }
}, 3000);

const startCarousel = document.getElementById("startCarousel");
const pauseCarousel = document.getElementById("pauseCarousel");

startCarousel.addEventListener("click", play);
pauseCarousel.addEventListener("click", pause);

function play(){
  isPaused = false;
}
function pause(){
  isPaused = true;
}