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

function goTo() {
    window.location.replace(
        'https://api.whatsapp.com/send?phone=5511951659284&text=Ol%C3%A1%2C%20quero%20marcar%20uma%20consulta.'
    );
}

function goToTop() {
    window.location.replace('/#home');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(
    '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contacts, #contacts header, #contacts .content'
);
