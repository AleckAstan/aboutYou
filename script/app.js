let mode = 0;
let flip = document.getElementById("flip");
let card = document.getElementById("card");
let cardContent = document.getElementById("cardContent");
let sideways = document.getElementById("sideways");

let anime = function animate() {
    if (mode == 0) {
        card.style.transform = 'scale(2) rotateX(180deg)';
        cardContent.style.transform = 'rotateX(180deg)';
        cardContent.style.transition = 'ease 0.5s'
        cardContent.style.opacity = '0';
        sideways.style.transition = 'ease 2s'
        sideways.style.opacity = '1';
        mode = 1;
    } else {
        card.style.transform = 'scale(1) rotateX(0deg)';
        cardContent.style.transform = 'rotateX(0deg)';
        cardContent.style.transition = 'ease 1s'
        cardContent.style.opacity = '1';
        sideways.style.transition = 'ease 0.5s'
        sideways.style.opacity = '0';
        mode = 0;

    }
    console.log(mode);

}


flip.addEventListener('click', anime, false);