document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize each slider individually
    function initSlider(slider) {
        const slides = slider.querySelectorAll('.slide');
        const leftArrow = slider.querySelector('.nav-arrow.left');
        const rightArrow = slider.querySelector('.nav-arrow.right');
        let currentIndex = 0;
        const totalSlides = slides.length;
        const intervalTime = 3000;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        function startSlideshow() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function stopSlideshow() {
            clearInterval(slideInterval);
        }

        // Add click listeners to arrows inside this slider
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            });
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            });
        }

        // Optional: keyboard navigation if slider is focused
        slider.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            } else if (e.key === 'ArrowRight') {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            }
        });

        slider.setAttribute('tabindex', '0'); // make focusable
        showSlide(currentIndex); // show first slide
        startSlideshow();
    }

    // Find all sliders on the page and initialize them separately
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        initSlider(slider);
    });

    console.log("All sliders initialized successfully.");
});
