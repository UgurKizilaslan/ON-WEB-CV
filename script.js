// Arkaplanda hafif hareketli efekt
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".background");
  const x = (window.innerWidth - e.pageX * 2) / 90;
  const y = (window.innerHeight - e.pageY * 2) / 90;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});

// Scroll animasyonu
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
