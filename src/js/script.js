//MENU visible interactif sur toutes les pages

const menuBtn = document.querySelector('.menu-btn');
const siteMenu = document.getElementById('mainNav');

if (menuBtn && siteMenu) {
    const OPEN_CLASS = 'menu--open';
    const ANIM_DURATION = 250;

    const openMenu = () => {
        // Force le logo du header à pointer vers l'accueil
        document.querySelectorAll('.header__link').forEach((link) => {
            link.setAttribute('href', '/');
        });

        siteMenu.hidden = false;
        siteMenu.classList.add(OPEN_CLASS);
        menuBtn.classList.add('menu-btn--open');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        siteMenu.classList.remove(OPEN_CLASS);
        menuBtn.classList.remove('menu-btn--open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (!siteMenu.classList.contains(OPEN_CLASS)) {
                siteMenu.hidden = true;
            }
        }, ANIM_DURATION);
    };

    menuBtn.addEventListener('click', () => {
        const isOpen = siteMenu.classList.contains(OPEN_CLASS);
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}



//Carousel dans la page templatechronixx.html

const gallerySlider = document.querySelector('.artist-gallery__slider');
const slides = document.querySelectorAll('.artist-gallery__slide');

if (gallerySlider && slides.length) {
    const slideWidth = gallerySlider.clientWidth;

    document
        .querySelector('.artist-gallery__arrow--next')
        .addEventListener('click', () => {
            gallerySlider.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

    document
        .querySelector('.artist-gallery__arrow--prev')
        .addEventListener('click', () => {
            gallerySlider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
}


// Bouton retour en haut de page, visible dans toutes les pages quand on scroll
const backToTopBtn = document.createElement('button');
backToTopBtn.type = 'button';
backToTopBtn.className = 'back-to-top';
backToTopBtn.setAttribute('aria-label', 'Remonter en haut');
backToTopBtn.setAttribute('aria-hidden', 'true');
backToTopBtn.textContent = '↑';
document.body.appendChild(backToTopBtn);

const toggleBackToTop = () => {
    const isVisible = window.scrollY > 200;
    backToTopBtn.classList.toggle('is-visible', isVisible);
    backToTopBtn.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();


// Lazy loading pour les images hors écran
const enableLazyLoading = () => {
    const imgs = document.querySelectorAll('img:not([loading])');
    imgs.forEach((img) => {
        img.loading = 'lazy';
    });
};

if ('loading' in HTMLImageElement.prototype) {
    enableLazyLoading();
} else {
    window.addEventListener('DOMContentLoaded', enableLazyLoading, { once: true });
}




