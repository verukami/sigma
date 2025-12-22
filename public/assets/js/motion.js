const shapes = document.querySelectorAll(".shape");
const projects = document.querySelectorAll(".piece");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  shapes.forEach((shape, i) => {
    const target = projects[i];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const offset = rect.top + scrollY - window.innerHeight / 2;

    shape.style.transform = `
      translateY(${Math.min(scrollY * 0.3, offset)}px)
      rotate(${scrollY * 0.05}deg)
    `;
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".micro-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  
  toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";

  document.body.style.overflow = nav.classList.contains("open")
    ? "hidden"
    : "";
});

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});
