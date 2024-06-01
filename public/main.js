import { isiTeks } from "./story.js";

const cerita = document.querySelector(".text");
const opening = document.querySelector(".opening");

opening.addEventListener("touchstart", function() {
    opening.style.visibility = "hidden";
    opening.style.opacity = "0";
    opening.style.transition = "visibility 0s 2s, opacity 2s linear";

    cerita.innerHTML = isiTeks[0].prologue;
    cerita.style.textJustify = "inter-word";
    cerita.style.textAlign = "justify";
    // cerita.createElement = "button";

})

