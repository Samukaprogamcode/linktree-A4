function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/logo-dark.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/logo-light.png")
  }
}
let current = 0;
const reviews = document.querySelectorAll(".review");

function showReview() {
  reviews.forEach((rev, i) => {
    rev.classList.toggle("active", i === current);
  });
  current = (current + 1) % reviews.length;
}

setInterval(showReview, 4000);
