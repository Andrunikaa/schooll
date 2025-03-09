document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = 5;
  let currentSlide = 0;
  let intervalId;

  function showSlide(index) {
    // Calculate the translation value
    let translateX = -index * (100 / totalSlides); // 25% = (100% / 4), more flexible
    // Apply the translation
    carouselWrapper.style.transform = `translateX(${translateX}%)`;

    // Update active dot
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 2500); // Change slide every 5 seconds
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Attach click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      stopSlider(); // Stop automatic transition when a dot is clicked
      showSlide(index);
      startSlider(); // Resume automatic transition after manual change
    });
  });

  carouselWrapper.addEventListener("mouseenter", stopSlider); // Stop when mouse over the carousel
  carouselWrapper.addEventListener("mouseleave", startSlider); // Start when mouse leaves the carousel

  // Initialize the slider
  startSlider(); // Begin automatic transition on load
});
document.addEventListener("DOMContentLoaded", function () {
  const priceItems = document.querySelectorAll(".price-item");

  priceItems.forEach((item) => {
    const header = item.querySelector(".price-header");
    const details = item.querySelector(".price-details");
    const toggleButton = item.querySelector(".toggle-button");

    header.addEventListener("click", function () {
      // Toggle the 'expanded' class on details
      details.classList.toggle("expanded");

      // Toggle the 'expanded' class on the toggle button
      toggleButton.classList.toggle("expanded");

      // Update the plus/minus icon visually
      toggleButton.textContent = details.classList.contains("expanded")
        ? "×"
        : "+";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.querySelector(".menu-container");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".menu-close-button");

  function toggleMenu() {
    menuContainer.classList.toggle("expanded");
  }

  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu); // Close on close button click
});
