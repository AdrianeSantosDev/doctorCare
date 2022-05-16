window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
    shwoBackToTopButtonOnScroll();
}

function showNavOnScroll() {
    if (!scrollY) {
        navigation.classList.remove('scroll');
    } else {
        navigation.classList.add('scroll');
    }
}

function shwoBackToTopButtonOnScroll() {
    if (scrollY >= 644) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(
    '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contacts, #contacts header, #contacts .content'
);
