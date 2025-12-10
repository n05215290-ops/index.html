//----------------------------------------------
// SEPET
//----------------------------------------------
const cartIcon = document.querySelector(".cart-icon");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const addCartButtons = document.querySelectorAll(".add-cart");
let cart = [];

if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        cartPanel.classList.add("active");
    });
}

if (closeCart) {
    closeCart.addEventListener("click", () => {
        cartPanel.classList.remove("active");
    });
}

addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.marginBottom = "10px";

        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} - ${item.price}₺`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Sil";
        removeBtn.style.background = "red";
        removeBtn.style.color = "#fff";
        removeBtn.style.border = "none";
        removeBtn.style.borderRadius = "5px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.padding = "2px 6px";
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        div.appendChild(itemText);
        div.appendChild(removeBtn);
        cartItems.appendChild(div);

        total += item.price;
    });

    cartTotal.textContent = total;
    const cartCountElem = document.getElementById("cart-count");
    if (cartCountElem) {
        cartCountElem.textContent = cart.length;
    }
}



//----------------------------------------------
// SSS - FAQ
//----------------------------------------------
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
    const question = card.querySelector(".faq-question");
    const answer = card.querySelector(".faq-answer");

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
    });
});



//----------------------------------------------
// MODAL (Büyütme yok ama resim tıklanınca açılır)
//----------------------------------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// Sadece resme tıklanınca modal açılır — büyütme efekti yok
document.querySelectorAll(".zoom-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}



//----------------------------------------------
// FORM SUBMIT
//----------------------------------------------
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form gönderildi!");
        form.reset();
    });
});


//--------------------------------------------------



//-----------------------------------------------
// YUKARI ÇIK BUTTONU
//-----------------------------------------------
// Butonu seç
const topBtn = document.getElementById("topBtn");

// Sayfa kaydırıldığında butonu göster/gizle
window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Butona tıklanınca sayfayı yukarı kaydır
topBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// BURS
document.getElementById("bursForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value.trim();
    const soyad = document.getElementById("soyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const kurs = document.getElementById("kurs").value;

    if (!ad || !soyad || !email || !kurs) {
        alert("Lütfen zorunlu alanları doldurunuz.");
        return;
    }

    document.getElementById("successMessage").textContent =
        `${ad} ${soyad}, başvurunuz başarıyla alınmıştır! En kısa zamanda sizinle iletişime geçilecektir.`;

    document.getElementById("successMessage").style.display = "block";

    this.reset();
});



//----------------------------------------------
// DÖNEM
//----------------------------------------------
function addComment(lessonId){
    const input = document.getElementById(`commentInput${lessonId}`);
    const list = document.getElementById(`commentList${lessonId}`);
    const text = input.value.trim();

    if(text === "") return;

    const div = document.createElement("div");
    div.className = "comment-box";
    div.textContent = text;

    list.appendChild(div);
    input.value = "";
}
