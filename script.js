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

