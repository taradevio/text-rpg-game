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
    prologue.innerText = isiTeks[0].prologue;
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

        // const senjata = document.createElement("p");
        // senjata.innerText = isiTeks[0];
        // cerita.appendChild(senjata);
    });
});







