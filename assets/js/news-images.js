document.addEventListener("DOMContentLoaded", function () {
  // Create overlay div for enlarged images
  const overlay = document.createElement("div");
  overlay.className = "news-image-overlay";
  document.body.appendChild(overlay);

  // Add click event to all news images
  const newsImages = document.querySelectorAll(".news-image");

  newsImages.forEach(function (image) {
    image.addEventListener("click", function () {
      // Toggle enlarged class
      this.classList.add("enlarged");
      overlay.classList.add("active");

      // Prevent scrolling on body when image is enlarged
      document.body.style.overflow = "hidden";
    });
  });

  // Close enlarged image when clicking outside
  overlay.addEventListener("click", function () {
    const enlargedImage = document.querySelector(".news-image.enlarged");
    if (enlargedImage) {
      enlargedImage.classList.remove("enlarged");
      overlay.classList.remove("active");

      // Re-enable scrolling
      document.body.style.overflow = "";
    }
  });

  // Close enlarged image when pressing Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const enlargedImage = document.querySelector(".news-image.enlarged");
      if (enlargedImage) {
        enlargedImage.classList.remove("enlarged");
        overlay.classList.remove("active");

        // Re-enable scrolling
        document.body.style.overflow = "";
      }
    }
  });
});
