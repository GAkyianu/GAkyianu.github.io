// Open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Slideshow initialization
let slidesIndex = 1;
showSlides(slidesIndex);

// Change slide with arrows
function plusSlides(n) {
    showSlides(slidesIndex += n);
}

// Change slide with dots
function currentSlide(n) {
    showSlides(slidesIndex = n);
}

// Main slideshow function
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slidesIndex = 1;
    if (n < 1) slidesIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].classList.add("active");
}

// Close form when clicking outside it
document.addEventListener("click", function(event) {
    const clickedInsideForm = event.target.closest(".form-popup");
    const clickedButton = event.target.closest(".Pop_Up_Button");
    const clickedContactLink = event.target.closest(".contact");

    if (
        event.target.matches(".cancel") ||
        (!clickedInsideForm && !clickedButton && !clickedContactLink)
    ) {
        closeForm();
    }
});

