const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");
const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");

let current = 0;

// Hide loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 2500);
});

// Show a page
function showPage(index) {
  pages.forEach((page) => page.classList.remove("active"));
  pages[index].classList.add("active");
}

// Start button
startBtn.addEventListener("click", () => {
  current = 1;
  showPage(current);

  // Play music (browser may require user interaction)
  const music = document.getElementById("music");
  if (music) {
    music.play().catch(() => {});
  }
});

// Next buttons
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    current++;

    if (current >= pages.length) {
      current = pages.length - 1;
    }

    showPage(current);

    // Confetti on last page
    if (
      current === pages.length - 1 &&
      typeof confetti !== "undefined"
    ) {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
      });
    }
  });
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");

  heart.innerHTML = ["🤍", "💕", "💖", "🌸", "💗"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-40px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  let pos = -40;

  const move = setInterval(() => {
    pos += 2;
    heart.style.bottom = pos + "px";

    if (pos > window.innerHeight + 50) {
      clearInterval(move);
      heart.remove();
    }
  }, 20);

}, 700);
