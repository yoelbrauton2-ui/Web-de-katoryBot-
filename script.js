// 🌸 KatoryBot-MD
// Sistema principal de la web

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌸 KatoryBot-MD Web iniciada");

    // Animación suave al hacer click en enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
