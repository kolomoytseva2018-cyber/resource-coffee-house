const buttons = document.querySelectorAll(".cat-btn");
const sections = document.querySelectorAll(".category-section");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        // меняем активную кнопку
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // показываем нужную секцию
        sections.forEach(section => {

            if (section.dataset.category === category) {
                section.classList.add("active-category");
            } else {
                section.classList.remove("active-category");
            }

        });

    });

});

// =====================
// Product Modal
// =====================

const productCards = document.querySelectorAll(".product-card");
const modal = document.querySelector("#product-modal");

const modalTitle = document.querySelector(".modal-title");
const modalImage = document.querySelector(".modal-image");
const modalDescription = document.querySelector(".modal-description");
const modalPrice = document.querySelector(".modal-price");


// Открытие модального окна

productCards.forEach(card => {

    card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;

        modalImage.src = card.dataset.image;
        modalImage.alt = card.dataset.title;

        modalDescription.textContent = card.dataset.description;

        modalPrice.textContent = card.dataset.price;


        modal.classList.add("active");

    });

});


// Закрытие по кнопке

const closeButton = document.querySelector(".modal-close");

if (closeButton) {
    closeButton.addEventListener("click", () => {

        modal.classList.remove("active");

    });
}


// Закрытие по клику на фон

if (modal) {
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            modal.classList.remove("active");
        }

    });
}

// =====================
// Favorite Coffee Slider
// =====================

const coffeeCards = document.querySelectorAll(".coffee-card");
const sliderBullets = document.querySelectorAll(".bullet");

const nextSlide = document.querySelector(".slider-btn.next");
const prevSlide = document.querySelector(".slider-btn.prev");

let currentCoffee = 0;


// показать слайд

function showCoffee(index) {

    coffeeCards.forEach(card => {
        card.classList.remove("active");
    });

    sliderBullets.forEach(bullet => {
        bullet.classList.remove("active");
    });


    coffeeCards[index].classList.add("active");
    sliderBullets[index].classList.add("active");

}


// вперед

nextSlide.addEventListener("click", () => {

    currentCoffee++;

    if (currentCoffee >= coffeeCards.length) {
        currentCoffee = 0;
    }

    showCoffee(currentCoffee);

});


// назад

prevSlide.addEventListener("click", () => {

    currentCoffee--;

    if (currentCoffee < 0) {
        currentCoffee = coffeeCards.length - 1;
    }

    showCoffee(currentCoffee);

});