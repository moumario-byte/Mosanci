
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  if (!burger) return;

  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("menuOpen");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
});