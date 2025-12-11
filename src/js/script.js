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
