const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dateForm = document.getElementById("dateForm");

yesBtn.addEventListener("click", () => {
    dateForm.hidden = false;
    yesBtn.hidden = true;
    noBtn.hidden = true;
});

function moveNoButton() {
    const randomX = Math.random() * 250 - 125;
    const randomY = Math.random() * 250 - 125;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);