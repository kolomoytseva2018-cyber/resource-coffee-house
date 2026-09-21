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