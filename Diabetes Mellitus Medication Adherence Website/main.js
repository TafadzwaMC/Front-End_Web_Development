document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');

    if (!slideshow) {
        console.error("Slideshow container not found!");
        return;
    }

    const images = [
        "../images/Copy.jpg",
        "../images/Maybe.jpg",
        "../images/Current.jpeg",
        "../images/diabetes.jpg",
        "../images/Insulin.png"
    ];

    // Create slide elements
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) slide.classList.add('active'); // first image visible on load
        slide.style.backgroundImage = `url(${img})`;
        slideshow.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active'); // hide current
        current = (current + 1) % slides.length;
        slides[current].classList.add('active'); // show next
    }, 3050); // change every x seconds
});
