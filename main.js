window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    const sectionBoundaries =
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const elementName = document.querySelector(`.menu a[href*=${sectionId}]`);

    elementName.classList.remove('active');

    if (sectionBoundaries) {
        elementName.classList.add('active');
    }
}

function showNavOnScroll() {
    if (!scrollY) {
        navigation.classList.remove('scroll');
    } else {
        navigation.classList.add('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY >= 500) {
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
    '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contact, #contact header, #contact .col-a, #contact .col-b'
);
