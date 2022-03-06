const slider = document.querySelector("#slider");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const images = document.querySelectorAll("#slider img");
let current = 0;
nextBtn.addEventListener("click", () => {
        images[current].classList.remove("img-active");
        current++;
        images[current].classList.add("img-active");
        console.log(current);
        if(current >= (images.length)) {
            current = 0;
        }
});