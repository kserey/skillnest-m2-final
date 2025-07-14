$(document).ready(function () {

    // PREPARE ELEMENTS FOR ANIMATION
    function prepareForAnimation(selector, offset = 30) {
        $(selector).css({ opacity: 0, position: 'relative', top: `${offset}px` });
    }

    // ANIMATION: FADE IN AND MOVE UP
    function animateElement(element, duration = 600) {
        $(element).animate({ opacity: 1, top: 0 }, duration);
    }

    // ANIMATION: FADE IN ON SCROLL
    function animateOnScroll(selector, offsetTrigger = 50, duration = 600) {
        $(selector).each(function () {
        const elementTop = $(this).offset().top;
        const scrollBottom = $(window).scrollTop() + $(window).height();

        if (scrollBottom > elementTop + offsetTrigger && $(this).css('opacity') == 0) {
            animateElement(this, duration);
        }
        });
    }

    // LOAD ANIMATION
    prepareForAnimation('.card');
    prepareForAnimation('#cta');

    // LAUNCH ANIMATION ON SCROLL
    $(window).on('scroll', function () {
        animateOnScroll('.card');
        animateOnScroll('#cta');
    });

    // INITIAL ANIMATION
    animateOnScroll('.card');
    animateOnScroll('#cta');
});

// LOAD NAVBAR AND FOOTER
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  loadFooter();
});

// INSERT NAVBAR
function loadNavbar() {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="${getBasePath()}index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="${getBasePath()}assets/pages/threats.html">Amenazas</a></li>
                        <li class="nav-item"><a class="nav-link" href="${getBasePath()}assets/pages/tips.html">Consejos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    }
}

// INSERT FOOTER
function loadFooter() {
    const footerHTML = `
        <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">© 2025 Ciberseguridad. Todos los derechos reservados.</p>
            <p class="mb-0">
            Desarrollado por 
            <a href="https://www.linkedin.com/in/irina-serey/" target="_blank" class="text-white">Irina Serey</a>
            </p>
        </div>
        </footer>
    `;
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// GET BASE PATH
function getBasePath() {
    const path = window.location.pathname;

    if (path.includes("/assets/pages/")) {
        return "../../";
    }

    return "./";
}
