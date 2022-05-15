function onScroll() {
    if (!scrollY) {
        navigation.classList.remove('scroll');
    } else {
        navigation.classList.add('scroll');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

function onCLick() {
    alert('Você vai ser redirecionado!');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(
    '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contacts, #contacts header, #contacts .content'
);
