let mode = 0;
let cardBox = document.getElementById("cardBox");
let card = document.getElementById("card");
let cardContent = document.getElementById("cardContent");
let sideways = document.getElementById("sideways");

let anime = function animate() {
    if (mode == 0) {
        card.style.transform = 'scaleX(2.5) scaleY(2.2) rotateX(180deg)';
        card.style.opacity = '1';
        cardContent.style.transform = 'rotateX(180deg)';
        cardContent.style.transition = 'ease 0.4s'
        cardContent.style.opacity = '0';
        sideways.style.transition = 'ease 2s'
        sideways.style.opacity = '1';
        mode = 1;
    } else {
        card.style.transform = 'scale(1) rotateX(0deg)';

        card.style.transition = 'ease 1s'
        card.style.opacity = '0';
        cardContent.style.transform = 'rotateX(0deg)';
        cardContent.style.transition = 'ease 1s'
        cardContent.style.opacity = '1';
        sideways.style.transition = 'ease 0.5s'
        sideways.style.opacity = '0';
        mode = 0;

    }
    console.log(mode);

}


cardBox.addEventListener('click', anime, false);