// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;

//     function showSlide() {
//         const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
//         const nextSlide = (currentSlide + 1) % slides.length;

//         slides[currentSlide].classList.add("active");
//         slides[previousSlide].classList.remove("active");
//         slides[previousSlide].classList.add("previous");
//         slides[nextSlide].classList.add("next");

//         let interval = setTimeout(function() {
//             slides[previousSlide].classList.remove("previous");
//             slides[nextSlide].classList.remove("next");
//         }, 1000);
//         currentSlide = nextSlide;
//         return () => clearInterval(interval);
//     }

//     showSlide();
//     setInterval(showSlide, 10000); // Change slide every 5 seconds
// });
const transitionDuration = 0.5;
const slideInterval = 7000;

const slider = document.querySelector('.carousel');
const slides = Array.from(slider.getElementsByClassName('slide'));
let currentIndex = 0;
let nextIndex = currentIndex+1;
let previousIndex = currentIndex-1;

slides[currentIndex].style.opacity="1";
function sliderAnimation() {
    console.log(previousIndex,"-",currentIndex,"-",nextIndex)

    if(currentIndex===slides.length-1){
        currentIndex=0
        nextIndex=currentIndex+1
        previousIndex=currentIndex-1
        slides[4].style.opacity ="0"

    }
    else{
        currentIndex+=1;
        previousIndex=currentIndex-1
        if(currentIndex===slides.length-1){
            nextIndex=-1

        }
        else{
            nextIndex=currentIndex+1
        }
    }
    slides[currentIndex].style.opacity = "1";
    slides[previousIndex].style.opacity ="0"
}

setInterval(sliderAnimation, slideInterval)





const menuBtn = document.querySelector(".menu-btn");
const navbarResponsive = document.querySelector(".navbar-responsive");
menuBtn.addEventListener("click",()=>{
    navbarResponsive.classList.toggle("open")
    
})
function animate(){
    if(window.innerWidth>1000){
        navbarResponsive.classList.remove("open")
    }
}
setInterval( animate ,500)



// Function to check if the user has scrolled enough to show the button
function handleScroll() {
    var scrollToTopBtn = document.getElementById("goToTopBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  
  // Function to smoothly scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  // Register the scroll event listener
  window.onscroll = function () {
    handleScroll();
  };
  
  // Register the click event listener for the button
  document.getElementById("goToTopBtn").addEventListener("click", scrollToTop);
  