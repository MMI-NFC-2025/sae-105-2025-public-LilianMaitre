const menuBtn = document.querySelector('.menu-btn');
const siteMenu = document.getElementById('mainNav');

if (menuBtn && siteMenu) {
    const OPEN_CLASS = 'menu--open';
    const ANIM_DURATION = 250;

    const openMenu = () => {
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







// CAROUSEL
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




