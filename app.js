const btnOpen = document.getElementById("myBtn");
const spoiler = document.getElementById("spoiler");
btnOpen.addEventListener("click", () =>
  spoiler.classList.contains("closed")
    ? spoiler.classList.remove("closed")
    : spoiler.classList.add("closed")
);
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && !spoiler.classList.contains("closed")) {
    spoiler.classList.add("closed");
  }
});
