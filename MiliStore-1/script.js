"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggleButton = document.getElementById("toggle-skills");
const skillsList = document.getElementById("skills-list");
toggleButton.addEventListener("click", () => {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleButton.textContent = "Hide";
    }
    else {
        skillsList.style.display = "none";
        toggleButton.textContent = "Show";
    }
});
