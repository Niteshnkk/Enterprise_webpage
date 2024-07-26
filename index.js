// let images = [
//     "sunshade_with_car.webp",
//     "packed_sunshade.webp",
//     "car_sunshade.jpg",
//     "foldable_sunshade.jpg"
// ];
// let currentIndex = 0;



// const imageElm = document.querySelector("#banner-img");
// const previousBtn = document.querySelector(".previous");
// const nextBtn = document.querySelector(".next");


// previousBtn.addEventListener("click", showPreviousImage);
// nextBtn.addEventListener("click", showNextImage);
// window.addEventListener("wheel",rotatescroll);

// function showPreviousImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImages();
// }

// function showNextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImages();
// }

// function updateImages() {
//     imageElm.src = images[currentIndex];
// }

// const rotatescroll = (event) =>{
//     if(event.deltaY < 0){
//         showPreviousImage();
//     }
//     else{
//         showNextImage();
//     }
// }

let images = [
   
    "packed_sunshade.webp",
    "sunshade_with_car.webp",
    "printed-car-sunshade-500x500-removebg-preview.png",
    "foldable_sunshade.jpg"
];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const imageElm = document.querySelector("#banner-img");
    const previousBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");

    previousBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);
    window.addEventListener("wheel", debounce(rotateScroll ,200));

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    }

    function updateImages() {
        imageElm.src = images[currentIndex];
    }

    function rotateScroll(event) {
        if (event.deltaY < 0) {
            
            showPreviousImage();
        } else {
            showNextImage();
        }
    }

    //debounce function can be used for delay scroll behavious in window 
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
  
const read_more=document.querySelector("#Read-more-in-about");
const about_content=document.querySelector(".about-intro");

read_more.addEventListener("click" ,() =>{
   

      about_content.innerHTML += "thanks for your support"  ;
       read_more.style.display="none";

   
});

// let menu_bar= document.querySelector("#menu_bar");
// let nav_content=document.querySelector(".nav_content ul");

// menu_bar.addEventListener("click", ()=>{
//     nav_content.classList.toggle("active");
// })
const menuBar = document.getElementById("menu_bar");
    const navContent = document.querySelector(".nav_content ul");
    if (menuBar && navContent) {
        menuBar.addEventListener("click", function() {
            navContent.classList.toggle("show");
        });
    }


});




