document.addEventListener("DOMContentLoaded", function () {
    // Aparecer elementos al hacer scroll
    const animatedElements = document.querySelectorAll(".animated");

    function showOnScroll() {
        let scrollTop = window.scrollY;
        animatedElements.forEach(el => {
            if (el.offsetTop < scrollTop + window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Para elementos ya visibles al cargar la página

    // Botón "Volver arriba"
    const btnTop = document.getElementById("btn-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
