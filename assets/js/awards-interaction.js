// Awards section interactive functionality
document.addEventListener("DOMContentLoaded", function () {
  const awardsContainer = document.querySelector(".awards-container");
  const awardItems = document.querySelectorAll(".award-item");

  if (!awardsContainer || !awardItems.length) return;

  // Add click event listeners to each award item
  awardItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Toggle clicked state on current item
      const isCurrentlyClicked = this.classList.contains("clicked");

      // Remove clicked class from all items
      awardItems.forEach((award) => {
        award.classList.remove("clicked");
      });

      // If this item wasn't clicked before, add the clicked class
      if (!isCurrentlyClicked) {
        this.classList.add("clicked");
        awardsContainer.classList.add("has-clicked");
      } else {
        // If it was clicked, remove the has-clicked class from container
        awardsContainer.classList.remove("has-clicked");
      }
    });
  });

  // Add click listener to document to close expanded awards when clicking outside
  document.addEventListener("click", function (e) {
    if (!awardsContainer.contains(e.target)) {
      awardItems.forEach((award) => {
        award.classList.remove("clicked");
      });
      awardsContainer.classList.remove("has-clicked");
    }
  });

  // Add keyboard support (Enter and Space keys)
  awardItems.forEach((item) => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "Click to expand award details");

    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });
});
