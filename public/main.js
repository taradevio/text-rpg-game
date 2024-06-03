import { isiTeks } from "./story.js";
import { questions } from "./questions.js";

const cerita = document.querySelector(".text");
const opening = document.querySelector(".opening");
const choices = document.querySelector(".choices");
opening.addEventListener("touchstart", function() {
    // opening.style.transition = "visibility 0s 2s, opacity 1s linear";
    // opening.style.opacity = "0";
    opening.style.display = "none";
    const prologue = document.createElement("p");
    prologue.innerHTML = isiTeks[0].prologue;
    cerita.appendChild(prologue);
    cerita.style.textJustify = "inter-word";
    cerita.style.textAlign = "justify";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "gas main bang!";
    nextBtn.className = "start-game";
    choices.appendChild(nextBtn);

    nextBtn.addEventListener("click", function() {
        prologue.style.display = "none";
        nextBtn.style.display = "none";

        const playerProfile = document.querySelector(".player");
        const userImage = document.querySelector(".user-image");
        const username = document.querySelector(".user-name");
        const userclass = document.querySelector(".user-class");
        const hp = document.querySelector(".hp");
        const hpAmount = document.querySelector(".hp-amount");

        userImage.src = isiTeks[1].userImage;
        username.innerHTML = isiTeks[1].userName;
        userclass.innerHTML = isiTeks[1].userClass;
        hp.innerHTML = "HP";
        hpAmount.textContent = 100;
        playerProfile.display = "block";
        
    });
});







