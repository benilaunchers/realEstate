const slider = document.querySelector("#slider");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const images = document.querySelectorAll("#slider img");
let current = 0;
nextBtn.addEventListener("click", () => {
        images[current].classList.remove("img-active");
        // if(current >= (images.length - 1)) {
        //     current = -1;
        // }
        // current++;
        current = (current + 1) % images.length; //you can write this or above Code
        images[current].classList.add("img-active");
        console.log(current);
});
prevBtn.addEventListener("click", () => {
    console.log(current);
    images[current].classList.remove("img-active");
    if(current <= 0){
        current = images.length;
    }
    current--;
    images[current].classList.add("img-active");
});