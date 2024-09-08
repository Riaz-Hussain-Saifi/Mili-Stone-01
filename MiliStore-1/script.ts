const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

toggleButton.addEventListener("click", () => {
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
    toggleButton.textContent = "Hide";
  } else {
    skillsList.style.display = "none";
    toggleButton.textContent = "Show";
  }
});
