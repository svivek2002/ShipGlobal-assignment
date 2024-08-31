let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(index) {
    showSlides(slideIndex = index);
}

function showSlides(index) {
    const slides = document.querySelectorAll(".carousel-slide img");
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Handle keyboard arrow key events
function handleKey(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
    } else if (event.key === "ArrowLeft") {
        prevSlide();
    }
}

// Focus on the carousel container to capture key events
document.querySelector('.carousel-container').focus();
