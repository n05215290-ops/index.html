document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});

fetch("başar.html")
  .then(res => res.json())
  .then(data => console.log(data));

  fetch("http://127.0.0.1:5500/%C3%B6zbek.html")
  .then(res => res.json())
  .then(data => console.log(data));

  fetch("http://127.0.0.1:5500/%C3%A7i%C3%A7ek.html")
  .then(res => res.json())
  .then(data => console.log(data));

  fetch("http://127.0.0.1:5500/adnan.html")
  .then(res => res.json())
  .then(data => console.log(data));

  fetch("http://127.0.0.1:5500/zafer.html")
  .then(res => res.json())
  .then(data => console.log(data));

  fetch("http://127.0.0.1:5500/hande.html")
  .then(res => res.json())
  .then(data => console.log(data));