var badges = document.querySelectorAll(".fsp-header-box");

badges.forEach((badge) => {
  badge.addEventListener("click", function (e) {
    if (this.classList.contains("price-badge") == true) {
      this.classList.add("price-badge-color");
      return;
    } else if (this.classList.contains("discounted-price") == true) {
      this.classList.add("discounted-price-color");
      return;
    } else {
      this.classList.add("active");
    }
  });
});
